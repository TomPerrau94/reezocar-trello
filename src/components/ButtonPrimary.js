import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const ButtonPrimary = ({ label, type }) => {
   return (
      <button className={css([styles.button_primary, styles.button_primary_hover])} type={type}>
         {label}
      </button>
   );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
   button_primary: {
      background: '#5aac44',
      border: 'none',
      borderRadius: 3,
      color: 'white',
      padding: '8px 12px',
      fontWeight: 400,
      fontSize: 14,
      height: 32,
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease',
      cursor: 'pointer',
   },
   button_primary_hover: {
      ':hover': { background: '#61bd4f' },
   },
});
