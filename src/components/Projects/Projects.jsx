import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header flex justify-center items-center w-full">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body md:px-[8rem] px-5">
                        <div className="projects--bodyContainer grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 
                        {projectsData.length > 3 && (
                            <div className="projects--viewAll w-full flex items-center justify-end mt-[2rem] p-[2rem]">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
