import React from 'react';
import { connect } from 'react-redux';

import AddComment from './comments/AddComment';
import CommentsList from './comments/CommentsList';
import "./style.css"

export class App extends React.Component {
  render() {
    return (
        <div className="comment-layout">
          <div className="title">Комментарии ({this.props.comments.length})</div>
          <AddComment textValue="Добавить комментарий"></AddComment>
          <CommentsList comments={this.props.comments}></CommentsList>
        </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
      comments: state.comments
  }
}
export default connect(mapStateToProps)(App);