import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const AddCardButton = ({ label, cardEditing, setCardEditing }) => {
   return (
      <button className={css(styles.addCard)} onClick={() => setCardEditing(!cardEditing)}>
         <i className={`icon-add ${css(styles.addCardIcon)}`}></i>
         {label}
      </button>
   );
};

export default AddCardButton;

const styles = StyleSheet.create({
   addCard: {
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: 3,
      padding: '4px 8px',
      fontWeight: 500,
      fontSize: 14,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      boxSizing: 'border-box',
      width: 272,
      color: '#5e6c84',
      textAlign: 'left',
      ':hover': { backgroundColor: 'rgba(9,30,66,.08)', color: '#172b4d' },
   },
   addCardIcon: {
      fontSize: 16,
      marginRight: 2,
   },
});
