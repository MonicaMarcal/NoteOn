import { Link } from "react-router-dom";


function Header() {
  return (
        <section>
          <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div className="flex items-center justify-between">
              <Link to="/">
                <h1 className="font-semibold text-slate-900">NOTEON</h1>
              </Link>

              <div className="flex gap-2 items-center justify-between">
              <a className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                <Link to="/register">
                      Register
                </Link>
              </a>
              <a className="hover:bg-blue-400 group flex  items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                <Link to="/login">
                    Login
                </Link>
              </a>
              </div>
            </div>
          </header>
      </section>
  );
}

export default Header;