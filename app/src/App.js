import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

function App() {
  const cardData = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className='container'>
      <Navbar />
      <section className='card__lists'>{cardData}</section>
    </div>
  );
}

export default App;
