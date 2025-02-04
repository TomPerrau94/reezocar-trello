import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const AddListButton = ({ lists, listEditing, setListEditing }) => {
   return (
      <button className={css(styles.addList)} onClick={() => setListEditing(!listEditing)}>
         <i className={`icon-add ${css(styles.addListIcon)}`}></i>
         {lists.length > 0 ? 'Ajouter une autre liste' : 'Ajouter une liste'}
      </button>
   );
};

export default AddListButton;

const styles = StyleSheet.create({
   addList: {
      backgroundColor: 'hsla(0,0%,100%,.24)',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: 3,
      padding: '10px 12px',
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: 14,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      boxSizing: 'border-box',
      width: 272,
      color: 'white',
      textAlign: 'left',
      ':hover': { backgroundColor: 'hsla(0,0%,100%,.32)' },
   },
   addListIcon: {
      fontSize: 16,
      marginRight: 2,
   },
});
