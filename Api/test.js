url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

    console.log('hi');
    console.log('hello');