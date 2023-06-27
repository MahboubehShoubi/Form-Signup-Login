import React  from 'react';
import { Link  } from 'react-router-dom';


const MainPage = () => {
    return (
        <div>
            <Link to='/' >Home</Link>
            <br />
            <Link to='/login' >Login</Link>
            <br />
            <Link to='/signup' >SignUp</Link>
        </div>
    );
};

export default MainPage;