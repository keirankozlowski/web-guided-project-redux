import React from 'react';
import { addMember } from '../actions/dragonListActions';

import { connect } from 'react-redux';

// set up connect and mapStateToProps
class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  // handleClick = ()=> {
  //   this.setState({
  //     ...this.state,
  //     members: [...this.state.members, {name: this.state.newMember, dragonStatus: true}]
  //   })
  // }

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={() => {
          this.props.addMember(this.state.newMember);
          this.setState({ newMember: '' });
        }}>
          Add member
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.dragonListReducer.members
  }
}

export default connect(mapStateToProps, { addMember })(DragonList);
