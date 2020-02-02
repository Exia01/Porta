import React, {Component} from 'react';
import classes from '../CSSModules/MainContent.module.css';
import axios from 'axios';
import Project from '../components/Project/Project';
import Skills from '../components/Skills/Skills';

export class MainContent extends Component {
  state = {
    //will add data by api
    data: null,
    loading: true,
  };

  getResumeData() {
    axios
      .get('/resumeData.json')
      .then(resumeData => {
        // handle success
        this.setState({data: resumeData.data, loading: false});
      })
      .catch(function (e) {
        console.log(`😱 Axios request failed: ${e}`);
      });
  }

  onInitPortfolioRender() {

  }

  componentDidMount() {
    this.getResumeData();
  }

  componentWillUnmount() {
    //figure out how to cancel axios call here
  }

  render() {
    let projects
    let skills
    let testProject
    let tempDiv

    if (this.state.data === null) {
      projects = (
        <div className={classes.projectsError}>
          <h1>No Projects Available</h1>
        </div>
      );
    } else {
      projects = this.state.data.portfolio.projects.map(projectData => {
        return <Project projectData={projectData} key={projectData.title} />;
      })
      skills = <Skills skills={this.state.data.resume.skills} />
      testProject = this.state.data.portfolio.projects[0]
      let tempImage = `images/portfolio/TodoApp/${testProject.image}`;
      console.log(testProject)

      tempDiv = (

        <div>
          <section className="projectPageSection">
            <div className="projectPageTitle">
              <h1>{testProject.title}</h1>
            </div>
            <div className="projectPageImages">
            <img src={tempImage} alt="Project Img"/>
            </div>
            <div className="projectPageContent">
            </div>
          </section>
        </div>
      )
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
        {skills}
        {tempDiv}


      </React.Fragment>
    );
  }
}

export default MainContent;


    // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
    // {this.state.data !== null ? <Skills skills={this.state.data.resume.skills} /> : null}