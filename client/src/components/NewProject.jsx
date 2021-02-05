import React, {useState} from 'react';
import {Router, Link, navigate} from '@reach/router';
import axios from 'axios';


const NewProject = props => {

const [project, setProject] = useState("");
const [date, setDate] = useState("");
const [Status, setStatus] = useState("1");
const [errors, setErrors] = useState({});


const addProjects = e => {
    e.preventDefault();
    const projects = {project, date, Status:"1"}
    axios.post("http://localhost:8000/api/projects/new", 
    projects,
    date,
    Status,)
        .then(res => {
            if(res.data.errors) {
                setErrors(res.data.errors);

            }else{
                navigate("/home")
            }
        })
        .catch(err => console.log(err) );
    }

    return (
        <form onSubmit={ addProjects }>
            <h4>Plan a new project</h4>
            <Link to ="/home"> Back to Dashboard</Link><br/><br/><br/>
            <div>
                <div>
                   Project <input type="text" placeholder="project" onChange = {e => setProject(e.target.value)} value ={project} />
                    {project.length < 3 ? <p>project  must be at least 3 letters</p> : "" }
                { 
                    errors.project ?
                    <p>{errors.project.message}</p> :
                    ""
                }
                </div>
            </div>   
            <div>
                <div>
                Due Date <input type="date" onChange = {e => setDate(e.target.value)} value={date} />
                {date.length < 3 ? <p>You must put date</p> : "" }
                { 
                    errors.date ?
                    <p>{errors.date.message}</p> :
                    ""
                }
        </div>      
    </div>  
            <button type="submit" to ="/home">  Plan a project </button>
        </form>
    )
}


export default NewProject; 