import style from './Skill.module.css';
import styleContainer from '../common/style/Container.module.css';

function Skill() {
    return (

        <div className={style.skillBlock}>
            <div className={`
            ${styleContainer.container}
            ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <p>12</p>
                </div>
            </div>

        </div>
    );
}

export default Skill;
