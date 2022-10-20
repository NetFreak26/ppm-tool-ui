import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { deleteProjectTask } from "../../../actions/projectTaskActions";

export const ProjectTaskTemplate = (props) => {

    const dispatch = useDispatch()
    const deleteTask = async () => {
        const action = await deleteProjectTask(props.projectTask.taskID)
        dispatch(action)
    }

    let priorityString;
    let priorityClass;

    if (props.projectTask.priority === "HIGH") {
      priorityClass = "bg-danger text-light";
      priorityString = "HIGH";
    }

    if (props.projectTask.priority === "MEDIUM") {
      priorityClass = "bg-warning text-light";
      priorityString = "MEDIUM";
    }

    if (props.projectTask.priority === "LOW") {
      priorityClass = "bg-info text-light";
      priorityString = "LOW";
    }
    return (
        <div className="card mb-1 bg-light">
            <div className={`card-header text-primary ${priorityClass}`}>
            ID: {props.projectTask.taskID} -- Priority: {priorityString}
            </div>
            <div className="card-body bg-light">
            <h5 className="card-title">{props.projectTask.summary}</h5>
            <p className="card-text text-truncate ">
                {props.projectTask.acceptanceCriteria}
            </p>
            <Link to="/updateProjectTask" state={{taskID: props.projectTask.taskID}} className="btn btn-primary">
                View / Update
            </Link>

            <button onClick={deleteTask} className="btn btn-danger ml-4">
                Delete
            </button>
            </div>
        </div>
    )
}