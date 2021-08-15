import style from './Main.module.css';
import styleContainer from '../common/style/Container.module.css';

function Main() {
    return (

        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Evgeniy </h1>
                    <p>I react developer </p>
                </div>
                <div className={style.photo}>
                    <img src="../common/photo.jpeg"/>
                </div>
            </div>


        </div>
    );
}

export default Main;
