import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import LogOut from './LogOut';
import FormTitle from './FormTitle';
import RememberDevice from './RememberDevice';
import SignIn from './SignIn';
import EmailLabel from './EmailLabel';

type Inputs = {
    email: string,
};

 const Form = () => {
     // useState hooks to handle state
     const [signIn, setSignIn] = useState({email: ''});
     const [isChecked, setIsChecked] = useState(false);

     // checks if the session has a localstorage key = value pair
     useEffect(() =>{
         if ( localStorage.checkbox !== ""){
             setIsChecked(true)
         }
     },[])

     // useForm hook for validations
     const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
     const onSubmit = (data:any) => {
         // enters a localstorage key=value pair to persist device login
         if (isChecked !== false){
             localStorage.username = data.email;
             localStorage.checkbox = isChecked;
         }
         setSignIn({email: data.email})
         console.log(data.email);
     }

     const logout = () =>{
         setSignIn({email: ""})
         localStorage.checkbox = false;
     }

     const handleCheckBox = (e: any) =>{
         setIsChecked(e.target.checked)
     }
    return (
        <div className="card">
            {(signIn.email !== "" ) ?(
                    <LogOut signInEmail={signIn.email} logout={()=>logout()} />
            ) : (
                <div className="cardDiv">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormTitle />
                    <div>
                        <EmailLabel />
                        <div>
                            <input type="text"
                                   {...register("email", {
                                required: "Field cannot be empty",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })} />
                        </div>
                        {errors.email && <span role="alert">{errors.email.message}</span>}
                        <RememberDevice isChecked={isChecked} handleCheckBox={handleCheckBox} />
                        <SignIn />
                    </div>
                </form>
                </div>
            ) }

        </div>
    )
}

export default Form;

