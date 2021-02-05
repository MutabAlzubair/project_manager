import React, {useState} from 'react';
import axios from 'axios';
import './Home.css';



const Delete = props => {
    const {projectId} = props;
    

    const statusUpdate = e => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/projects/` + projectId , {
            
        })
            .then(res => {
                console.log(res.data);
                props.Update()
            })
            
            .catch(err => console.log(err) );
        }

        return (

        <button className="remove" 
        type="submit" onClick = {statusUpdate}> Remove project </button> 

        )
}



export default Delete;