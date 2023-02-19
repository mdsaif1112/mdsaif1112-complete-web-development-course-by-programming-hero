const commentField = document.getElementById('comment-area')
const comments = document.getElementById('comments');
const submitBtn = document.getElementById('submit');

commentField.addEventListener('keyup', function(e){
    if(e.code === 'Enter'){
        addComment()
    }
})

submitBtn.addEventListener('click', addComment)

function addComment() {
    const newComment = document.createElement('h1')
    newComment.innerText = commentField.value

    comments.appendChild(newComment)
    commentField.value = '';
}