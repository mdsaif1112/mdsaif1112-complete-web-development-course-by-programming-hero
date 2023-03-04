function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const postContainer = document.getElementById('post-container');
    data.forEach(object => {
        const commentor = object.name
        const postBox = document.createElement('div');
        postBox.innerHTML = `
            <h2 class="post-id">Post ${object.id}</h2>
            <h2 class="post-title">${commentor}</h2>
            <p class="post-content">${object.body}</p>
        `


        postContainer.appendChild(postBox)
    });
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function updateAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function deleteAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

loadData2()