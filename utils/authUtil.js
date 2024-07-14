const userDataValidation = ({name, email, username, password})=>{
    return new Promise((resolve,reject)=>{
        console.log(name,email,username,password)
        if(!name || !email || !username || !password)
        {
            reject("missing user credentials")
        }
        resolve();
    })
}

module.exports={userDataValidation}