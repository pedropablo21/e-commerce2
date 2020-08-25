//rfc
import React from "react";
import CartItem from "./CartItem";

//Código para cargar la lista de productos que recibe el carrito
export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
