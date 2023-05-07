import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementCustom } from './redux/features/counter/counterSlice';
import { useEffect } from 'react';
import { getCountry } from './redux/features/country/countrySlice';



//redux state yönetimidir. Stateleri tek bir yerden yönetmeyi sağlar ve props kullanmadan istenilen sayfadan doğrudan çağırılmalarını sağlar 

function App() {

  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter) //bu şekilde istenilen sayfada counter ifadesi kullanılabilir

  const { country } = useSelector(state => state.country)
  

  useEffect(()=>{
    dispatch(getCountry()) //sayfa yüklendiği anda bilgileri çağır
  },[])

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>

      <span >{counter}</span>

      <span onClick={() => dispatch(increment())}>+</span>

      <span style={{color: "red"}} onClick={() => dispatch(incrementCustom(5))}>+</span>
    </div>
  );
}

export default App;
