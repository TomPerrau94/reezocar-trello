import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AddCardButton from './AddCardButton';
import OusideClick from './OutsideClick';
import Card from './Card';
import AddCardForm from './AddCardForm';

const List = ({ list, index, lists, setLists, handleListDelete }) => {
   const [cardName, setCardName] = useState('');
   const [cardEditing, setCardEditing] = useState(false);

   const ref = useRef();

   OusideClick(ref, () => {
      if (cardName !== '' && cardEditing) {
         addCard();
         setCardEditing(!cardEditing);
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
         id: Date.now(),
         name: cardName,
         followed: false,
         description: '',
      };

      const listsCopy = [...lists];
      const listToEdit = listsCopy.find((element) => element.id === list.id);

      listToEdit.cards.push(newCard);
      setLists(listsCopy);
   };
   return (
      <>
         <div className={css(styles.list)}>
            <div className={css(styles.listHeader)}>
               <h2 className={css(styles.listTitle)}>{list.name}</h2>
               <button className={css(styles.listDelete)} onClick={() => handleListDelete(index)}>
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
                              list={list}
                              lists={lists}
                              setLists={setLists}
                              key={index}
                              index={index}
                           />
                        );
                     })}
                  </div>
                  <>
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
                        <div ref={ref}>
                           <AddCardForm
                              cardName={cardName}
                              setCardName={setCardName}
                              handleCardSubmit={handleCardSubmit}
                              handleCardInput={handleCardInput}
                              cardEditing={cardEditing}
                              setCardEditing={setCardEditing}
                           />
                        </div>
                     )}
                  </>
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
      color: '#172b4d',
   },
   listDelete: {
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
