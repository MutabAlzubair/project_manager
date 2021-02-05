import React, {useState, useEffect} from 'react';
import {Router, Link} from '@reach/router';
import axios from 'axios';
import moment from 'moment';
import InProgress from './InProgress';
import Complete from './complete';
import Delete from './Delete';
import './Home.css';


const Home = props => {
    const [projects, setProjects] = useState([]);

    const displayProjects = () => {
        axios.get("http://localhost:8000/api/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }
    useEffect( () => {
        displayProjects();

    }, []);

    function pastDueDate(date) {
        return new Date(date) < new Date(new Date().toDateString())
    }



    return (
    <div>
        <div>
            <div className = "column left"> 
                <article>
                    <div>
                        <p className="Backlog">Backlog</p>
        </div>
        {projects.filter(pro => pro.Status === "1").map(pro => 
        <div key={pro._id}>
                <h5>{pro.project}</h5>
                
                <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
                <InProgress 
                projectId = {pro._id}
                Update = {displayProjects}
                />
            </div> 
        )}
        </article>
    </div>
    <div className = "column left"> 
        <article>
            <div>
                <p className="Inprogress">In progress</p>
        </div>
            {projects.filter(pro => pro.Status === "2").map(pro => 
            <div key={pro._id}>
                <h5>{pro.project}</h5>
            { pastDueDate(pro.date) ? 
            <p style ={{color: "red" }}>Due:  {moment(pro.date).format('MM-DD-YYYY')}</p> :
            <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
            }
            
            <Complete 
            projectId = {pro._id}
            Update = {displayProjects}
            />
        </div> 
        )}
        </article>
    </div>
    <div className = "column left">
        <article>
            <div>
                <p className="Completed">Completed</p>
        </div>
            {projects.filter(pro => pro.Status === "3").map(pro => 
            <div  key={pro._id}>
            <h5>{pro.project}</h5>
            <p>Due: {moment(pro.date).format('MM-DD-YYYY')}</p> 
                <Delete 
                projectId = {pro._id}
                Update = {displayProjects}
                />

        </div> 
        )}
        </article>
    </div>
    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <button> <Link to ="/projects/new"> Add New Projects</Link></button><br/><br/><br/>
    <button><Link to ="/"> Logout</Link></button><br/><br/><br/>
    </div>
    
    )
}

export default Home;