import { Fragment } from 'react';
import { Link } from 'react-router-dom';
//import NoteImage from '../../assets/images/back.jpg';
import Header from "../../components/header";

const HomeScreen = () => (
 <Fragment>
    <Header/>  
    <div className=" min-h-screen space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">         
         <div className="flex items-center w-full w-auto">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    Welcome to NoteOn
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Create notes easily and access when you wants on the cloud!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                 <button type="button" className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md'
                        "aria-label="to register">
                    <Link to="/register">
                        <strong>Register for free Nowstrong</strong>
                    </Link>
                 </button>              
            </div>
          </div>
          {/* <div className="flex items-center justify-center w-full w-3/12 p-3 m-auto">
          <img src={NoteImage} alt=""/>
        </div> */}
        </div>
       
      
    </div>

 </Fragment>
)

export default HomeScreen;