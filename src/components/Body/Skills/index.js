import SkillCard from "./SkillCard";
import "./styles.scss";
import { SkillList } from "../About/Data";

const Skills = () => {
  return (
    <div className="skills-body-container" id="skills">
      <h1>Skills</h1>
      <div className="skills-cards">
        {SkillList.map((item) => (
          <SkillCard item={item} />
        ))}
        {/* <SkillCard /> */}
      </div>
    </div>
  );
};

export default Skills;
