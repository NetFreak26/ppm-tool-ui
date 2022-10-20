import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProject } from "../../actions/projectActions"

export const ProjectTemplate = (props) => {

    const dispatch = useDispatch();

    const deleteProjectByID = async () => {
        const action = await deleteProject(props.project.projectID)
        dispatch(action)
    }

    return (
        <div className="container">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto red">{props.project.projectID}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{props.project.projectName}</h3>
                        <p>{props.project.projectDescription}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                            <Link to='/backlog' state={{ projectID: props.project.projectID }}>
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                </li>
                            </Link>
                            <Link to='/updateProject' state={{ projectID: props.project.projectID }}>
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                                </li>
                            </Link>
                            <div onClick={deleteProjectByID}>
                                <li className="list-group-item delete">
                                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}