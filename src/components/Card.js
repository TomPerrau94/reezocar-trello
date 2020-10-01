import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Card = ({ card, index, showModal, setShowModal }) => {
   return (
      <div className={css(styles.card)} onClick={() => setShowModal(!showModal)}>
         {card.name}
      </div>
   );
};

export default Card;

const styles = StyleSheet.create({
   card: {
      backgroundColor: 'white',
      borderRadius: 3,
      padding: '6px 8px',
      boxShadow: '0 1px 0 rgba(9,30,66,.25)',
      fontSize: 14,
      cursor: 'pointer',
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease',
      ':not(last-child)': {
         marginBottom: 8,
      },
      ':hover': {
         backgroundColor: 'rgba(242, 243, 246)',
      },
   },
});
