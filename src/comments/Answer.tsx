/**
 *   React-компонент блока ответов на комментарий
 */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AnswerType, InitialStateType } from "../storage/store";
import "../style.css";
import CommentBody from "./CommentBody";

type PropsType = {
    answers: AnswerType[]
    id: number;
}


function Answer(props: PropsType) {
  //инициализация отображения кнопки "Показать все"
  const [isShowMore, setShowMore] = useState(false);
  //инициализация количества отображаемых ответов на комментарий
  const [countShowComment, setCountComment] = useState(2);
console.log(props)
  useEffect(() => {
    //установка отображения кнопки "показать все"
    setShowMore(props.answers.length > countShowComment);
    //проверка, раскрыты ли все сообщения для корректного отображения при добавлении нового ответа
    if (
      countShowComment !== props.answers.length &&
      isShowMore &&
      countShowComment !== 2
    ) {
      setCountComment(props.answers.length);
    }
  }, [props.answers.length, countShowComment, isShowMore]);

  return props.answers.length > 0 ? (
    <div className="answer-layout">
      {props.answers.map(
        (answer, idx) =>
          idx < countShowComment && <CommentBody comment={answer} key={idx} />
      )}
      {isShowMore && (
        <div
          className="show-more-button"
          onClick={() => setCountComment(props.answers.length)}
        >
          Показать все
        </div>
      )}
    </div>
  ) : null;
}

const mapStateToProps = function (state: InitialStateType, props: PropsType) {
  return {
    answers: state.answers.filter(
      (answ: AnswerType) => answ.parent === props.id
    ),
  };
};
type MapDispatchToProps = null
export default connect(mapStateToProps, null)(Answer);
