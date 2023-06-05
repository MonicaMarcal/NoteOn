import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/header";

const HomeScreen = () => (
 <Fragment>
    <Header/>  
    <main className="max-w-4xl mx-auto">
        <section id="hero"
            className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
            <article className="sm:w-1/2">
                <h2
                    className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                    Welcome to <span className="text-indigo-600"> NoteOn</span>
                </h2>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 ">
                   Create notes easily and access when you wants on the cloud!
                </p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                <button type="button" className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md'
                        "aria-label="to register">
                    <Link to="/register">
                        <strong>Register for free here</strong>
                    </Link>
                 </button>  
                </p>
            </article>
            <img className="w-1/2" src="./src/assets/images/blue.jpg" alt=""/>
        </section>
    </main>
 </Fragment>
)

export default HomeScreen;