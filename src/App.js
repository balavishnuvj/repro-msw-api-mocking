import React from 'react';
import './App.css';
import { Editor } from './post-editor'


const user = {id: 'user-1'}
function App() {
  return (
    <div className="App">
     <Editor user={user}/> 
    </div>
  );
}

export default App;
