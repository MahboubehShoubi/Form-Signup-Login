import React , {useState , useEffect} from 'react';
import {Link} from "react-router-dom";

//CSS
import Styles from "./Singup.module.css";

//Component and Functions
import { Validet } from './Validet';
import { notify } from './toast';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [data , setData] = useState({
        name : "" ,
        email : "" ,
        password : "" ,
        confirmpassword : "" ,
        isAccept : false 
    });


    const [error , setErro] = useState({});
    const [touched , setTouched] = useState({})


    const changHandler = (event) =>{
        if(event.target.name === "isAccept"){
            setData({...data , isAccept : !data.isAccept})
        } else {
          setData({ ...data , 
            [event.target.name] : event.target.value 
        })  
        }
    }


    const focusHandler =(event) =>{
        setTouched({ ...touched , [event.target.name] : true})
    }

    useEffect( () => {
        setErro(Validet(data , "signup"))
    } , [data , touched])



    const submitHandler =(event)  => {
        event.preventDefault();
        if(!Object.keys(error).length){
            notify("ثبت نام شما به درستی انجام شد" , "success")
        }else{
            notify("تمام گزینه ها را به درستی وارد کنید" , "error")
           setTouched({
            name : true ,
            email : true ,
            password : true ,
            confirmpassword : true ,
            isAccept : true 
           })
        }
    }

    


    return (
        <div className={Styles.container}>
            <form className={Styles.formContainer} onSubmit={submitHandler}>

                <div className={Styles.formBox}>
                    <h1 className={Styles.headerText}>SignUp</h1>
                </div>

                <div className={Styles.formBox}>
                    <label>User Name</label>
                    <input
                    className={(error.name && touched.name) ? Styles.formInputError : Styles.formInput }
                     type='text'
                     name='name'
                      value={data.name} 
                      onChange={changHandler}
                     onFocus={focusHandler}
                      />
                    {error.name && touched.name && <span>{error.name}</span>}
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


                <div className={Styles.formBox}>
                    <label>Confirm Password</label>
                    <input className={(error.confirmpassword && touched.confirmpassword) ? Styles.formInputError : Styles.formInput }
                     type='password' name='confirmpassword' value={data.confirmpassword} onChange={changHandler} onFocus={focusHandler}  />
                    {error.confirmpassword && touched.confirmpassword && <span>{error.confirmpassword}</span>}
                </div>


                <div className={Styles.formBox}>
                    <div className={Styles.inputCheckbox}>
                        <label>قوانین بالا را مطالعه نموده و موافقت می نمایم</label>
                        <input type="checkbox" name='isAccept' value={data.isAccept} onChange={changHandler}  onFocus={focusHandler} />
                    </div>
                    {error.isAccept && touched.isAccept && <span>{error.isAccept}</span>}
                </div>


                <div className={Styles.buttonSubmit}>
                    <Link to="/login">Login</Link>
                    <button type='submit' >SignUp</button>
                </div>

            </form>
            
            <ToastContainer />
        </div>
    );
};

export default SignUp;