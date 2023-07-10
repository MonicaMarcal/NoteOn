/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "moment";
import { Fragment } from "react";
import { Tag } from "react-bulma-components";

function ListNotes(props) {
  return (
    <Fragment>
      <div className="px-4 py-4	">
        <div className="grid grid-flow-col gap-x-2" offset={1}>
          <h1 className="px-5 py-2.5">{props.notes.length} Notes</h1>

          <div>
            <button
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              onClick={() => props.createNote()}
            >
              Notes +
            </button>
          </div>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400" />

      <ul className="px-4 py-4">
        {props.notes.map((item, key) => (
          <li
            className=""
            key={key}
            onClick={() => props.selectNote(item._id)}
            active={item == props.current_note}
          >
            <h1 className="text-base md:text-black-600 font-semibold">
              {item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}
            </h1>
            <h1 className="text-gray-600">
              {item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}
            </h1>

            <div className="grid grid-flow-col gap-x-2 pt-4">
              <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 dark:bg-gray-400 text-black rounded-full">
                <Tag color="dark">
                  {Moment(item.created_at).format("DD/MM")}
                </Tag>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => props.deleteNote(item)}
                  color="grey"
                />
              </div>
            </div>

            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400" />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListNotes;
