import React from "react";
import { Link } from "react-router-dom"
import styles from "../layout/Navbar.module.css"
import logo from "../imgs/em_desenvolvimento.png"

function NavBar() {
    return (
        <nav >
            <div className={styles.navbar}>
                <img className={styles.logo} src={logo} alt="Em Desenvolvimento"></img>

                <ul className={styles.links} >
                    <li className={styles.li}><Link to={"/"}>Home</Link> </li>
                    <li className={styles.li}><Link to={"/custos"}>Custos</Link> </li>
                    <li className={styles.li}><Link>Sobre</Link> </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar