import React from 'react';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import './Checkout.css';

function Checkout() {

  const history = useHistory()

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary confirmCheckout')
      history.push('/shipping');
  }

  return (
    <div>
      <section className="container container-margin">
        <div className="text-center">
          <h1 className="text-center">Checkout your cart</h1>
          <button className='btn btn-primary confirmCheckout' onClick={onClickListener}>Confirm</button>
          <BookList mode={2} />
          <BookList mode={3} />
        </div>
      </section>
    </div>
  );
}

export default Checkout;