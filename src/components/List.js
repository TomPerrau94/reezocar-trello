import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AddCardButton from './AddCardButton';
import OusideClick from './OutsideClick';
import Card from './Card';
import AddCardForm from './AddCardForm';
import ModalCard from './ModalCard';

const List = ({ list, index }) => {
   const [cardName, setCardName] = useState('');
   const [cardEditing, setCardEditing] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const ref = useRef();

   OusideClick(ref, () => {
      if (cardName !== '') {
         setCardEditing(!cardEditing);
         addCard();
         setCardName('');
      } else if (cardEditing) {
         setCardEditing(!cardEditing);
      }
   });

   const handleCardSubmit = (event) => {
      event.preventDefault();

      if (cardName !== '') {
         addCard();
         setCardName('');
         setCardEditing(!cardEditing);
      }
   };

   const handleCardInput = (event) => {
      const value = event.target.value;
      setCardName(value);
   };

   const addCard = () => {
      const newCard = {
         name: cardName,
         followed: false,
         description: '',
      };

      list.cards.push(newCard);
   };
   return (
      <>
         <ModalCard showModal={showModal} setShowModal={setShowModal} card={list} />
         <div className={css(styles.list)}>
            <div className={css(styles.listHeader)}>
               <h2 className={css(styles.listTitle)}>{list.name}</h2>
               <button className={css(styles.listClose)}>
                  <i className="icon-more"></i>
               </button>
            </div>
            <div className={css(styles.listContent)}>
               <>
                  <div className={css(styles.cards)}>
                     {list.cards.map((card, index) => {
                        return (
                           <Card
                              card={card}
                              key={index}
                              index={index}
                              showModal={showModal}
                              setShowModal={setShowModal}
                           />
                        );
                     })}
                  </div>
                  <div ref={ref}>
                     {!cardEditing ? (
                        <AddCardButton
                           cardEditing={cardEditing}
                           setCardEditing={setCardEditing}
                           handleCardSubmit={handleCardSubmit}
                           label={
                              list.cards.length !== 0
                                 ? 'Ajouter une autre carte'
                                 : 'Ajouter une carte'
                           }
                        />
                     ) : (
                        <AddCardForm
                           cardName={cardName}
                           setCardName={setCardName}
                           handleCardSubmit={handleCardSubmit}
                           handleCardInput={handleCardInput}
                           cardEditing={cardEditing}
                           setCardEditing={setCardEditing}
                        />
                     )}
                  </div>
               </>
            </div>
         </div>
      </>
   );
};

export default List;

const styles = StyleSheet.create({
   list: {
      backgroundColor: '#ebecf0',
      borderRadius: 3,
      padding: '10px 8px',
      width: 272,
      ':not(last-child)': {
         marginRight: 8,
      },
   },
   listHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   listTitle: {
      margin: 0,
      padding: '4px 8px',
      fontSize: 14,
      fontWeight: 600,
   },
   listClose: {
      fontSize: 16,
      background: 'none',
      border: 'none',
      paddingTop: 4,
      borderRadius: 3,
      color: '#6b778c',
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease-out',
      cursor: 'pointer',
      ':hover': {
         color: '#172b4d',
         backgroundColor: 'rgba(9,30,66,.08)',
      },
   },
   listContent: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
   },
});
