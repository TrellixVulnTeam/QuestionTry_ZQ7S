import React, {useState, useEffect} from "react";

import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
    ,Avatar
  } from '@material-ui/core';

  import EditProfile from "../../Components/MyProfileChange/ChangePassword";

const MyProfile = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState([]);
    const [confirmPassowrd, setconfirmPassword] = useState([]);


    


    const onChangeEmail = (e) =>{
      const email = e.target.value;
      setEmail(email);
    }

    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);

    }

    const onChangePasswordC = (e) => {
        const confirmPassowrd = e.target.value;
        setconfirmPassword(confirmPassowrd);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('username:', email, 'password: ', password );
    }


    return(

        <div>
          <EditProfile/>
        </div>


    )
    
}

export default MyProfile;
