import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ModalCard from './ModalCard';

const Card = ({ card, list, lists, setLists, index }) => {
   const [showModal, setShowModal] = useState(false);
   const [descEditing, setDescEditing] = useState(false);
   const [desc, setDesc] = useState('');
   const [isFollowed, setIsFollowed] = useState();

   const handleDescSubmit = (event) => {
      event.preventDefault();

      const listsCopy = [...lists];
      const listToEdit = lists.find((element) => element.id === list.id);
      const cardToEdit = listToEdit.cards.find((element) => element.id === card.id);

      cardToEdit.description = desc;
      setLists(listsCopy);

      desc !== '' && setDesc('');
      setDescEditing(!descEditing);
   };

   const handleDescInput = (event) => {
      const value = event.target.value;
      setDesc(value);
   };

   const handleIsFollowed = () => {
      const listsCopy = [...lists];
      const listToEdit = listsCopy.find((element) => element.id === list.id);
      const cardToEdit = listToEdit.cards.find((element) => element.id === card.id);

      cardToEdit.followed = !cardToEdit.followed;
      setIsFollowed(cardToEdit.followed);
      setLists(listsCopy);
   };

   const handleCardDelete = () => {
      const confirmDelete = window.confirm(
         `Êtes-vous sûr de vouloir supprimer la carte ${card.name} ?`,
      );

      if (confirmDelete) {
         const listsCopy = [...lists];
         const listToEdit = listsCopy.find((element) => element.id === list.id);

         listToEdit.cards.splice(index, 1);
         setLists(listsCopy);
      }

      setShowModal(!showModal);
   };

   return (
      <>
         <ModalCard
            showModal={showModal}
            setShowModal={setShowModal}
            list={list}
            index={index}
            descEditing={descEditing}
            setDescEditing={setDescEditing}
            desc={desc}
            setDesc={setDesc}
            handleDescInput={handleDescInput}
            handleDescSubmit={handleDescSubmit}
            handleIsFollowed={handleIsFollowed}
            handleCardDelete={handleCardDelete}
            isFollowed={isFollowed}
         />
         <div className={css(styles.card)} onClick={() => setShowModal(!showModal)}>
            <p>{card.name}</p>
            <div className={css(styles.cardBadges)}>
               {list.cards[index].followed && (
                  <i className={`icon-eye ${css(styles.cardBadgeIcon)}`}></i>
               )}
               {list.cards[index].description !== '' && (
                  <i className={`icon-desc ${css(styles.cardBadgeIcon)}`}></i>
               )}
            </div>
         </div>
      </>
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
      color: '#172b4d',
      ':not(last-child)': {
         marginBottom: 8,
      },
      ':hover': {
         backgroundColor: 'rgba(242, 243, 246)',
      },
   },
   cardBadges: {
      display: 'flex',
      fontSize: 16,
      color: '#172b4d',
   },
   cardBadgeIcon: {
      ':not(first-child)': {
         margin: '8px 0 0 8px',
      },
      ':not(last-child)': {
         margin: '8px 8px 0 0',
      },
   },
});
