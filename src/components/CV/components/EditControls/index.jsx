import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faCheck,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

class EditControls extends React.Component {
  render() {
    if (this.props.isEditing) {
      return (
        <div className='edit-controls edit-mode'>
          <button
            onClick={this.props.onEditSave}
            className='edit-control save'
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            onClick={this.props.onEditCancel}
            className='edit-control cancel'
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      );
    }

    return (
      <div className='edit-controls'>
        <button
          onClick={this.props.onEditSwitch}
          className='edit-control edit'
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
      </div>
    );
  }
}

export default EditControls;
