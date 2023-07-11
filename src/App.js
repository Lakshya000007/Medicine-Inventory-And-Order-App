import "./App.css";
import Header from "./components/Header/Header.jsx";
import MedicineBuy from "./components/Header/Medicines/MedicineBuy.jsx";
import MedicineShow from "./components/Header/Medicines/MedicineShow.jsx";
import { createContext, useState } from "react";
import Cart from "./components/Header/Cart/Cart";
import Modal from "./components/Header/Modal/Modal";

export const UserContext = createContext();

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartCnt, setCartCnt] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const [itemList, setItemList] = useState([
    {
      itemName: "Paracetamol",
      itemDescription: "Used to treat Fever",
      cost: 20,
      value: 0,
      added: false,
    },
    {
      itemName: "Dolo",
      itemDescription: "Used to treat Serious Fever",
      cost: 50,
      value: 0,
      added: false,
    },
    {
      itemName: "Avil",
      itemDescription: "Used to treat Bacterial Infections",
      cost: 10,
      value: 0,
      added: false,
    },
    {
      itemName: "Corex",
      itemDescription: "Cough Syrup",
      cost: 40,
      value: 0,
      added: false,
    },
    {
      itemName: "Dettol",
      itemDescription: "Antiseptic Lotion",
      cost: 70,
      value: 0,
      added: false,
    },
  ]);

  const addItemList = (name, desc, cost) => {
    const objIndex = itemList.findIndex((obj) => obj.itemName === name);
    if (objIndex === -1) {
      setItemList([
        ...itemList,
        {
          itemName: name,
          itemDescription: desc,
          cost: cost,
          value: 0,
          added: false,
        },
      ]);
    } else {
      alert("Medicine Already Present!!!");
    }
  };

  const handleItemList = (value, name) => {
    const objIndex = itemList.findIndex((obj) => obj.itemName === name);
    itemList[objIndex].value = Number(value);

    setItemList([...itemList]);
  };

  console.log(itemList);

  const [cartList, setCartList] = useState([]);

  const handleCartList = (newItem, cost, value) => {
    if (value > 0 && value < 6) {
      const objIndex = itemList.findIndex((obj) => obj.itemName === newItem);
      if (itemList[objIndex].added === false) {
        itemList[objIndex].added = true;
        const newCost = Number(value) * Number(cost) + Number(totalCost);
        setTotalCost(newCost);
        const productCost = Number(cost) * Number(value);
        setCartList([
          ...cartList,
          {
            name: newItem,
            count: value,
            id: Math.random().toString(),
            cost: cost,
            productCost: productCost,
          },
        ]);
        const newCnt = Number(cartCnt) + Number(value);
        setCartCnt(newCnt);
      } else {
        alert("Same Item cannot be added twice");
      }
    } else {
      alert("Maximum 5 items and minimum 1 item is Allowed!");
    }

    // console.log(cartList);
    // console.log(newItem);
  };
  // console.log(cartList);

  // console.log(cartCnt);

  const handleAdd = (name, value, cost, itemCost) => {
    handleItemList(value, name);

    const newCost = Number(cost) + Number(totalCost);
    setTotalCost(newCost);

    const objIndex = cartList.findIndex((obj) => obj.name === name);
    cartList[objIndex].count = Number(value);
    cartList[objIndex].productCost = Number(itemCost) + Number(cost);

    setCartList([...cartList]);
    setCartCnt(cartCnt + 1);
  };

  const handleReduce = (name, value, cost, itemCost) => {
    handleItemList(value, name);

    const newCost = Number(totalCost) - Number(cost);
    setTotalCost(newCost);

    const objIndex = cartList.findIndex((obj) => obj.name === name);
    cartList[objIndex].count = Number(value);
    cartList[objIndex].productCost = Number(itemCost) - Number(cost);

    setCartList([...cartList]);
    setCartCnt(cartCnt - 1);
  };

  const handleDelete = (name, value, cost, itemCost) => {
    handleItemList(0, name);

    const newCost = Number(totalCost) - Number(itemCost);
    setTotalCost(newCost);

    const objIndex = cartList.findIndex((obj) => obj.name === name);
    cartList[objIndex].count = 0;
    cartList[objIndex].productCost = 0;
    cartList.splice(objIndex, 1);

    setCartList([...cartList]);

    const newObjIndex = itemList.findIndex((obj) => obj.itemName === name);
    itemList[newObjIndex].added = false;
    setCartCnt(cartCnt - value);
  };

  const handleCartShow = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={showCart && "container"}>
      <UserContext.Provider
        value={{ cartList: cartList, handleCartList: handleCartList }}
      >
        <Header handleCartShow={handleCartShow} cartCnt={cartCnt} />
        <MedicineBuy addItemList={addItemList} />
        <MedicineShow itemList={itemList} handleItemList={handleItemList} />
        <Modal>
          <Cart
            showCart={showCart}
            handleCartShow={handleCartShow}
            totalCost={totalCost}
            handleAdd={handleAdd}
            handleReduce={handleReduce}
            handleDelete={handleDelete}
          />
        </Modal>
      </UserContext.Provider>
    </div>
  );
}

export default App;
