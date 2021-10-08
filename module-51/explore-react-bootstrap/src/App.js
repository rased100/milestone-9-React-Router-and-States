import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=3d0e91d42c884418b7c50e46ca19ce50')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
    </div>
  );
}

export default App;
