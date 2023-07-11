import { useContext } from "react";
import { UserContext } from "../../../App";
import "./MedicineShow.css";

const MedicineShow = ({ itemList, handleItemList }) => {
  const cartList = useContext(UserContext);
  // console.log(buttonList);
  // console.log(itemList);

  const handleCnt = (value, name) => {
    handleItemList(value, name);
    // console.log(cnt);
  };

  const handleAdd = (name, cost, value) => {
    cartList.handleCartList(name, cost, value);
    // setCnt(0);
    // console.log(name);
    // console.log(cost);
  };

  return (
    <>
      <center style={{ fontSize: "18px" }}>
        <div className="item-center">
          {itemList.map((item, index) => {
            return (
              <>
                <div className="item">
                  <div className="left-side">
                    <div id="self" style={{ whiteSpace: "nowrap" }}>
                      <b>{item.itemName}</b>
                    </div>
                    <div id="self">
                      <div style={{ color: "grey", whiteSpace: "nowrap" }}>
                        {item.itemDescription}
                      </div>
                      <div id="self">
                        <b style={{ color: "red" }}>Rs.{item.cost}</b>
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="amount">
                      <label htmlFor="amt">Amount</label>
                      <input
                        type="number"
                        id="amt"
                        min="1"
                        max="5"
                        value={item.value}
                        style={{
                          width: "50px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
                        onChange={(e) =>
                          handleCnt(e.target.value, item.itemName)
                        }
                      />
                    </div>
                    <div className="add">
                      <button
                        style={{
                          color: "white",
                          marginLeft: "50px",
                          width: "75px",
                          padding: "2px",
                          marginBottom: "5px",
                        }}
                        onClick={() =>
                          handleAdd(item.itemName, item.cost, item.value)
                        }
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </center>
    </>
  );
};

export default MedicineShow;
