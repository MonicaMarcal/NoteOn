/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Edição de texto de uma nota
function Editor(props) {
  const [currentContent, setCurrentContent] = useState("");
  const [timer, setTimer] = useState(null);

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, "").slice(0, 30);
    props.updateNote(props.note, { title: title, body: content });
  };

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source == "user") {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000));
    }
  };

  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <Fragment>
      <ReactQuill
        value={currentContent}
        onChange={handleChange}
        modules={modules}
      />
    </Fragment>
  );
}

export default Editor;
