import React from 'react';
import { useHistory } from "react-router-dom";
import BookList from '../../components/BookList/BookList';
import Dropdown from 'react-bootstrap/Dropdown';
//import FormControl from 'react-bootstrap/Form';

const element = new Map()

element.set(0,
  {
    btnConfirm: { className: 'btn btn-primary confirmCheckout' },
    // carts: [{ key: 'cart.request', mode: 2 }, { key: 'cart.donate', mode: 3 }]
  }
)

// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
// const CustomMenu = React.forwardRef(
//   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//     const [value, setValue] = useState('');

//     return (
//       <div
//         ref={ref}
//         style={style}
//         className={className}
//         aria-labelledby={labeledBy}
//       >
//         <FormControl
//           autoFocus
//           className="mx-3 my-2 w-auto"
//           placeholder="Type to filter..."
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <ul className="list-unstyled">
//           {React.Children.toArray(children).filter(
//             (child) =>
//               !value || child.props.children.toLowerCase().startsWith(value),
//           )}
//         </ul>
//       </div>
//     );
//   },
// );
// as={CustomToggle}
// as={CustomMenu}

function DonateCheckout() {

  const history = useHistory()
  // let initList = []

  // const mode = sessionStorage.getItem(mode);

  // element.get(0).carts.forEach(v => {
  //   (sessionStorage.getItem(v.key) != null) ? initList.push(v.mode) : null
  // })

  // element.get(0).btnConfirm.className =
  //   (initList.length == 0) ?
  //     'hide' : 'btn btn-primary confirmCheckout'

  function onClickListener(e) {
    if (e.target.className === 'btn btn-primary confirmCheckout')
      history.push('/confirm-donation');
  }

  return (
    <div>
      <section className="container container-margin">
        <div>
          <h2>Please select a drop off location and confirm that you wish to donate the following books:</h2>
          
          {/* {initList.map(v =>
            <BookList key={v} mode={v} />
          )} */}
          <BookList key={3} mode={3} />
        </div>
        
        <div>
          <h3>Drop off location:</h3>
          <Dropdown> 
            <Dropdown.Toggle id="dropdown-custom-components">
              Regions - Post Code
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Region 1 - Postal Code</Dropdown.Item>
              <Dropdown.Item eventKey="2">Region 2 - Postal Code</Dropdown.Item>
              <Dropdown.Item eventKey="3">Region 3 - Postal Code</Dropdown.Item>
              <Dropdown.Item eventKey="1">Region 4 - Postal Code</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
        <button className={element.get(0).btnConfirm.className} onClick={onClickListener}>Confirm</button>     
      </section>
    </div>
  );
}

export default DonateCheckout;