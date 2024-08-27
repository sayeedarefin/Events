document.getElementById('text-Delete').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-Delete');

    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled' ,true);

    }
    document.getElementById('btn-Delete').addEventListener('click' , function(){
        const deleted = document.getElementById('event-Handler');
        deleted.style.display='none';
        const empty = document.getElementById('text-Delete');
        empty.value = ' ';
        // const inputField = document.getElementById('text-Delete');
        // const inputText = inputField.value;

        
    })
    //event handling part

    // const changedText = document.getElementById('event-Handler');
    // changedText.innerText = "Your Repository has been successfully deleted!";
})
function changeOnClick(){
    const changedText = document.getElementById('event-Handler-1');
    changedText.innerText = "Your Repository has been successfully deleted!";
}
