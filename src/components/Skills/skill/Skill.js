import React from 'react';

const Skill = props => {
  let { skill } = props;
  let image = `images/skills/${skill.image}`;
  return (
    <div className={props.className}>
      <img alt='Skill Icon' src={image} />
      <h5>{skill.name}</h5>
    </div>
  );
};

export default Skill;

// Loading Image:https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

// //Lazy Loading: https://medium.com/@albertjuhe/an-easy-to-use-performant-solution-to-lazy-load-images-in-react-e6752071020c

// https://github.com/webpack-contrib/file-loader
