import moment from 'moment';
import { createStore } from 'redux';


//инициализируем состояние хранилища
const initialState = {
    comments: [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis placerat egestas. Mauris lorem felis, accumsan faucibus justo pellentesque, viverra lobortis nibh. Maecenas faucibus tincidunt rhoncus. Aliquam id turpis id nisi pellentesque tincidunt.Suspendisse in nunc eu elit cursus tincidunt at non metus. Donec sed eleifend dolor.  Maecenas molestie vitae eros pellentesque eleifend. ",
            date: "2020-10-07",
            time: "10:34",
            author: "Andrew"
        },
        {
            id: 1,
            text: "Donec feugiat, orci quis commodo condimentum, sem sem semper nunc, et porttitor metus tellus sit amet nunc. Pellentesque at purus eu lacus cursus lobortis a nec diam. Aenean eget maximus arcu. Pellentesque elementum blandit lectus, blandit dignissim est porta ut. Vestibulum sit amet venenatis massa. Aenean non egestas sem, nec pretium tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            date: "2020-10-06",
            time: "11:59",
            author: "Petr"
        },
        {
            id: 2,
            text: "In sed felis aliquet, ultricies metus in, vehicula nisi. Integer in lacus sed nisl venenatis suscipit non ultrices libero. Sed ornare tincidunt neque, at iaculis mi pharetra ac. ",
            date: "2020-09-21",
            time: "12:06",
            author: "Aaron"
        },
        {
            id: 3,
            text: " Phasellus sed odio malesuada, blandit lacus nec, fringilla sem. In quis hendrerit orci. Donec quis ultricies lectus. Integer vestibulum, dui at elementum vulputate, tortor nibh mattis nisl, ut dignissim purus tellus eu mi. Cras elementum laoreet risus, ac egestas urna malesuada vitae.",
            date: "2020-09-15",
            time: "10:11",
            author: "Sergey"
        },
        {
            id: 4,
            text: "Vestibulum ultrices volutpat ullamcorper. Donec ac nunc at nisi posuere tincidunt. Quisque efficitur eros eu consectetur blandit. Aenean euismod facilisis sem in pretium. Nunc lorem ligula, finibus id nisl quis, dapibus tempus nulla. Vivamus auctor eu dolor et varius. Cras consectetur est nec mi lobortis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit ipsum at urna pulvinar interdum.",
            date: "2020-09-13",
            time: "11:19",
            author: "Elena"
        },
        {
            id: 5,
            text: "Donec egestas, nunc ac sollicitudin egestas, libero nunc dignissim dolor, ac fermentum tortor turpis vel erat. Nunc gravida sollicitudin ligula, id commodo nibh ornare eu. Suspendisse tristique tristique dui in sodales. Vivamus condimentum ex odio, vitae varius urna suscipit a. ",
            date: "2020-09-10",
            time: "23:47",
            author: "Max"
        },
    ],
    answers: [
        {
            id: 0,
            text: "Aenean eget maximus arcu. Pellentesque elementum blandit lectus, blandit dignissim est porta ut. ",
            author: "Anna",
            parent: 1,
            date: "2020-10-06",
            time: "23:11",
        },
        {
            id: 1,
            text: "Cras elementum laoreet risus, ac egestas urna malesuada vitae.",
            author: "Roman",
            parent: 1,
            date: "2020-10-06",
            time: "20:45",
        },
        {
            id: 2,
            text: "ok",
            parent: 1,
            author: "Vladimir",
            date: "2020-10-06",
            time: "17:36",
        }
    ]
}

export const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_COMMENT":
            return {
                ...state,
                comments: [{
                    id: state.comments.length,
                    text: action.text,
                    author: action.author,
                    date: moment().format("YYYY-MM-DD"),
                    time: moment().format("HH:mm"),
                },
                ...state.comments
                ]
            };
        case "EDIT_COMMENT":
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment.id === action.id
                        ? {
                            ...comment,
                            text: action.text
                        }
                        : { ...comment })
            }
        case "DELETE_COMMENT":
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.id),
                answers: state.answers.filter(answer => answer.parent !== action.id)
            }
        case "ADD_ANSWER":
            return {
                ...state,
                answers: [{
                    id: state.answers.length,
                    parent: action.id,
                    text: action.text,
                    author: action.author,
                    date: moment().format("YYYY-MM-DD"),
                    time: moment().format("HH:mm")
                },
                ...state.answers]
            };
        case "EDIT_ANSWER":
            return {
                ...state,
                answers: state.answers.map(answer =>
                    answer.id === action.id
                        ? {
                            ...answer,
                            text: action.text
                        }
                        : { ...answer })
            }
        case "DELETE_ANSWER":
            return {
                ...state,
                answers: state.answers.filter(answer => answer.id !== action.id)
            }
        default:
            return state;
    }

})

