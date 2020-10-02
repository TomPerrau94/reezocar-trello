import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { StyleSheet, css } from 'aphrodite';
import AddDescButton from './AddDescButton';
import AddDescForm from './AddDescForm';
import EditDescButton from './EditDescButton';
import ActionButton from './ActionButton';

const ModalCard = ({
   showModal,
   setShowModal,
   list,
   index,
   descEditing,
   setDescEditing,
   desc,
   setDesc,
   handleDescInput,
   handleDescSubmit,
   handleIsFollowed,
   handleCardDelete,
   isFollowed,
}) => {
   return (
      <Rodal
         animation="fade"
         closeOnEsc={true}
         duration={200}
         customMaskStyles={{
            background: 'rgba(0, 0, 0, 0.6)',
         }}
         width={768}
         showCloseButton={false}
         customStyles={{
            borderRadius: '3px',
            background: '#ebecf0',
            padding: 16,
         }}
         visible={showModal}
         onClose={() => {
            setShowModal(false);
            if (descEditing) {
               setDescEditing(!descEditing);
            }
         }}
      >
         <div className={css(styles.modalContainer)}>
            <button
               className={css(styles.modalClose)}
               onClick={() => {
                  setShowModal(false);
                  if (descEditing) {
                     setDescEditing(!descEditing);
                  }
               }}
            >
               <i className="icon-close"></i>
            </button>
            <div className={css(styles.modalHeader)}>
               <h3 className={css(styles.modalTitle)}>{list.cards[index].name}</h3>
               <div className={css(styles.modalInfos)}>
                  <p>
                     Dans la liste <span className={css(styles.modalListName)}>{list.name}</span>
                  </p>
                  <span className={css(styles.modalInfosBadge)}>
                     {list.cards[index].followed && <i className="icon-eye"></i>}
                  </span>
               </div>
            </div>
            <div className={css(styles.modalBody)}>
               <div className={css(styles.modalColumn, styles.modalColumnDescription)}>
                  <h4 className={css(styles.modalColumnTitle)}>Description</h4>
                  {list.cards[index].description !== '' ? (
                     <>
                        {!descEditing ? (
                           <EditDescButton
                              descEditing={descEditing}
                              setDescEditing={setDescEditing}
                              handleDescSubmit={handleDescSubmit}
                              label={list.cards[index].description}
                              setDesc={setDesc}
                              originalDesc={list.cards[index].description}
                           />
                        ) : (
                           <AddDescForm
                              desc={desc}
                              setDesc={setDesc}
                              handleDescSubmit={handleDescSubmit}
                              handleDescInput={handleDescInput}
                              descEditing={descEditing}
                              setDescEditing={setDescEditing}
                           />
                        )}
                     </>
                  ) : (
                     <>
                        {!descEditing ? (
                           <AddDescButton
                              descEditing={descEditing}
                              setDescEditing={setDescEditing}
                              handleDescSubmit={handleDescSubmit}
                              label="Ajouter une description plus détaillée..."
                           />
                        ) : (
                           <AddDescForm
                              desc={desc}
                              setDesc={setDesc}
                              handleDescSubmit={handleDescSubmit}
                              handleDescInput={handleDescInput}
                              descEditing={descEditing}
                              setDescEditing={setDescEditing}
                           />
                        )}
                     </>
                  )}
               </div>
               <div className={css(styles.modalColumn, styles.modalColumnActions)}>
                  <h4 className={css(styles.modalColumnTitle)}>Actions</h4>
                  <div className={css(styles.modalActions)}>
                     <ActionButton
                        label="Suivre"
                        action={handleIsFollowed}
                        isFollowed={isFollowed}
                     />
                     <ActionButton label="Supprimer" action={handleCardDelete} />
                  </div>
               </div>
            </div>
         </div>
      </Rodal>
   );
};

export default ModalCard;

const styles = StyleSheet.create({
   modalClose: {
      position: 'absolute',
      top: 12,
      right: 12,
      fontSize: 20,
      height: 32,
      width: 32,
      display: 'flex',
      alignItems: 'center',
      color: '#172b4d',
      transitionDuration: '85ms',
      transitionTimingFunction: 'ease',
      borderRadius: 16,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      ':hover': {
         backgroundColor: 'rgba(9,30,66,.08)',
         color: '#42526e',
      },
   },
   modalBody: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 24,
   },
   modalHeader: {
      margin: 0,
      fontSize: 14,
      color: '#5e6c84',
   },
   modalTitle: {
      margin: '4px 0 8px 0',
      fontSize: 20,
      fontWeight: 500,
      color: '#172b4d',
   },
   modalInfos: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 18,
   },
   modalInfosBadge: {
      fontSize: 16,
      marginLeft: 6,
   },
   modalListName: {
      textDecoration: 'underline',
   },
   modalColumnTitle: {
      fontSize: 18,
      fontWeight: 500,
      color: '#172b4d',
      marginBottom: 8,
   },
   modalColumnDescription: {
      flex: 3,
      marginRight: 16,
   },
   modalActions: {
      display: 'flex',
      flexDirection: 'column',
      width: 168,
   },
});
