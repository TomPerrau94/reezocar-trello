import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const AddCardForm = ({
   cardName,
   setCardName,
   handleCardInput,
   handleCardSubmit,
   cardEditing,
   setCardEditing,
}) => {
   return (
      <form className={css(styles.addCardForm)} onSubmit={handleCardSubmit}>
         <textarea
            type="text"
            placeholder="Saisissez un titre pour cette carte..."
            className={css(styles.addCardInput)}
            onChange={handleCardInput}
            autoFocus={true}
            onKeyPress={(event) => event.charCode === 13 && handleCardSubmit(event)}
         />
         <div className={css(styles.addCardButtons)}>
            <ButtonPrimary label="Ajouter une carte" type="submit" />
            <button
               className={css(styles.addCardClose)}
               type="button"
               onClick={() => {
                  cardName !== '' && setCardName('');
                  setCardEditing(!cardEditing);
               }}
            >
               <i className="icon-close"></i>
            </button>
         </div>
      </form>
   );
};

export default AddCardForm;

const styles = StyleSheet.create({
   addCardInput: {
      backgroundColor: 'white',
      padding: '6px 8px',
      color: '#172b4d',
      borderRadius: 3,
      fontSize: 14,
      fontFamily:
         "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      width: '100%',
      boxSizing: 'border-box',
      height: 66,
      border: 'none',
      boxShadow: '0 1px 0 rgba(9,30,66,.25)',
      '::placeholder': {
         fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
         color: '#5e6c84',
      },
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
