document.getElementById('btn-Update').addEventListener('click' , function(){
    const inputField = document.getElementById('input-Field')
    const inputText = inputField.value;

    const p = document.getElementById('input-Text');
    p.innerText = inputText;
    inputField.value =  '';

})
