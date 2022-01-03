import React from 'react';

const QuoteBox = ({ quote,author,cambiarcita,color }) => {
    return (
      <div className='cita'>
          <p style={{color}}>{quote}</p>
          <p className='autor'  style={{color}}>{author}</p>
      <button onClick={cambiarcita} className='boton'  style={{color}}> <i class="fas fa-angle-right"></i> </button>
          
      </div>
    );
};

export default QuoteBox;

 