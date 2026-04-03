let isLoaded = false;

const loadPost = () => {
    if (isLoaded) return; // stop if data already loaded

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayPost(data);
            isLoaded = true; // mark as loaded
        });
};

const container = document.querySelector("#container");

const displayPost = (post) => {
    post.forEach((element) => {
        const card = document.createElement('div');
        card.innerHTML = `
<ul class="list bg-base-100 rounded-box shadow-md ">
  <li class="list-row">
    <div>
      <div>${element.title}</div>
      <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <p class="list-col-wrap text-xs">
      ${element.body}
    </p>
  </li>
</ul>`;
        container.appendChild(card);
    });
};