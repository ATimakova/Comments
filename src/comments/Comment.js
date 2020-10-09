/*
*   React-компонент блока комментария
*/
import React, { useState } from 'react';
import { addAnswerComment } from '../storage/actions'
import { connect } from 'react-redux';
import "../style.css"
import AddComment from './AddComment';
import CommentBody from './CommentBody';
import Answer from './Answer';

function Comment(props) {
    //установка отображения полей ввода ответа на комментарий (по умолчанию скрыто)
    const [showAnswerInput, setIsShow] = useState(false);
    return (<>
        <div className="comment-item-layout">
            <CommentBody comment={props.comment} />
            <input
                type="button"
                onClick={() => setIsShow(!showAnswerInput)}
                value="Ответить"
                className="answer-button"
            />
        </div>
        <Answer id={props.comment.id} />
        {showAnswerInput &&
            <AddComment
                focus
                id={props.comment.id}
                setIsShow={setIsShow}
                textValue="Ответить на комментарий"
            />
        }

    </>)
}


const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: (id, text) => {
            dispatch(addAnswerComment(id, text))
        }
    }
}

export default connect(null, mapDispatchToProps)(Comment)