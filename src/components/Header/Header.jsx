import styles from "./Header.module.scss"
import { ReactComponent as Logo } from 'icons/logo.svg'
import { ReactComponent as Cart } from 'icons/cart.svg'
import { ReactComponent as Moon } from 'icons/moon.svg'
import { ReactComponent as Search } from 'icons/search.svg'
import { ReactComponent as ToggleIcon } from 'icons/toggle.svg'



export default function Header({onToggleTheme}){
    return(
    <header className="site-header">
      <div className="header-container">
        <Logo className="logo"/>
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
            <ToggleIcon className="burger"/>
        </label>
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list">
            <li className="nav-item">
              <a className="nav-link" href="#">男款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">女款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">最新消息</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">客製商品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            <li className="nav-item">
              <Search />
            </li>
            <li className="nav-item">
              <Cart />
            </li>
            <li id="theme-toggle" className="nav-item">
              <Moon onClick={onToggleTheme}/>
            </li>
          </ul>
        </nav> 
      </div>
    </header>
    )
}