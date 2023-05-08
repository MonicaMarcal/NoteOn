/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
 const [query, setQuery] = useState("")

 const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
   props.searchNotes(query)
   }
  }

 return (
  <div className="columns is-mobile is-centered">
   <div className="column" size="9" offset={1}>
    <input type="text"
     name={query}
     value={query}
     placeholder="Search note..."
     onChange={(e) => setQuery(e.target.value)}
     onKeyDown={handleKeyDown} 
     />
   </div>
   <div>
      <Button href="#" onClick={() => {
          props.fetchNotes()
          setQuery('')
        }}>
        <FontAwesomeIcon
          icon={faTimes}
          color="black"
          className="is-pulled-left "
        />
      </Button>
    </div>
  </div>
  )
}

export default Search;