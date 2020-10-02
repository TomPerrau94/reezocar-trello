import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const EditDescButton = ({ setDesc, originalDesc, label, descEditing, setDescEditing }) => {
   return (
      <button
         className={css(styles.editDesc)}
         onClick={() => {
            setDescEditing(!descEditing);
            setDesc(originalDesc);
         }}
      >
         {label}
      </button>
   );
};

export default EditDescButton;

const styles = StyleSheet.create({
   editDesc: {
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 3,
      padding: 0,
      fontSize: 14,
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      width: '100%',
      boxSizing: 'border-box',
      color: '#172b4d',
      textAlign: 'left',
   },
});
