import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleEditing, updateTitle} from './../actions/titleActions';

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  }

  return (
    <div>
      {
        !props.editing ? (
          <h2>{props.title}{' '}
            <i
              className="far fa-edit"
              onClick={props.handleToggleEditing}
            />
          </h2>
        ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="newTitleText"
              value={newTitleText}
              onChange={handleChanges}
            />
            <button
              onClick={handleSubmit}>
              Update title
            </button>
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    editing: state.editing,
    title: state.title
  };
};

export default connect(mapStateToProps, { updateTitle })(Title);
