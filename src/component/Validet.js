export const Validet = (data , type) =>{

    const error ={}

    if(!data.email){
        error.email="Please insert Email";
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
       error.email="Please insert valid Email ";
    }else{
        delete error.email;
    }

    if(!data.password){
        error.password="Please insert PassWord"
    } else if(data.password.length < 6 || data.password.length > 15) {
       error.password="تعداد کاراکترها باید بین 6 تا 15 باشد";
    }else{
        delete error.password ;
    }

   

    if(type === "signup"){

        if(!data.name.trim()){
            error.name="Please insert valid User Name ";
        } else {
            delete error.name;
        }

        if(!data.confirmpassword){
            error.confirmpassword="Please insert again PassWord "
        } else if(data.confirmpassword !== data.password) {
           error.confirmpassword="پسورد را درست وارد کنید";
        } else{
            delete error.confirmpassword ;
        }
    
    
        if(data.isAccept){
            delete error.isAccept
        }else{
            error.isAccept="لطفا قوانین را مطالعه نمایید";
        }

    }
   
    

    return error;
}
