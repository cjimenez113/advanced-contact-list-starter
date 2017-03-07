import React, {PropTypes} from 'react';
import SelectedContact from '../SelectedContact/SelectedContact.js';

const SelectedContactList = props => {
  return (
    <ul className="selected-contacts-list">
      {props.checkForSelectedContact}
      {props.selectedContacts.map(contact => {
        return (
          <SelectedContact
            {...contact}
            key={contact._id}
            onClickDeselect={index => props.onClickDeselect(index)}
          />
        );
      })}
    </ul>
  );
};

SelectedContactList.propTypes = {
  selectedContacts: PropTypes.array.isRequired,
  checkForSelectedContact: PropTypes.object
};

export default SelectedContactList;
