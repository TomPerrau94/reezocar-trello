import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const AddlistForm = ({
   handleListNameInput,
   handleListNameSubmit,
   listEditing,
   setListEditing,
   listName,
}) => {
   return (
      <form className={css(styles.addListForm)} onSubmit={handleListNameSubmit}>
         <input
            type="text"
            placeholder="Saisissez le titre de la liste"
            className={css(styles.addListInput)}
            onChange={handleListNameInput}
            autoFocus={true}
            value={listName}
         />
         <div className={css(styles.addListButtons)}>
            <ButtonPrimary label="Ajouter une liste" type="submit" />
            <button
               className={css(styles.addListClose)}
               onClick={() => setListEditing(!listEditing)}
            >
               <i className="icon-close"></i>
            </button>
         </div>
      </form>
   );
};

export default AddlistForm;

const styles = StyleSheet.create({
   addListForm: {
      backgroundColor: 'white',
      border: 'none',
      borderRadius: 3,
      padding: 4,
      boxSizing: 'border-box',
      width: 272,
   },
   addListInput: {
      padding: '8px 12px',
      color: '#172b4d',
      width: '100%',
      boxSizing: 'border-box',
      '::placeholder': {
         fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
         color: '#5e6c84',
      },
   },
   addListButtons: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
   },
   addListClose: {
      background: 'none',
      border: 'none',
      fontSize: 24,
      marginTop: 4,
      color: '#42526e',
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      ':hover': {
         color: '#172b4d',
      },
   },
});
