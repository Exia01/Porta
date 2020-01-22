import React from 'react';
import Skill from './skill/Skill';
import classes from '../../CSSModules/Skills.module.css'
const Skills = props => {
  console.log(props);
  let { skills } = props;
  let skillTags = skills.map(skillObj => {
    return <Skill skill={skillObj} key={skillObj.name} className={classes.skillsBlock} />;
  });
  console.log(skillTags);
  return (
    <React.Fragment>
      <section className={[classes.skillsSection, 'container'].join(' ')}>
        <div className={classes.skillsSectionHeader}>
          <h3>Skills</h3>
        </div>
        {skillTags}
      </section>
    </React.Fragment>
  );
};

export default Skills;
