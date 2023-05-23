import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/header";


const HomeScreen = () => (
 <Fragment>
    <Header/>
    <section className="hero is-dark is-fullheight">
             <div className="hero-body">
                 <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title">
                        Welcome to NoteOn
                        </h1>
                        <h2 className="subtitle">
                        Create notes easily and access when you wants on the cloud!
                        </h2>
                        <div>
                            <Link to="/register" className="button is-outlined is-black is-large">
                                <strong>Register for free Nowstrong</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </section>
 </Fragment>
)

export default HomeScreen;