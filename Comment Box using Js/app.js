document.getElementById('comment-btn').addEventListener('click', function(){
    const inputField = document.getElementById('text-box');
    const inputText = inputField.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = inputText;
    p.style.backgroundColor = '#A2FF86';
    p.style.color = '#fff';
    p.style.padding = '12px';
    p.style.margin = '10px 0px';
    p.style.borderRadius = '5px';
    p.style.fontFamily = 'sans-serif';
    commentContainer.appendChild(p);
    inputField.value = '';
});

