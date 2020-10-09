

export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_ANSWER = 'ADD_ANSWER'
export const EDIT_ANSWER = "EDIT_ANSWER"
export const DELETE_ANSWER = "DELETE_ANSWER"

//добавление нового комментария
export function addNewComment(text, author) {
  return { type: ADD_NEW_COMMENT, text, author }
}

//изменение комментария
export function editComment(id, text) {
  return { type: EDIT_COMMENT, id, text }
}

//удаление комментария
export function deleteComment(id) {
  return { type: DELETE_COMMENT, id }
}

//добавление ответа
export function addAnswerComment(id, text, author){
  return { type: ADD_ANSWER, id, text, author }
}

//изменение ответа
export function editAnswer(id, text) {
  return { type: EDIT_ANSWER, id, text }
}

//удаление ответа
export function deleteAnswer(id) {
  return { type: DELETE_ANSWER, id }
}
