
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())//ekta promise
        .then((data) => console.log(data));//2nd again promise and get data
};


const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((post) => {
            console.log(post);
            displayPost(post);
        });
};


const displayPost = (posts) => {
    posts.forEach((p) => {
        console.log(p);
    });
}