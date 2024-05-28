import { useParams } from 'react-router-dom';

const ProjectPage = () => {
    let { id } = useParams();

    // Convert id from string to number
    id = Number(id);
  
    // Get project with this id
    // ...
  
    return (
        <p>ProjectPage {id}</p>
    )
}

export default ProjectPage;