import React from 'react'
import pic from "./assets/logo.svg"
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import {useForm} from 'react-hook-form';


// import { Typography } from '@mui/material';

import "./Style/login.css"
import GoogleIcon from "./assets/google.svg";


const SubmitButton = styled(Button)({
    backgroundColor: '#008080',
    color: 'white',
    fontSize: '1rem',
    width: '100%',
    marginTop: '1rem',
    fontFamily: 'Montserrat',
    '&:hover': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: '#046666',
    },
});

const FormStack = styled(Stack)({
    margin:'5rem auto',
    width: '35ch',
});




function Login() {
    const {register, handleSubmit, control, formState: { errors }} = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const [action, setAction] = React.useState("Sign In");
    const [password, setPassword] = React.useState()


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const onSubmit = (data) => {
        console.log(data)
    }
    
  

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='main'>
        <div className="sidebar">
            <div className="top">
                <h2>Sign In</h2>
                <h2>Manage Users, Accounts Books and more</h2>
            </div>
            <div className='btm'>
                <p>Go Green</p>
                <p>Embrace Savings</p>
            </div>
        </div>
        <div className="main-form">
            <img src={pic} alt="Logo" />
            <form onSubmit= {handleSubmit(onSubmit)}>
                <FormStack spacing={2}>
                    {action === 'Sign Up' ? <TextField 
                    placeholder="Enter your name"
                    label="Name"
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    variant='outlined'
                    fullWidth
                    name="username"
                    type="name"
                    {...register("name", { required: "Please enter your username", })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                    
                    >
                    </TextField> : null}
                    
                <TextField
                placeholder="Enter your college email"
                label="Email"
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                variant='outlined'
                fullWidth
                name="email"
                type="email"
                {...register("email", { required: "Please enter your college email", })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                
                >

                </TextField>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name='Password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        {...register("Password", { required: "Please enter your password", })}
                        error={Boolean(errors.Password)}
                        helperText={errors.Password?.message}
                        placeholder='Type your password'
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl >
                
                    <SubmitButton variant='contained' type='submit'>{action}</SubmitButton>
                    </FormStack>
                    </form>
                {action==='Sign Up' ? <Typography variant='caption' display="block" textAlign="center">Already have an account? <Link href="#" underline="hover" onClick={()=>{setAction("Sign In")}}>
                        {'Sign In'}</Link></Typography> : <Typography variant='caption' display="block" textAlign="center">Don't have an account yet? <Link href="#" underline="hover" onClick={()=> {setAction("Sign Up")}}>
                        {'Sign Up Now!'}
                    </Link></Typography>}
                        
                        <Divider>OR</Divider>


                        <Typography variant='caption' display='block' textAlign='center'>
                            You can {action} using:
                        </Typography>
                        <FormControl>
                        <Link href="#" margin="0 auto" >
                            <IconButton aria-label='Google'  >
                                <img src={GoogleIcon} alt="Google" className='icon'/>
                            </IconButton>
                        </Link>
                        </FormControl>
               
            
        </div>
    </div>
    
  )
}

export default Login