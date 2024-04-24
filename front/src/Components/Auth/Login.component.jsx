import React from 'react'
import "./auth.css"
import logoInsta from "../../Assets/images/logo-insta.webp"
import { useForm } from "react-hook-form"
import {useDispatch} from "react-redux"
import { login } from '../../redux/AuthSlice/authSlice'


const Login = () => {
  
const dispatch=useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => dispatch(login(data))

  // console.log('watch',watch())

  // console.log(errors)

  return (
    <div className='login-container'>
      <img src={logoInsta} alt="" />
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='user Name' name='identifier' {...register("identifier", { required: "userName is required"   })} />
        {errors.identifier && <span style={{color:"red"}}>{errors.identifier.message}</span>}
        <input type="password" name="password" id="password" placeholder='Password' {...register("password")}/>

        <input type="submit" value="Login" />
      </form>

    </div>
  )
}

export default Login