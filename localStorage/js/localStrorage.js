const addToLocalStorage = ()=>{
    const number=Math.ceil(Math.random()*100);
    localStorage.setItem('number',number);
    localStorage.setItem('number2',number*10);
    console.log( localStorage.getItem('number2'));
}


const setObject=()=>{
    const customer={name:'fizz',id:7,cgpa:3.26};
    const obj=JSON.stringify(customer);
    localStorage.setItem('customer',obj);
    const customerJSON=localStorage.getItem('customer');
    const str=JSON.parse(customerJSON);
    console.log(str.name);
}