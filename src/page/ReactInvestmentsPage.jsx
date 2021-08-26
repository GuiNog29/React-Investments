import Header from '../components/Header';
import Main from '../components/Main';
import Investments from '../components/Investments';
import Investment from '../components/Investment';
import { useEffect, useState } from 'react';
import { apiGetBackend } from '../data/api';
import Loading from '../components/Loading';

export default function App() {
  const [backend, setBackend] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBackend(apiGetBackend());

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header>React - Investiments</Header>

      <Main>
        <div>
          <Investments>
            {backend.map(item =>{
              return <Investment key={item.id}>{item}</Investment>
            })}
          </Investments>
        </div>
      </Main>
    </>
  );
}
