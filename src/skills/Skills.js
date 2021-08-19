import style from '../skills/Skills.module.css';
import styleContainer from '../common/style/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (

        <div className={style.skillsBlock}>
            <div className={`
            ${styleContainer.container}
            ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <p>12</p>
                    <Skill title={"js"} discription={"fdsfdsf"}/>
                    <Skill title={"css"} discription={"dfsd"}/>
                    <Skill title={"React"} discription={"1fdsffdsf"}/>

                </div>
            </div>

        </div>
    );
}

export default Skills;
