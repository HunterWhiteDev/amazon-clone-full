// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
// function Subtotal() {
//   return (
//     <div className="Subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal (0 items): <strong>0</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox">This order contains a gift</input>
//             </small>
//           </>
//         )}
//       />
//     </div>
//   );
// }

// export default Subtotal;
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick="{}">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
