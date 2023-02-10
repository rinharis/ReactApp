import React from 'react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './NotesApp.css';
import Search from './Search';
import Header from './Header';
import NotesList from './NotesList';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  //Runs once
  useEffect(() => {
    var savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes && savedNotes.length) {
      setNotes(savedNotes);
    }
  }, []);

  // Runs when notes change
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
};

export default NotesApp ;