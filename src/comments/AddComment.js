/*
*   React-компонент блока добавления комментария, содержит поля ввода имени, текста комментария
*/
import React, { useRef } from 'react';

import { connect } from 'react-redux';
import { addAnswerComment, addNewComment } from '../storage/actions'
import "../style.css"

function AddComment(props) {
    //реф на поле ввода имени 
    const inputNameRef = useRef(null);
    //реф на поле ввода комментария
    const inputCommentRef = useRef(null);

    //добавление комментария в storage
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isNaN(props.id)) {
            //добавление ответа в storage
            props.addAnswer(props.id, inputCommentRef.current.value, inputNameRef.current.value);
            //скрытие блока ответа
            props.setIsShow(false)
        }
        else
            //добавление комментария в storage
            props.addComment(inputCommentRef.current.value, inputNameRef.current.value);
        //очищение полей ввода
        inputNameRef.current.value = "";
        inputCommentRef.current.value = "";
    }

    return (<>
        <form
            onSubmit={(event) => handleSubmit(event)}>
            <label>
                Введите Ваше имя:
                <input
                    autoFocus={props.focus}
                    name="name"
                    type="text"
                    ref={inputNameRef}
                    placeholder="Введите имя"
                    required
                    minLength="2"
                    maxLength="60"
                />
            </label>
            <br />
            <label>
                Введите сообщение:
                <textarea
                    name="comment"
                    ref={inputCommentRef}
                    required
                    placeholder="Введите сообщение"
                    maxLength="500"
                />
            </label>
            <input
                type="submit"
                className="add-comment-button"
                value={props.textValue}
            />
        </form>
    </>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text, author) => {
            dispatch(addNewComment(text, author))
        },
        addAnswer: (id, text, author) => {
            dispatch(addAnswerComment(id, text, author))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddComment);
