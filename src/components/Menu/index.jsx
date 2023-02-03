import home from '../../assets/icons/home-ativo.png'
import maisCurtidas from '../../assets/icons/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icons/mais-vistas-inativo.png'
import novas from '../../assets/icons/novas-inativo.png'
import surpreendaMe from '../../assets/icons/surpreenda-me-inativo.png'

import styles from './Menu.module.scss'

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}