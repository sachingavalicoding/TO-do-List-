let add = document.getElementById('btn');
let input = document.getElementById('input');
add.addEventListener('click', () => {
    let task = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = '<span> </span>' +  input.value + '<button> Remove </button>';
    task.appendChild(li);
    input.value = '';
    li.querySelectorAll('button').forEach(e => {
        e.addEventListener('click',()=>{
            task.removeChild(li);
        });
    });
    li.querySelectorAll('span').forEach(e => {
        e.addEventListener('click',()=>{
            /* e.style.backgroundColor = 'black'; */
            if(e.style.backgroundColor == 'red'){
                e.style.backgroundColor = 'white';
            }
              else{
                e.style.backgroundColor = 'red';
            } 
        });
    });
    
});
/* let body = document.querySelector('body');
body.style.backgroundColor = 'white';
 */
/* 
let  container = document.querySelector('.container');
container.addEventListener('mouseover',()=>{
    container.style.backgroundColor = '#00c700 ';
    body.style.backgroundColor = 'white';
});
container.addEventListener('mouseout',()=>{
    container.style.backgroundColor = 'white';
    body.style.backgroundColor = '#00c700 ';
}); */