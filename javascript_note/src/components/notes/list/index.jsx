/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Tag, Heading, Button } from "react-bulma-components";
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ListNotes(props) {
 return (
  <Fragment>
   <div className=" column is-mobile">
    <div className="column is-three-fifths" offset={1}>
     <Heading className='title is-6'>
       {props.notes.length} Notes
     </Heading>

      <div>
        <Button state="active" color="custom-purple" outlined size="small" onClick={() => props.createNote()}>
          Notes +
        </Button>
      </div>
      </div>
      </div>

   <ul className="notes-list">
     {props.notes.map((item, key) =>
     // eslint-disable-next-line react/no-unknown-property
     <li className='column is-two-thirds ' key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
      <Heading className='title is-6'>
        {item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}
      </Heading>
      <Heading className='title is-6' subtitle spaced={false}>
        {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
      </Heading>

      <div className="columns is-mobile">
       <div className="column is-three-quarters">
        <Tag color="dark">
          {Moment(item.created_at).format('DD/MM')}
        </Tag>
       </div >

        <div>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => props.deleteNote(item)}
            color="grey"
          />
        </div>
        
      </div>
     </li>
    )}
   </ul>
  </Fragment>
 )
}

export default ListNotes;