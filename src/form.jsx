import {useState, useEffect} from 'react';

function Form(props){
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        position: "",
        bio: "",
        signUpForEmails: ""
    })

    const [errors, setErrors] = useState([])

    const validate = () => {
        let errors = [];
        if (user.name.length <= 2) {
            errors.push("Name must be longer")
        } 

        if (user.bio.length >= 280) {
            errors.push("Bio must be longer 280 characters")
        }

        if (!/^\w+@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
            errors.push("Invalid email address")
        }

        if ( !(user.phoneNumber.match('[0-9]{10}')) ){
            errors.push('Please provide valid phone number');
        }
        
        if (user.phoneType === "") {
            errors.push("Please pick a phone type")
        }

        console.log(errors)
        return errors
    }

   


    const showErrors = () => {
        if (!errors.length) return null;
        return (
            <ul>
                {errors.map((error, i)=> <li key={i}>{error}</li>)}
            </ul>
        )
    }



    const handleChange = (incomingKey)=>{
        return e => {
            const newObj = Object.assign({}, user, { [incomingKey]: e.target.value })
            setUser(newObj)
        }
       
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(user);

        let errors = validate();

        if(errors.length) {
            setErrors(errors);
        } else {
            setUser({
                name: "",
                email: "",
                phoneNumber: "",
                phoneType: "",
                position: "",
                bio: "",
                signUpForEmails: ""
            });
            setErrors([]);
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' onChange={handleChange('name')}></input>
                <input type="text" placeholder='Email' onChange={handleChange('email')}></input>
                <input type="text" placeholder='Phone Number' onChange={handleChange('phoneNumber')}></input>
                <select value={user.phoneType} onChange={handleChange('phoneType')}>
                    <option value="" disabled>Select Phone</option>
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
                {showErrors()}
            </form>
        </>
    )
}

export default Form;