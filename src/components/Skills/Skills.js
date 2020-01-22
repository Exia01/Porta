import React from 'react';
import Skill from './skill/Skill'

const Skills = props => {
  console.log(props)
  let { skills } = props;
  let skillTags = skills.map(skillObj => {
    return <Skill skill={skillObj} key={skillObj.name}/>
  });
  console.log(skillTags);
  return (
    <React.Fragment>
      <div>
        <h3>Skills</h3>
      </div>
      {skillTags}
    </React.Fragment>
  );
};

export default Skills;
