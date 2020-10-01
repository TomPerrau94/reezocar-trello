import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const AddCardForm = ({ handleCardInput, handleCardSubmit, cardEditing, setCardEditing }) => {
   return (
      <form className={css(styles.addCardForm)} onSubmit={handleCardSubmit}>
         <textarea
            type="text"
            placeholder="Saisissez un titre pour cette carte..."
            className={css(styles.addCardInput)}
            onChange={handleCardInput}
            autoFocus={true}
            onKeyPress={(event) => event.keyCode === 0x001c && handleCardSubmit}
         />
         <div className={css(styles.addCardButtons)}>
            <ButtonPrimary label="Ajouter une carte" type="submit" />
            <button
               className={css(styles.addCardClose)}
               onClick={() => setCardEditing(!cardEditing)}
            >
               <i className="icon-close"></i>
            </button>
         </div>
      </form>
   );
};

export default AddCardForm;

const styles = StyleSheet.create({
   addCardForm: {
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
   addCardInput: {
      backgroundColor: 'white',
      padding: '8px 12px',
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      '::placeholder': {
         fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      },
      width: '100%',
      boxSizing: 'border-box',
      height: 66,
      border: 'none',
      boxShadow: '0 1px 0 rgba(9,30,66,.25)',
   },
   addCardButtons: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
   },
   addCardClose: {
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
