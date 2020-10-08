/**
*   React-компонент рендера комментариев: иконки, автора, текста сообщения, даты и времени
*/
import React from 'react';
import "../style.css"

function CommentBody(props) {
    return (
        <div className="comment-item">
            <div className="icon-container">
                <div className="icon"></div>
            </div>
            <div className="comment">
                <div className="comment-info">
                    <div className="comment-author">
                        {props.comment.author}
                    </div>
                    <div className="datetime-comment">
                        {props.comment.date} {props.comment.time}
                    </div>
                </div>
                <p className="text-comment">
                    {props.comment.text}
                </p>
            </div>



        </div>
    )
}

export default CommentBody