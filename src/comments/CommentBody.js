/**
*   React-компонент рендера комментариев: иконки, автора, текста сообщения, даты и времени
*/
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { deleteAnswer, deleteComment, editAnswer, editComment } from '../storage/actions';
import "../style.css"

function CommentBody(props) {
    const [isEditComment, setIsEdit] = useState(false);

    //реф на поле ввода комментария
    const inputCommentRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        //проверка наичия родителя = ответ на комментарий
        if (!isNaN(props.comment.parent))
            props.editAnswer(props.comment.id, inputCommentRef.current.value)
        else
            props.editComment(props.comment.id, inputCommentRef.current.value)
        //закрыть режим редактирования
        setIsEdit(false)
    }

    return (
        <div className="comment-item">
            <div className="icon-container">
                <div className="icon"></div>
            </div>
            <div className="comment">
                <div className="comment-info-layout" >
                    <div className="comment-info">
                        <div className="comment-author">
                            {props.comment.author}
                        </div>
                        <div className="datetime-comment">
                            {props.comment.date} {props.comment.time}
                        </div>
                    </div>
                    <div className="comment-controls">
                        {!isEditComment &&
                            <input
                                type="button"
                                onClick={() => setIsEdit(!isEditComment)}
                                className="edit-button"
                            />}
                        <input
                            type="button"
                            onClick={() => {
                                if (!isNaN(props.comment.parent))
                                    props.deleteAnswer(props.comment.id)
                                else props.deleteComment(props.comment.id)
                                if (isEditComment)
                                    setIsEdit(false)
                            }}
                            className="delete-button"
                        />
                    </div>
                </div>

                {isEditComment
                    ? <form onSubmit={(event) => handleSubmit(event)}>
                        <textarea
                            name="comment"
                            ref={inputCommentRef}
                            required
                            placeholder="Введите сообщение"
                            maxLength="500"
                            defaultValue={props.comment.text}
                        />
                        <input
                            type="submit"
                            value="Сохранить изменения"
                            className="answer-button"
                        />
                    </form>
                    : <p className="text-comment">
                        {props.comment.text}
                    </p>
                }
            </div>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        editComment: (id, text) => {
            dispatch(editComment(id, text))
        },
        editAnswer: (id, text) => {
            dispatch(editAnswer(id, text))
        },
        deleteComment: (id) => {
            dispatch(deleteComment(id))
        },
        deleteAnswer: (id) => {
            dispatch(deleteAnswer(id))
        }
    }
}


export default connect(null, mapDispatchToProps)(CommentBody)