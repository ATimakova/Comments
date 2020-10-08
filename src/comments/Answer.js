/**
*   React-компонент блока ответов на комментарий
*/
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "../style.css"
import CommentBody from './CommentBody';

function Answer(props) {
    //инициализация отображения кнопки "Показать все"
    const [isShowMore, setShowMore] = useState(false);
    //инициализация количества отображаемых ответов на комментарий
    const [countShowComment, setCountComment] = useState(2);

    useEffect(() => {
    //установка отображения кнопки "показать все"
        setShowMore(props.answers.length > countShowComment)
    }, [props.answers.length, countShowComment])

    return (props.answers.length > 0
        ? <div className="answer-layout">
            {props.answers.map((answer, idx) =>
               idx < countShowComment && <CommentBody comment={answer} key={idx} />
            )}
            {
                isShowMore &&
                <div
                    className="show-more-button"
                    onClick={() => setCountComment(props.answers.length)}>
                    Показать все
                </div>
            }
        </div>
        : null
    )
}


const mapStateToProps = function (state, props) {
    return {
        answers: state.answers.filter(answ => answ.parent === props.id)
    }
}

export default connect(mapStateToProps)(Answer)