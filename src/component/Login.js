import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';

//CSS
import Styles from "./Singup.module.css";

//Component and Functions
import { Validet } from './Validet';
import { notify } from './toast';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [data , setData] = useState({
        email : "" ,
        password : "" 
    })


    const [error , setErro] = useState({});
    const [touched , setTouched] = useState({})

    const changHandler = (event) =>{
          setData({ ...data , 
            [event.target.name] : event.target.value 
        })  
    }

    const focusHandler =(event) =>{
        setTouched({ ...touched , [event.target.name] : true})
    }

    useEffect( () => {
        setErro(Validet(data , "login"))
    } , [data , touched])


    const submitHandler =(event)  => {
        event.preventDefault();
        if(!Object.keys(error).length){
            notify("خوش آمدید", "success")
        }else{
            notify("تمام گزینه ها را به درستی وارد کنید" , "error")
           setTouched({
            email : true ,
            password : true 
           })
        }
    }



    return (
        <div className={Styles.container}>
            <form className={Styles.formContainer} onSubmit={submitHandler}>

                <div className={Styles.formBox}>
                    <h1 className={Styles.headerText}>Login</h1>
                </div>


                <div className={Styles.formBox}>
                    <label>Email</label>
                    <input 
                    className={(error.email && touched.email) ? Styles.formInputError : Styles.formInput }
                     type='text' name='email' value={data.email} onChange={changHandler}  onFocus={focusHandler} />
                    {error.email && touched.email && <span>{error.email}</span>}
                </div>


                <div className={Styles.formBox}>
                    <label>Password</label>
                    <input
                    className={(error.password && touched.password) ? Styles.formInputError : Styles.formInput }
                     type='password' name='password' value={data.password} onChange={changHandler}  onFocus={focusHandler}   />
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>

                <div className={Styles.buttonSubmit}>
                    <Link to="/signup">Sign Up</Link>
                    <button type='submit' >Login</button>
                </div>

            </form>

            <ToastContainer />
        </div>
    );
};

export default Login;