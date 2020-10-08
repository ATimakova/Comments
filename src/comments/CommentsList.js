/*
*   React-компонент списка комментариев
*/
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import "../style.css"

function CommentsList(props) {
    //инициализация отображения кнопки "Показать еще"
    const [isShowMore, setShowMore] = useState(false);
    //инициализация количества отображаемых комментариев
    const [countShowComment, setCountComment] = useState(5);

    //установка отбражения кнопки "Показать еще"
    useEffect(() => {
        setShowMore(props.comments.length > countShowComment)
    }, [props.comments.length, countShowComment])

    return (
        props.comments.length > 0
            ? <div className="comment-container">
                {props.comments.map((comment, idx) =>
                    idx < countShowComment && <Comment key={idx} comment={comment}></Comment>
                )}
                {isShowMore &&
                    <div
                        className="show-more-button"
                        onClick={() => setCountComment(countShowComment + 5)}>
                        Показать еще
                        </div>
                }
            </div>
            : <div className="comment-container">
                Комментарии отсутсвуют
        </div>
    )
}


export default CommentsList;