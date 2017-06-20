import React, { Component } from 'react';

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

import './Main.css'

const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes}/>
      <NoteForm />
    </div>
  );
  
}

export default Main;
