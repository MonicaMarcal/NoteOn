import { Fragment, useState, useEffect } from 'react';

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

function Editor(props) {
 const [currentContent, setCurrentContent] = useState('')

 useEffect(()=> {
  // eslint-disable-next-line react/prop-types
  setCurrentContent(props.note.body)
  // eslint-disable-next-line react/prop-types
  }, [props.note])

 const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'},
    {'indent': '-1'}, {'indent': '+1'}],
    ['link'],
    ['clean'],
   ]
  }

 return (
  <Fragment>
   <ReactQuill value={currentContent} modules={modules}/>
  </Fragment>
  )
}

export default Editor;