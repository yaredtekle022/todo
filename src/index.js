import enterImage from '../asset/enter.svg';

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
<div class="svg">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
</div>
</li>

`;

    const position = 'beforeend';
    list.insertAdjacentHTML(position, text);
  }
};

const loadAssets = () => {
  const imgContainer = document.querySelector('.content .img img');
  imgContainer.src = enterImage;
  lists();
};
function removeAllTrashIcons() {
  const items = document.querySelectorAll('.item');

  if (items.length) {
    items.forEach((item) => {
      const svg = item.querySelector('.svg');
      svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>`;
    });
  }
}
window.document.addEventListener('DOMContentLoaded', loadAssets);
list.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    removeAllTrashIcons();
    const svg = e.target.querySelector('.svg');
    svg.innerHTML = '<i class="fas fa-trash"></i>';
  } else if (e.target.tagName === 'P') {
    removeAllTrashIcons();
    const svg = e.target.parentElement.nextElementSibling;
    svg.innerHTML = '<i class="fas fa-trash"></i>';
  }
});
