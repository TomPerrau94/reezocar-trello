import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './components/Header';
import AddListForm from './components/AddListForm';
import AddListButton from './components/AddListButton';
import List from './components/List';
import OusideClick from './components/OutsideClick';
import './icons.css';

const App = () => {
   const [lists, setLists] = useState([]);
   const [listEditing, setListEditing] = useState(false);
   const [listName, setListName] = useState('');

   const ref = useRef();

   OusideClick(ref, () => {
      listEditing && setListEditing(!listEditing);
   });

   const handleListNameSubmit = (event) => {
      event.preventDefault();

      if (listName !== '') {
         addList();
         setListEditing(!listEditing);
         setListName('');
      }
   };

   const handleListNameInput = (event) => {
      const value = event.target.value;
      setListName(value);
   };

   const addList = () => {
      const newList = {
         name: listName,
         id: Date.now(),
         cards: [],
      };

      const listsCopy = [...lists];

      listsCopy.push(newList);
      setLists(listsCopy);
   };

   const handleListDelete = (index) => {
      const confirmDelete = window.confirm(
         `Êtes-vous sûr de vouloir supprimer la liste ${lists[index].name} ?`,
      );

      if (confirmDelete) {
         const listsCopy = [...lists];

         const listToDelete = listsCopy.indexOf(index);
         listsCopy.splice(listToDelete, 1);

         setLists(listsCopy);
      }
   };

   return (
      <>
         <div className={css(styles.app)}>
            <Header />
            <main className={css(styles.container)}>
               <div className={css(styles.lists)}>
                  {lists.length > 0 &&
                     lists.map((list, index) => {
                        return (
                           <List
                              list={list}
                              lists={lists}
                              setLists={setLists}
                              key={index}
                              index={index}
                              handleListDelete={handleListDelete}
                           />
                        );
                     })}
               </div>
               <div ref={ref}>
                  {!listEditing ? (
                     <AddListButton
                        lists={lists}
                        listEditing={listEditing}
                        setListEditing={setListEditing}
                     />
                  ) : (
                     <AddListForm
                        lists={lists}
                        setLists={setLists}
                        listName={listName}
                        handleListNameSubmit={handleListNameSubmit}
                        handleListNameInput={handleListNameInput}
                        listEditing={listEditing}
                        setListEditing={setListEditing}
                     />
                  )}
               </div>
            </main>
         </div>
      </>
   );
};

export default App;

const styles = StyleSheet.create({
   app: {
      background: 'rgba(130, 141, 145)',
      height: 'calc(100vh - 16px)',
      padding: 8,
   },
   container: {
      margin: '8px 0',
      display: 'flex',
      flexWrap: 'wrap',
   },
   header: {
      display: 'flex',
      flexDirection: 'row',
   },
   lists: {
      display: 'flex',
      alignItems: 'flex-start',
   },
});
