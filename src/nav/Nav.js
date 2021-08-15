import style from './nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Header</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contact</a>

        </div>
    );
}

export default Nav;
