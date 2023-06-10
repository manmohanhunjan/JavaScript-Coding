const addToCart = document.querySelector('#btnAddToCart');
let count = 0;

addToCart.addEventListener('click', ()=>{
    const tbody = document.querySelector('#tbody');
    fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((json) => render(json));

  const render = (json) => {
    const tr = document.createElement('tr');
    const td = [];
    for(let i = 0; i < 4; i++){
        td[i] = document.createElement('td');
    }
    td[0].textContent = json[count].id;
    td[1].textContent = json[count].name;
    td[2].textContent = json[count].email;
    td[3].textContent = json[count].body;

    for(let i = 0; i < 4; i++){
        tr.appendChild(td[i]);
    }

    tbody.appendChild(tr);
    count++;
    
  }
})