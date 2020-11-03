import React from 'react';
import { connect } from 'react-redux';

import AddComment from './comments/AddComment';
import CommentsList from './comments/CommentsList';
import "./style.css"
import { InitialStateType } from "./storage/store";
import { CommentType } from './storage/store';

type PropsType = {
  comments: CommentType[]
}

export class App extends React.Component<PropsType> {
  render() {
    return <div className="comment-layout">
          <div className="title">Комментарии ({this.props.comments.length})</div>
          <AddComment textValue="Добавить комментарий"></AddComment>
          <CommentsList comments={this.props.comments}></CommentsList>
        </div>
  }
}
const mapStateToProps = function (state : InitialStateType) {
  return {
      comments: state.comments
  }
}
export default connect(mapStateToProps)(App);