import logo from './logo.svg';
import './App.css';
import Cart from './component/cart/Cart';

function App() {
  const items = [
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' },
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' },
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' },
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' },
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' },
    { name: 'first icon', description: 'alsdjflfjl ldfjlsdjfl lsdfjldsjfalsdjf lsdkfjldsjfk', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG' }
  ]
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        items.map(item => <Cart
          item={item}
        ></Cart>)
      }
    </div>
  );
}

export default App;
