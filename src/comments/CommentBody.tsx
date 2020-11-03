/**
 *   React-компонент рендера комментариев: иконки, автора, текста сообщения, даты и времени
 */
import React, {
  Dispatch,
  FormEvent,
  useRef,
  useState,
} from "react";
import { connect } from "react-redux";
import {
  ActionTypes,
  deleteAnswer,
  deleteComment,
  editAnswer,
  editComment,
} from "../storage/actions";
import "../style.css";

type localCommentType = {
    id: number;
    text: string;
    author: string;
    parent?: number | undefined;
    date: string;
    time: string;
}

type PropsType = {
  comment: localCommentType
  editAnswer: (id: number, ref: string ) => void;
  editComment: (id: number, ref: string ) => void;
  deleteAnswer: (id: number) => void;
  deleteComment: (id: number) => void;
  key?: number
};

function CommentBody(props: PropsType) {
  const [isEditComment, setIsEdit] = useState(false);
  console.log(props.comment);
  //реф на поле ввода комментария
  const inputCommentRef: React.RefObject<HTMLInputElement> | null = useRef(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //проверка наичия родителя = ответ на комментарий
    if (!!props.comment.parent && !isNaN(props.comment.parent))
      // @ts-ignore: Object is possibly 'null'.
      props.editAnswer(props.comment.id, inputCommentRef.current.value);
    // @ts-ignore: Object is possibly 'null'.
    else props.editComment(props.comment.id, inputCommentRef.current.value);
    //закрыть режим редактирования
    setIsEdit(false);
  };

  return (
    <div className="comment-item">
      <div className="icon-container">
        <div className="icon"></div>
      </div>
      <div className="comment">
        <div className="comment-info-layout">
          <div className="comment-info">
            <div className="comment-author">{props.comment.author}</div>
            <div className="datetime-comment">
              {props.comment.date} {props.comment.time}
            </div>
          </div>
          <div className="comment-controls">
            {!isEditComment && (
              <input
                type="button"
                onClick={() => setIsEdit(!isEditComment)}
                className="edit-button"
              />
            )}
            <input
              type="button"
              onClick={() => {
                if (!!props.comment.parent && !isNaN(props.comment.parent))
                  props.deleteAnswer(props.comment.id);
                else props.deleteComment(props.comment.id);
                if (isEditComment) setIsEdit(false);
              }}
              className="delete-button"
            />
          </div>
        </div>

        {isEditComment ? (
          <form onSubmit={(event) => handleSubmit(event)}>
            <textarea
              name="comment"
              // @ts-ignore:.
              ref={inputCommentRef}
              required
              placeholder="Введите сообщение"
              // @ts-ignore:.
              maxLength="500"
              defaultValue={props.comment.text}
            />
            <input
              type="submit"
              value="Сохранить изменения"
              className="answer-button"
            />
          </form>
        ) : (
          <p className="text-comment">{props.comment.text}</p>
        )}
      </div>
    </div>
  );
}
type DispatchType = Dispatch<ActionTypes>;
type MapDispatchToPropsType = {
    editComment: (id: number, text: string)=>void
    editAnswer: (id: number, text: string)=>void
    deleteComment: (id: number)=>void
    deleteAnswer: (id: number)=>void
}

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    editComment: (id: number, text: string) => {
      dispatch(editComment(id, text));
    },
    editAnswer: (id: number, text: string) => {
      dispatch(editAnswer(id, text));
    },
    deleteComment: (id: number) => {
      dispatch(deleteComment(id));
    },
    deleteAnswer: (id: number) => {
      dispatch(deleteAnswer(id));
    },
  };
};

export default connect<null, MapDispatchToPropsType>(null, mapDispatchToProps)(CommentBody);
