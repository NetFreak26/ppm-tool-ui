import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import { getProjectTasks } from "../../actions/projectTaskActions";
import { ProjectTaskTemplate } from "./ProjectTask/ProjectTaskTemplate";

export const Backlog = () => {

    const location = useLocation();
    const { projectID } = location.state;

    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            const action = await getProjectTasks(projectID);
            dispatch(action);
        }
        loadData();
        }, []
    )

    const projectTasks = useSelector(state => state.backlog.projectTasks)

    return (
        <div className="container">
            <Link to="/addProjectTask" state = {{projectID: projectID}} className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
            <br />
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>
                        {
                            projectTasks.filter(projectTask => projectTask.status === "TO_DO").map(projectTask => (
                                <ProjectTaskTemplate key={projectTask.taskID} projectTask={projectTask} />
                            ))
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {
                            projectTasks.filter(projectTask => projectTask.status === "IN_PROGRESS").map(projectTask => (
                                <ProjectTaskTemplate key={projectTask.taskID} projectTask={projectTask} />
                            ))
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>
                        {
                            projectTasks.filter(projectTask => projectTask.status === "DONE").map(projectTask => (
                                <ProjectTaskTemplate key={projectTask.taskID} projectTask={projectTask} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}