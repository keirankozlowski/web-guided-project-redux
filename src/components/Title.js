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
              onClick={props.toggleEditing}
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
              onClick={() => props.updateTitle(newTitleText)}>
              Update title
            </button>
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    editing: state.titleReducer.editing,
    title: state.titleReducer.title
  };
};

export default connect(mapStateToProps, { toggleEditing, updateTitle })(Title);
