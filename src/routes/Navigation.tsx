import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes'

import logo from '../logo.svg'

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {
              routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}>
                    {name}
                  </NavLink>
                </li>
              ))

            }
          </ul>
        </nav>


        <Routes>
          {
            routes.map(route => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))
          }

          <Route path="lazy1" element={<LazyPage1 />} />


          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}
