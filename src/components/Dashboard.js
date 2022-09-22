import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../actions/projectActions'
import { CreateProjectButton } from './Project/CreateProjectButton'
import { ProjectTemplate } from './Project/ProjectTemplate'

export const Dashboard = (props) => {

    const projects = useSelector(state => state.project.projects)

    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            const action = await getProjects()
            dispatch(action)
        }
        loadData();
        }, []
    )


    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                        <CreateProjectButton />
                        <br />
                        <hr />
                        {
                            projects.map((project) => (
                                <ProjectTemplate key={ project.projectID } project={project} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}