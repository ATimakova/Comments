/*
 *   React-компонент блока добавления комментария, содержит поля ввода имени, текста комментария
 */
import React, { Dispatch, FormEvent, useRef } from "react";

import { connect } from "react-redux";
import {
  ActionTypes,
  addAnswerComment,
  addNewComment,
} from "../storage/actions";
import "../style.css";

type PropsType = {
  focus?: boolean;
  id?: number;
  textValue: string;
  addAnswer: (id: number, text: string, name: string) => void;
  addComment: (text: string, name: string) => void;
  setIsShow?: (flag: boolean) => void;
};

function AddComment(props: PropsType) {
  //реф на поле ввода имени
  const inputNameRef: React.RefObject<HTMLInputElement>  = useRef<HTMLInputElement>(null);
  //реф на поле ввода комментария
  const inputCommentRef: React.RefObject<HTMLInputElement> | null = useRef<HTMLInputElement | null>(null);

  //добавление комментария в storage
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!props.id && !isNaN(props.id)) {
      //добавление ответа в storage
      props.addAnswer(
        props.id,
        // @ts-ignore: Object is possibly 'null'.
        inputCommentRef.current.value,
        // @ts-ignore: Object is possibly 'null'.
        inputNameRef.current.value
      );
      //скрытие блока ответа
      props.setIsShow && props.setIsShow(false);
    }
    //добавление комментария в storage
    else
      props.addComment(
          // @ts-ignore: Object is possibly 'null'.
        inputCommentRef.current.value,
        // @ts-ignore: Object is possibly 'null'.
        inputNameRef.current.value
      );
    //очищение полей ввода
    // @ts-ignore: Object is possibly 'null'.
    inputNameRef.current.value = "";
    // @ts-ignore: Object is possibly 'null'.
    inputCommentRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Введите Ваше имя:
          <input
            autoFocus={props.focus}
            name="name"
            type="text"
            ref={inputNameRef}
            placeholder="Введите имя"
            required
            // @ts-ignore:is not assignable to type 'number | undefined'.
            minLength="2"
            // @ts-ignore:is not assignable to type 'number | undefined'.
            maxLength="60"
          />
        </label>
        <br />
        <label>
          Введите сообщение:
          <textarea
            name="comment"
            // @ts-ignore: Object is possibly 'null'.
            ref={inputCommentRef}
            required
            placeholder="Введите сообщение"
            // @ts-ignore:is not assignable to type 'number | undefined'.
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
type DispatchType = Dispatch<ActionTypes>;
const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addComment: (text: string, author: string) => {
      dispatch(addNewComment(text, author));
    },
    addAnswer: (id: number, text: string, author: string) => {
      dispatch(addAnswerComment(id, text, author));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddComment);
