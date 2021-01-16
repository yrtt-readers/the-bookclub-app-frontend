import React from 'react';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import './Checkout.css';

const element = new Map()

element.set(0,
  {
    btnConfirm: { className: 'btn btn-primary confirmCheckout' },
    carts: [{ key: 'cart.request', mode: 2 }, { key: 'cart.donate', mode: 3 }]
  }
)

function Checkout() {

  const history = useHistory()
  let initList = []

  element.get(0).carts.forEach(v => {
    (sessionStorage.getItem(v.key) != null) ? initList.push(v.mode) : null
  })

  element.get(0).btnConfirm.className =
    (initList.length == 0) ?
      'hide' : 'btn btn-primary confirmCheckout'

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary confirmCheckout')
      history.push('/shipping')
  }

  return (
    <div>
      <section className="container container-margin">
        <div className="text-center">
          <h1 className="text-center">Checkout your cart</h1>
          <button className={element.get(0).btnConfirm.className} onClick={onClickListener}>Confirm</button>
          {initList.map(v =>
            <BookList key={v} mode={v} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Checkout;