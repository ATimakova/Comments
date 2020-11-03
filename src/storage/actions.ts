export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_ANSWER = "ADD_ANSWER";
export const EDIT_ANSWER = "EDIT_ANSWER";
export const DELETE_ANSWER = "DELETE_ANSWER";

type AddCommentType = {
  type: typeof ADD_NEW_COMMENT;
  text: string;
  author: string;
};

type EditCommentType = {
  type: typeof EDIT_COMMENT;
  text: string;
  id: number;
};

type DeleteCommentType = {
  type: typeof DELETE_COMMENT;
  id: number;
};

type AddAnswerCommentType = {
  type: typeof ADD_ANSWER;
  text: string;
  author: string;
  id: number;
};

type EditAnswerType = {
  type: typeof EDIT_ANSWER;
  text: string;
  id: number;
};

type DeleteAnswerType = {
  type: typeof DELETE_ANSWER;
  id: number;
};

export type ActionTypes =
  | AddCommentType
  | EditCommentType
  | DeleteCommentType
  | AddAnswerCommentType
  | EditAnswerType
  | DeleteAnswerType;

//добавление нового комментария
export function addNewComment(text: string, author: string): AddCommentType {
  return { type: ADD_NEW_COMMENT, text, author };
}

//изменение комментария
export function editComment(id: number, text: string): EditCommentType {
  return { type: EDIT_COMMENT, id, text };
}

//удаление комментария
export function deleteComment(id: number): DeleteCommentType {
  return { type: DELETE_COMMENT, id };
}

//добавление ответа
export function addAnswerComment(
  id: number,
  text: string,
  author: string
): AddAnswerCommentType {
  return { type: ADD_ANSWER, id, text, author };
}

//изменение ответа
export function editAnswer(id: number, text: string): EditAnswerType {
  return { type: EDIT_ANSWER, id, text };
}

//удаление ответа
export function deleteAnswer(id: number): DeleteAnswerType {
  return { type: DELETE_ANSWER, id };
}
