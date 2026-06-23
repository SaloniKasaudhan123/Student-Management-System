import { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
    const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <header className="w-full bg-blue-950/80 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-wide hover:text-slate-200 flex" 
          onClick={closeMenu} >
          <p className="text-shadow-blue-200 text-shadow-lg text-2xl sm:text-3xl">🎓</p>
          SMS
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors hover:text-slate-200 ${
                isActive ? "text-sky-300" : "text-white"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/student"
            className={({ isActive }) =>
              `transition-colors hover:text-slate-200 ${
                isActive ? "text-sky-300" : "text-white"
              }`
            }
          >
            Student
          </NavLink>

          <NavLink
            to="/course"
            className={({ isActive }) =>
              `transition-colors hover:text-slate-200 ${
                isActive ? "text-sky-300" : "text-white"
              }`
            }
          >
            Course
          </NavLink>

          <NavLink
            to="/attendence"
            className={({ isActive }) =>
              `transition-colors hover:text-slate-200 ${
                isActive ? "text-sky-300" : "text-white"
              }`
            }
          >
            Attendence
          </NavLink>

        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-slate-800"
          onClick={() => setMenu((v) => !v)}
          aria-label={menu ? "Close menu" : "Open menu"}
        >
          {menu ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menu && (
        <nav className="border-t border-slate-800 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded px-3 py-2 transition-colors hover:bg-gray-900/30 ${
                    isActive ? "bg-gray-800/20 text-white" : "text-white hover:bg-slate-800"
                  }`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/student"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded px-3 py-2 transition-colors hover:bg-gray-900/30 ${
                    isActive ? "bg-gray-800/20 text-white" : "text-white hover:bg-slate-800"
                  }`
                }
              >
                Student
              </NavLink>

              <NavLink
                to="/course"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded px-3 py-2 transition-colors hover:bg-gray-900/30 ${
                    isActive ? "bg-gray-800/20 text-white" : "text-white hover:bg-slate-800"
                  }`
                }
              >
                Course
              </NavLink>

              <NavLink
                to="/attendence"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded px-3 py-2 transition-colors hover:bg-gray-900/30 ${
                    isActive ? "bg-gray-800/20 text-white" : "text-white hover:bg-slate-800"
                  }`
                }
              >
                Attendence
              </NavLink>
            </div>
            </div>
        </nav>
      )}
    </header>
  );
}
