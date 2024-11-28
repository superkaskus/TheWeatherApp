

localStorage.setItem('name', 'Fadilaa');
localStorage.setItem('hasGold', true);


let yuli = localStorage.getItem('name');
let yuli2 = localStorage.getItem('hasGold');

//console.log(yuli, yuli2)


const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'save the princess', author: 'mario'},
    {text: 'sing a song', author: 'princess'}
];

localStorage.setItem('todos', JSON.stringify(todos));

const storedData = localStorage.getItem('todos');
    console.log(storedData); 
    console.log(JSON.parse(storedData)); 



// console.log(todos);
// console.log(JSON.stringify(todos));
