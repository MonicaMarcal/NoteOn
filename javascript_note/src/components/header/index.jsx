import { Link } from "react-router-dom";


function Header() {
  return (
          <header className="bg-violet-800 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <Link to="/">
             <h1 className="text-3xl font-medium">
                📄 NOTEON
              </h1>
              </Link>   
            <div>
                <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                    &#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <Link to="/register">
                    <a className="hover:opacity-90">Register</a>
                    </Link>
                    <a className="hover:opacity-90">
                      <Link to="/login">
                        Login
                      </Link>
                    </a>
                </nav>
            </div>
        </section>    
    </header>
  );
}

export default Header;