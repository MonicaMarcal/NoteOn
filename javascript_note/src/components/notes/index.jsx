import {Fragment, useEffect, useState } from 'react';
import '../../styles/notes.scss'
import { push as Menu } from 'react-burger-menu'
import List from "../notes/list";
import NoteService from '../../services/note';
import Editor from "../notes/editor";

function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });
  
  
  async function fetchNotes() {
     const response = await NoteService.index();
      if (response.data.length >= 1) {
        setNotes(response.data.reverse())
        setCurrentNote(response.data[0])
      }else{
        setNotes([])
      }
     }

     // eslint-disable-next-line no-unused-vars
     const createNote = async (params) => {
      // eslint-disable-next-line no-unused-vars
      const note = await NoteService.create();
      fetchNotes();
     }

     const deleteNote = async (note) => {
      await NoteService.delete(note._id);
      fetchNotes();
     }

     const selectNote = (id) => {
       const note = notes.find((note) => {
        return note._id == id;
       })
       setCurrentNote(note);
       }

      useEffect(()=>{
        fetchNotes()
      }, []);
   
  return(
  <Fragment>
   <div className="notes" id="notes">
    <Menu
     pageWrapId={"notes-editor"}
     // eslint-disable-next-line react/prop-types
     isOpen={props.isOpen}
     // eslint-disable-next-line react/prop-types
     onStateChange={(state) => props.setIsOpen(state.isOpen)}
     disableAutoFocus
     outerContainerId={"notes"}
     customBurgerIcon={false}
     customCrossIcon={false}
    >
     <div>
      <div>
        Search...
      </div>
     </div>
     
      <List
        notes={notes}
        selectNote={selectNote}
        deleteNote={deleteNote}
        createNote={createNote}
        current_note={current_note}
      />

    </Menu>


    <div size={12} className="notes-editor" id="notes-editor">
    <Editor note={current_note}/>
    </div>
   </div>
  </Fragment>
  )
}
export default Notes;