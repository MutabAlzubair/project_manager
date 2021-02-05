import { navigate } from '@reach/router'
import axios from 'axios'
import { useState } from 'react'

const Register = ({ setUser }) => {
    const [inputFields, setInputFields] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [inputErrors, setInputErrors] = useState()

    const handleSubmit = (event) => {
        console.log("submitting form")
        event.preventDefault()
        axios
            .post("http://localhost:8000/api/register", inputFields)
            .then((res) => {
                console.log(res.data)

                setUser(res.data.user)
                navigate("/home")
            })
            .catch((err) => {
                console.log(err)
                setInputErrors(err)
            })
    }

    const handleChange = (e) => {
        console.log("changing state")
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
            userName
        <input type="text" name="userName" onChange={handleChange} />
            </p>

            <p>
                email
        <input type="text" name="email" onChange={handleChange} />
            </p>
            <p>
                password
        <input type="text" name="password" onChange={handleChange} />
            </p>
            <p>
                confirmPassword
        <input type="text" name="confirmPassword" onChange={handleChange} />
            </p>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register