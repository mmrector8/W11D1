import {useState, useEffect} from 'react';

function Form(props){
    const [user, setUser] = useState({
        name: "",
        email: "email",
        phoneNumber: "",
        phoneType: "",
        position: "",
        bio: "",
        signUpForEmails: ""
    })

    const handleChange = (incomingKey)=>{
        return e => {
            const newObj = Object.assign({}, user, { [incomingKey]: e.target.value })
            setUser(newObj)
        }
       
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(user)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' onChange={handleChange('name')}></input>
                <input type="text" placeholder='Email' onChange={handleChange('email')}></input>
                <input type="text" placeholder='Phone Number' onChange={handleChange('phoneNumber')}></input>
                <select value="{phoneType.value}" placeholder="Phone Type" onChange={handleChange('phoneType')}>
                    <option value='cell'>Cell</option>
                    <option value='home'>Home</option>
                    <option value='work'>Work</option>
                </select>
                <label>Instructor
                    <input type="radio" name="Position" value="Instructor" onChange={handleChange('position')}></input>
                </label>
                <label>Student
                    <input type="radio" name="Position" value="Student" onChange={handleChange('position')}></input>
                </label>
                <input type='textarea' placeholder="Please write a short bio" onChange={handleChange('bio')}></input>
                <label>Sign Up For Email Notifications?</label>
                <label>Yes
                    <input type='checkbox' name="Yes" value="true" onChange={handleChange('signUpForEmails')}></input>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;