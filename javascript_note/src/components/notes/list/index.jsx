/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Tag, Heading, Button } from "react-bulma-components";
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ListNotes(props) {
 return (
  <Fragment>
   <div>
    <div  size={6} offset={1}>
     <Heading size={6}>
       {props.notes.length} Notes
     </Heading>

      <div size={2}>
        <Button state="active" color="custom-purple" outlined size="small" onClick={() => props.createNote()}>
          Notes +
        </Button>
      </div>

    </div >
   </div >
   <ul className="notes-list">
     {props.notes.map((item, key) =>
     // eslint-disable-next-line react/no-unknown-property
     <li key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
      <Heading size={6}>
        {item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}
      </Heading>
      <Heading size={6} subtitle spaced={false}>
        {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
      </Heading>

      <div>
       <div  size={10}>
        <Tag color="dark">
          {Moment(item.created_at).format('DD/MM')}
        </Tag>
       </div >

        <div size={2}>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => props.deleteNote(item)}
            color="grey"
          />
        </div>
        
      </div >
     </li>
    )}
   </ul>
  </Fragment>
 )
}

export default ListNotes;