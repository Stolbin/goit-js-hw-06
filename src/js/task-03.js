const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.flexDirection = 'column';
gallery.style.alignItems = 'center';
gallery.style.paddingTop = '5px';
gallery.style.listStyle = 'none';

// TODO 1.

const makeImageItem = ({url, alt}) => {
  const imgItem = document.createElement('li');
  const picture = document.createElement('img');
  picture.src = url;
  picture.alt = alt;
  picture.style.width = '400px';
  picture.style.boxShadow = '7px 2px 5px #ccc';

  imgItem.append(picture)

  return imgItem
};
const els = images.map(makeImageItem);
gallery.append(...els)

// TODO 2.

const imgItems = images
  .map(images => 
    `<li>
    <img
    src="${images.url}";
    alt="${images.alt}";
    width = '400px';
    //! box-shadow: 7px 2px 5px #ccc;
    >
  </li>`)
  .join("");
  gallery.insertAdjacentHTML("beforeend", imgItems);


  //! Питання:
  //? Чому я не можу задати всім картинкам тінь, що я не так роблю?
  //? І при створенні img вище по коду, прописую, теж не спрацьовує
  //? Спробував 2 варіанти і щось пішло не так, один варінт вище, виділенний червоним, другий нижче:

  // const imgShadow = document.querySelectorAll('.pictureImg')
  // imgShadow.style.boxShadow = '10px 10px 5px #ccc';