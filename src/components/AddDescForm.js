import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const AddDescForm = ({
   desc,
   setDesc,
   handleDescInput,
   handleDescInputSelect,
   handleDescSubmit,
   descEditing,
   setDescEditing,
}) => {
   return (
      <form className={css(styles.addDescForm)} onSubmit={handleDescSubmit}>
         <textarea
            type="text"
            placeholder="Ajouter une description plus détaillée..."
            className={css(styles.addDescInput)}
            onChange={handleDescInput}
            autoFocus={true}
            value={desc}
            onFocus={(event) => event.target.select()}
         />
         <div className={css(styles.addDescButtons)}>
            <ButtonPrimary label="Enregistrer" type="submit" />
            <button
               className={css(styles.addDescClose)}
               onClick={() => {
                  setDescEditing(!descEditing);
                  setDesc('');
               }}
            >
               <i className="icon-close"></i>
            </button>
         </div>
      </form>
   );
};

export default AddDescForm;

const styles = StyleSheet.create({
   addDescInput: {
      backgroundColor: 'white',
      padding: '8px 12px',
      color: '#172b4d',
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 3,
      fontSize: 14,
      height: 66,
      border: 'none',
      boxShadow: '0 1px 0 rgba(9,30,66,.25)',
      '::placeholder': {
         fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
         color: '#5e6c84',
         fontSize: 14,
      },
   },
   addDescButtons: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
   },
   addDescClose: {
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
