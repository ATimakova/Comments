/*
 *   React-компонент блока комментария
 */
import React, { useState } from "react";
import "../style.css";
import AddComment from "./AddComment";
import CommentBody from "./CommentBody";
import Answer from "./Answer";
import { CommentType } from "../storage/store";

type PropsType = {
  comment: CommentType;
  addAnswerComment?: (id:number, text:string)=>void
};

function Comment(props: PropsType) {
  //установка отображения полей ввода ответа на комментарий (по умолчанию скрыто)
  const [showAnswerInput, setIsShow] = useState(false);
  return (
    <>
      <div className="comment-item-layout">
        <CommentBody comment={props.comment} />
        <input
          type="button"
          onClick={() => setIsShow(!showAnswerInput)}
          value="Ответить"
          className="answer-button"
        />
      </div>
      <Answer id={props.comment.id} answers={[]}/>
      {showAnswerInput && (
        <AddComment
          focus
          id={props.comment.id}
          setIsShow={setIsShow}
          textValue="Ответить на комментарий"
        />
      )}
    </>
  );
}


export default Comment;
