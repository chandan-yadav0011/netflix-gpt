export const checkValidation=(email,password)=>{
    console.log(email);
    console.log(password);

    const isEmailValid=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
    const isPasswordValid= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    console.log(isEmailValid);
    console.log(isPasswordValid);

   
  
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

}