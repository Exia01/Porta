import React from 'react';
import classes from '../../CSSModules/Project.module.css';

const Project = props => {
    console.log(props)
  let { title, tech, url, image, projectImages } = props.projectData;
  let projectMainImage = `images/portfolio/${projectImages}/${image}`;
  return (
    <div className={classes.projects}>
      <h4>{title}</h4>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={projectMainImage}
          alt='Project Main Img'
          className={classes.projectDisplayImage}
        />
      </a>
    </div>
  );
};

export default Project;
