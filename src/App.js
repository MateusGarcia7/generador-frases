
import './App.css';
import { useState } from 'react';
import quotes from './quotes.json';
import QuoteBox from './componentes/QuoteBox';



function App() {
const colors =["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"] 
const [ cita, setQuotexBox] = useState(quotes[citaAleatoria(quotes.length)]);
const [ background, setBackground] = useState (colors[citaAleatoria(colors.length)]);

const aleatorio = () => { setQuotexBox(quotes[citaAleatoria(quotes.length)]); setBackground(colors[citaAleatoria(colors.length)])}

  return (
    
    <div className='app' style={{background}}>
      <QuoteBox
      quote={cita.quote}
      author={cita.author}
      cambiarcita={aleatorio}
      color={background}
       />
      </div> 
  );
}

const citaAleatoria = max => Math.floor (Math.random() * max);
export default App;
