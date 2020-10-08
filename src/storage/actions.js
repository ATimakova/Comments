

export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const ADD_ANSWER = 'ADD_ANSWER'


export function addNewComment(text, author) {
  return { type: ADD_NEW_COMMENT, text, author }
}

export function addAnswerComment(id, text, author){
  return { type: ADD_ANSWER, id, text, author }
}
