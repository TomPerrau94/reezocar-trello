import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { StyleSheet, css } from 'aphrodite';

const ModalCard = ({ showModal, setShowModal, list, index }) => {
   return (
      <Rodal
         animation="fade"
         closeOnEsc={true}
         duration={200}
         customMaskStyles={{
            background: 'rgba(0, 0, 0, 0.6)',
         }}
         height={360}
         width={450}
         showCloseButton={false}
         customStyles={{
            borderRadius: '3px',
            background: '#ebecf0',
         }}
         visible={showModal}
         onClose={() => {
            setShowModal(false);
         }}
      >
         <div className={css(styles.modalContainer)}>
            <button
               className="modalCloseButton"
               onClick={() => {
                  setShowModal(false);
               }}
            >
               <i className="icon-close"></i>
            </button>
            <div className="modalBody">
               <h3>{list.cards[index]}</h3>
               <form>
                  <input placeholder="Mon formulaire" />
                  <button type="submit" className="primaryButton">
                     Créer mon formulaire
                  </button>
               </form>
            </div>
         </div>
      </Rodal>
   );
};

export default ModalCard;

const styles = StyleSheet.create({
   modalContainer: {},
});
