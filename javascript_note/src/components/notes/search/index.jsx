/* eslint-disable react/prop-types */

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


function Search(props) {
 const [query, setQuery] = useState("")

 const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
   props.searchNotes(query)
   }
  }

 return (
  <div className="px-4 py-4	">
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
          <input
          className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg dark:bg-gray-400 dark:border-gray-600 dark:text-black"
          type="text"
          name={query}
          value={query}
          placeholder="Search note..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} 
          /> 
       <button href="#" onClick={() => {
          props.fetchNotes()
          setQuery('')
        }}
        type="submit" className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"><FontAwesomeIcon
        icon={faTimes}
        color="white"
        />
      </button>  
      </div>
  </div>
  )
}

export default Search;