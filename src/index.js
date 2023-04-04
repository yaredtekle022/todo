const list = document.getElementById('list');
const LIST = [
  {

    description: 'desc1',
    completed: true,
    index: 0,

  },

  {
    description: 'desc2',
    completed: true,
    index: 1,
  },

  {
    description: 'desc3',
    completed: true,
    index: 2,
  },
];
const lists = () => {
  for (let i = 0; i < LIST.length; i += 1) {
    const text = `<li class="item">
<div class="ip">
<i class="fa-regular fa-square"></i>
<p class = "text">${LIST[i].description} </p>
</div>
<i class = "fa fa-trash-o de"</i>
</li>`;

    const position = 'beforeend';
    list.insertAdjacentHTML(position, text);
  }
};
window.document.addEventListener('DOMContentLoaded', lists);