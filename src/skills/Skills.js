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
                    <Skill title={"js"} discription={"fdsfdsf"}/>
                    <Skill title={"css"} discription={"dfsd"}/>
                    <Skill title={"React"} discription={"1fdsffds21f"}/>

                </div>
            </div>

        </div>
    );
}
// 10+10+6+10+9+9+9+9+8+8+9+10
// 40+45+6+16=107
export default Skills;
