
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())//ekta promise
        .then((data) => console.log(data));//2nd again promise and get data
}
