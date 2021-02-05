import React, {useState} from 'react';
import axios from 'axios';
import './Home.css';

const Complete = props => {
    const {projectId} = props;
    const [Status, setStatus] = useState("3")

    const statusUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/projects/` + projectId , {
            Status
        })
            .then(res => {
                console.log(res.data);
                props.Update();
            })
            .catch(err => console.log(err) );
        }
        return (
            <button className="Completed" 
            type="submit" onClick = {statusUpdate}> Move to Complete </button> 
        )
}



export default Complete;
