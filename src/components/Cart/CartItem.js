//rfc
import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { decrement, increment, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      {/*----------------------Columna N° 1-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      {/*----------------------Columna N° 2-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <span className="d-lg-none">product:</span> {title}
      </div>
      {/*----------------------Columna N° 3-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <span className="d-lg-none">price: $</span>
        {price}
      </div>
      {/*----------------------Columna N° 4-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 mt-4">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1 mt-4"
              onClick={() => decrement(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1 mt-4">{count}</span>
            <span
              className="btn btn-black mx-1 mt-4"
              onClick={() => increment(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/*----------------------Columna N° 5-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/*----------------------Columna N° 6-----------------------------*/}
      <div className="col-10 mx-auto col-lg-2 mt-4">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
}
