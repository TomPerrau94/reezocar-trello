import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const AddDescButton = ({ label, descEditing, setDescEditing }) => {
   return (
      <button className={css(styles.addDesc)} onClick={() => setDescEditing(!descEditing)}>
         {label}
      </button>
   );
};

export default AddDescButton;

const styles = StyleSheet.create({
   addDesc: {
      backgroundColor: 'rgba(9,30,66,.04)',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: 3,
      padding: '8px 12px 24px 12px',
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      width: '100%',
      boxSizing: 'border-box',
      color: '#5e6c84',
      textAlign: 'left',
      ':hover': { backgroundColor: 'rgba(9,30,66,.08)', color: '#172b4d' },
   },
   addDescIcon: {
      fontSize: 16,
      marginRight: 2,
   },
});
