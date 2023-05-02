import {Fragment } from 'react';
import '../../styles/notes.scss'
import { push as Menu } from 'react-burger-menu'


const Notes = (props) => {
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
      <div className="columns">
        Search...
      </div>
     </div>
     <p>List...</p>
    </Menu>


    <div size={12} className="notes-editor" id="notes-editor">
      Editor...
    </div>
   </div>
  </Fragment>
  )
}
export default Notes;