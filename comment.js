// step-1 : get the button by id using event listener

document.getElementById('btn-Submit').addEventListener('click' , function(){
    //step-2 : get the comment inside the text area and store it in a const

    const commentBox=document.getElementById('new-Comment');

    //step-3 :specify the newComment to the value of commentBox
    const newComment = commentBox.value;

    //step-4 :set the comment inside the comment-Container

        // 1. get the comment-Container
            const commentContainer= document.getElementById('comment-Container');

        // 2. create a new element ( p tag )
            const p = document.createElement('p');

        // 3. set the text of the comment as inner text of p tag
            p.innerText = newComment;

        // 4. add the p tag in the comment-Container using appendChild

            commentContainer.appendChild(p);

    //step-5 : clear the comment area
        commentBox.value = ` `;
})