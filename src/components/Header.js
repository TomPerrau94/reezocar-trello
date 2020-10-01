import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonPrimary from './ButtonPrimary';

const Header = () => {
   return (
      <header className={css(styles.header)}>
         <h1 className={css(styles.h1)}>Tableau Reezocar</h1>
         <ButtonPrimary label="Initialiser le jeu de données" type="button" />
      </header>
   );
};

export default Header;

const styles = StyleSheet.create({
   header: {
      display: 'flex',
      alignItems: 'baseline',
   },
   h1: {
      fontSize: 18,
      padding: '0 12px',
      margin: 0,
      color: 'white',
      fontWeight: 700,
      marginRight: 8,
   },
});
