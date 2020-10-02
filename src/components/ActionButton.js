import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const ActionButton = ({ label, action, isFollowed }) => {
   return (
      <>
         {label === 'Suivre' && (
            <button className={css(styles.modalActionButton)} onClick={() => action()}>
               <i className={`icon-eye ${css(styles.modalActionButtonIcon)}`}></i>
               {label}
               {isFollowed && (
                  <span className={css(styles.check)}>
                     <i className="icon-check"></i>
                  </span>
               )}
            </button>
         )}
         {label === 'Supprimer' && (
            <button className={css(styles.modalActionButton)} onClick={() => action()}>
               <i className={`icon-delete ${css(styles.modalActionButtonIcon)}`}></i>
               {label}
            </button>
         )}
      </>
   );
};

export default ActionButton;

const styles = StyleSheet.create({
   modalActionButton: {
      ':not(last-child)': {
         marginBottom: 8,
      },
      backgroundColor: 'rgba(9,30,66,.04)',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: 3,
      padding: '8px 12px',
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      width: '100%',
      boxSizing: 'border-box',
      color: '#172b4d',
      ':hover': { backgroundColor: 'rgba(9,30,66,.08)' },
      position: 'relative',
   },
   modalActionButtonIcon: {
      fontSize: 16,
      marginRight: 8,
   },
   check: {
      backgroundColor: '#5aac44',
      color: 'white',
      fontSize: 16,
      borderRadius: 3,
      position: 'absolute',
      right: 4,
      padding: '4px 6px',
   },
});
