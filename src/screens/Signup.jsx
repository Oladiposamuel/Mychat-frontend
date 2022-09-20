import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const {firstName, lastName, email, password} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const signup = (e) => {
        e.preventDefault();
        console.log(data);

        axios.put('http://localhost:8080/signup', data)
          .then(function (response) {
            console.log(response);
            if(response.data.code === 201) {
                navigate("/signin");
            }
          })
          .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div className='signup'>
        <div className="signup-box">
            <form className="signup-box__form" onSubmit={signup}>
                <label className="signup-box__form__label"> firstName: 
                    <input type="text" name="firstName" className="signup-box__form__input" value={firstName} onChange={handleChange} /> 
                </label>
                <label className="signup-box__form__label"> lastName: 
                    <input type="text" name="lastName" className="signup-box__form__input" value={lastName} onChange={handleChange} /> 
                </label>
                <label className="signup-box__form__label"> email: 
                    <input type="email" name="email" className="signup-box__form__input" value={email} onChange={handleChange} /> 
                </label>
                <label className="signup-box__form__label"> password: 
                    <input type="password" name="password" className="signup-box__form__input" value={password} onChange={handleChange} /> 
                </label>
                <input type="submit" value="Sign up" className="signup-box__form__button" />
            </form>
        </div>
    </div>
  )
}

export default Signup