import { useFetchProjects } from './fetchProjects';

const Projects = () => {
    const { isLoading, projects } = useFetchProjects();
    

    if (isLoading) {
        return (
            <section className='projects'> 
                <h2>
                    Loading...
                </h2>
            </section>
        );
    }
    console.log(projects);
    return (
        <section className='projects'>
            <div>
                <h1 className='title'> Projects </h1>
                <div className='title-underline'></div>
            </div>
            <div className='projects-center'>
                {projects.map( (project) => {
                    const { id, title, url, image } = project;
                    return (
                        <a className='project' key={id} href={url} target="_blank" rel="noreferrer">
                            <img src={image} className='img'/>
                            <h5>{title}</h5>
                        </a>
                    );
                })}
            </div>
        </section>
    )
}

export default Projects