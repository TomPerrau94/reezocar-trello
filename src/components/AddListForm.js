import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const AddlistForm = ({
   handleListNameInput,
   handleListNameSubmit,
   listEditing,
   setListEditing,
}) => {
   return (
      <form className={css(styles.addListForm)} onSubmit={handleListNameSubmit}>
         <input
            type="text"
            placeholder="Saisissez le titre de la liste"
            className={css(styles.addListInput)}
            onChange={handleListNameInput}
            autoFocus={true}
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
      fontWeight: 500,
      fontSize: 14,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-in',
      cursor: 'pointer',
      boxSizing: 'border-box',
      width: 272,
      color: 'white',
   },
   addListInput: {
      padding: '8px 12px',
      ':placeholder': {
         color: 'red',
      },
      width: '100%',
      boxSizing: 'border-box',
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
