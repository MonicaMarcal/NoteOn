import { Fragment } from 'react';
import Header from "../../components/header";
//import "../../styles/home.scss";
import { Link } from 'react-router-dom';


const HomeScreen = () => (
 <Fragment>
    <Header/>
    <section className="hero is-white is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered reverse-columns">
          <div className="column
          is-10-mobile 
          is-10-tablet 
          is-5-desktop 
          is-5-widescreen 
          is-5-fullhd " data-aos="fade-down">
            <h1 className="title titled is-1 mb-6">Welcome to NoteOn</h1>
            <h2 className="subtitle">Create notes easily and access when you wants on the cloud!</h2>
            <div className="buttons">
              <Link to="/register" className="button is-outlined is-black is-large">
                <strong>Register for free Nowstrong</strong>
            </Link>            
            </div>
          </div>
          <div data-aos="fade-left" className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd">
            <figure className="image is-square">
              <img src="../src/assets/images/back.svg"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
 </Fragment>
)

export default HomeScreen;