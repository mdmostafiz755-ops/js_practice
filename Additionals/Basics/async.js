const login=async(username,password)=>{
    if(!username || !password) throw "Missing Credentials"
    if(password==='abcd') return 'welcome'
    throw 'invalid password'
}

login('asik','1234')
.then(msg=>{
    console.log('Logged in')
    console.log(msg)
})
.catch(err=>{
    console.log('Error')
    console.log(err)
})