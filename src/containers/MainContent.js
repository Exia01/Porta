import React, { Component } from 'react';
import classes from '../CSSModules/MainContent.module.css';
import axios from 'axios';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';
export class MainContent extends Component {
  state = {
    data: {}
  };

  async getResumeData() {
    try {
      //   Load async data from an inexistent endpoint.
      let resumeData = await axios.get('/resumeData.json');
      console.log(resumeData);
      this.setState(resumeData);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }

  async componentDidMount() {
    this.getResumeData();
  }

  componentWillUnmount() {}

  render() {
    let projects;
    if (this.state.data.portfolio) {
      projects = this.state.data.portfolio.projects.map(projectData => {
        return <Project projectData={projectData} key={projectData.title} />;
      });
    } else {
      projects = (
        <div className={classes.projectsError}>
          <h1>No Projects Available</h1>
        </div>
      );
    }

    return (
      <React.Fragment>
        <section className={classes.jobTitleSection}>
          <article>
            <h2 className='jobTitleTag'>Front End Developer</h2>
          </article>
        </section>

        <section className={[classes.projectSection, 'container'].join(' ')}>
          <div className={classes.projectSectionHeader}>
            <h3>Projects</h3>
          </div>
          {projects}
        </section>

        <section>
          <Skills />
        </section>
      </React.Fragment>
    );
  }
}

export default MainContent;
