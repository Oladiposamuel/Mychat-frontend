import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {

    const[data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const {email, password} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const signin = (e) => {
        e.preventDefault();
        console.log(data);

        axios.post('http://localhost:8080/login', data)
          .then(function (response) {
            console.log(response);
            if(response.data.code === 200) {
                navigate("/");
            }
          })
          .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div className='signup'>
        <div className="signup-box">
            <form className="signup-box__form" onSubmit={signin}>
                <label className="signup-box__form__label"> email: 
                    <input type="email" name="email" className="signup-box__form__input" value={email} onChange={handleChange} /> 
                </label>
                <label className="signup-box__form__label"> password: 
                    <input type="password" name="password" className="signup-box__form__input" value={password} onChange={handleChange} /> 
                </label>
                <input type="submit" value="Sign in" className="signup-box__form__button" />
            </form>
        </div>
    </div>
  )
}

export default Signin