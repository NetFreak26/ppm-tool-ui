import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { SAVE_PROJECT_TASK } from "../../../actions/actionTypes"
import { saveProjectTask } from "../../../actions/projectTaskActions"

export const AddProjectTaskTemplate = () => {

    const [projectTaskStates, setProjectTaskStates] = useState({
        taskSummary: "",
        acceptanceCriteria: "",
        dueDate: "",
        priority: "",
        status: ""
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setProjectTaskStates((previousStates) => ({
            ...previousStates,
            [name]: value
        }))
    }

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const errors = useSelector(state => state.project.errors);

    const location = useLocation();
    const { projectID } = location.state;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const action = await saveProjectTask(projectTaskStates, projectID)
        dispatch(action);
        if(action.type === SAVE_PROJECT_TASK) {
            navigate('/backlog', {state: {projectID: projectID}})
        }
    }

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/backlog" state={{projectID: projectID}} className="btn btn-light">
                            Back to Project Board
                        </Link>
                        <h4 className="display-4 text-center">Add /Update Project Task</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                       className="form-control form-control-lg" 
                                       placeholder="Project Task summary" 
                                       name="taskSummary"
                                       value={projectTaskStates.taskSummary} 
                                       onChange={handleChange}
                                       required/>
                            </div>
                            {errors.taskSummary && (
                                <div className="feedback">
                                    <p>{errors.taskSummary}</p>
                                </div>
                            )}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                          placeholder="Acceptance Criteria" 
                                          name="acceptanceCriteria"
                                          value={projectTaskStates.acceptanceCriteria}
                                          onChange={handleChange}
                                          required></textarea>
                            </div>
                            {errors.acceptanceCriteria && (
                                <div className="feedback">
                                    <p>{errors.acceptanceCriteria}</p>
                                </div>
                            )}
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                       className="form-control form-control-lg" 
                                       name="dueDate" 
                                       value={projectTaskStates.dueDate}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" 
                                        name="priority"
                                        value={projectTaskStates.priority}
                                        onChange={handleChange}>
                                    <option value="">Select Priority</option>
                                    <option value="HIGH">High</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LOW">Low</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control form-control-lg" 
                                        name="status"
                                        value={projectTaskStates.status}
                                        onChange={handleChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}