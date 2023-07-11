import { useContext } from "react";
import "./Cart.css";
import { UserContext } from "../../../App";

const Cart = ({
  showCart,
  handleCartShow,
  totalCost,
  handleAdd,
  handleReduce,
  handleDelete,
}) => {
  const cartItemList = useContext(UserContext);

  const handlePlus = (name, value, cost, productCost) => {
    if (Number(value) < 5) {
      value = Number(value) + 1;
      handleAdd(name, value, cost, productCost);
    } else {
      alert("Not more than 5 item allowed! ");
    }
  };

  const handleMinus = (name, value, cost, productCost) => {
    if (Number(value) > 1) {
      value = Number(value) - 1;
      handleReduce(name, value, cost, productCost);
    } else {
      alert("Minimum 1 item allowed! ");
    }
  };

  const handleRemove = (name, value, cost, productCost) => {
    handleDelete(name, value, cost, productCost);
  };

  const closeCartShow = () => {
    handleCartShow();
  };

  // name: newItem,
  // count: value,
  // id: Math.random().toString(),
  // cost: cost,
  // productCost: productCost,

  if (showCart) {
    return (
      <>
        <div className="cart-overlay">
          {cartItemList.cartList.map((item) => {
            return (
              <>
                <div>
                  <b>{item.name}</b>
                  <div>
                    <button
                      style={{ backgroundColor: "blue", width: "40px" }}
                      onClick={() =>
                        handlePlus(
                          item.name,
                          item.count,
                          item.cost,
                          item.productCost
                        )
                      }
                    >
                      +
                    </button>
                    <button
                      style={{
                        backgroundColor: "blue",
                        width: "40px",
                        marginLeft: "10px",
                      }}
                      onClick={() =>
                        handleMinus(
                          item.name,
                          item.count,
                          item.cost,
                          item.productCost
                        )
                      }
                    >
                      -
                    </button>

                    <button
                      style={{
                        backgroundColor: "orange",
                        width: "200px",
                        marginLeft: "40px",
                        fontSize: "18px",
                      }}
                      onClick={() =>
                        handleRemove(
                          item.name,
                          item.count,
                          item.cost,
                          item.productCost
                        )
                      }
                    >
                      Remove From Cart
                    </button>

                    <span style={{ marginLeft: "10%", color: "red" }}>
                      {item.cost}{" "}
                      <small>
                        - <span style={{ color: "blue" }}>x{item.count}</span>
                      </small>
                    </span>

                    <b style={{ marginLeft: "10%", color: "red" }}>
                      {item.productCost.toFixed(2)}
                    </b>
                  </div>
                </div>
                <hr
                  style={{
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "red",
                  }}
                />
              </>
            );
          })}

          <div className="cart-amt">
            <b>Total Amount</b>
            <b>{Number(totalCost).toFixed(2)}Rs.</b>
          </div>
          <div className="order-cancel">
            <button
              style={{ backgroundColor: "grey", marginRight: "10px" }}
              onClick={closeCartShow}
            >
              Close
            </button>
            <button style={{ backgroundColor: "brown" }}>Order</button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
