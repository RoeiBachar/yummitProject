import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Cart.css";
import { CakeInterface, CakesArray } from "../../Data/cakesdata";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { decrement, increment, updateAmount } from "../../redux/counterSlice";

function Cart(): JSX.Element {
  const [cakes, setCakes] = useState<CakeInterface[]>(CakesArray);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [totalItems, setTotalItems] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const myStyle = {
    fontSize: "1.7rem",
    fontWeight: "bold",
    border: "1px solid black",
  };

  useEffect(() => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
      const cart: { [key: string]: number } = JSON.parse(myCartLocalStorage);
      setCart(cart);
      let priceSum = 0;
      let itemsSum = 0;
      cakes.map((item) => {
        console.log(cart[item.id]);
        if (cart[item.id] * item.price) {
          priceSum += cart[item.id] * item.price;
          itemsSum += cart[item.id];
        }
      });
      setTotalItems(itemsSum);
      dispatch(updateAmount(itemsSum));
      console.log(itemsSum);

      setTotalPrice(priceSum);
    } else {
      console.log("הסל ריק");
    }
  }, []);

  const countTheCart = (num: number) => {
    const myCartCountLocalStorage = localStorage.getItem("myCartCount");
    if (myCartCountLocalStorage) {
      if (num > 0) {
        const count = JSON.parse(myCartCountLocalStorage) + 1;
        localStorage.setItem("myCartCount", JSON.stringify(count));
      } else {
        const count = JSON.parse(myCartCountLocalStorage) - 1;
        localStorage.setItem("myCartCount", JSON.stringify(count));
      }
    } else {
      const count = 0;
      localStorage.setItem("myCartCount", JSON.stringify(count));
    }
  };
  const increaseCount = (id: string) => {
    const cartClone = { ...cart };
    cartClone[id]++;
    setCart(cartClone);
    dispatch(increment());

    if (localStorage.getItem("myCart")) {
      const myCartClone = JSON.stringify(cartClone);
      localStorage.setItem("myCart", myCartClone);
      countTheCart(1);
    }
  };

  const decreaseCount = (id: string) => {
    const cartClone = { ...cart };
    if (cartClone[id] - 1 >= 0) {
      cartClone[id]--;
    }
    setCart(cartClone);
    dispatch(decrement());
    if (localStorage.getItem("myCart")) {
      const myCartClone = JSON.stringify(cartClone);
      localStorage.setItem("myCart", myCartClone);
      countTheCart(-1);
    }
  };
  console.log(cart.length);
  return (
    <div className="Cart">
      <Header />
      <h1>סל קניות</h1>
      <div className="table-wrapper">
        <TableContainer component={Paper}>
          <Table style={{ textAlign: "center" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={myStyle} align="center">
                  מחיר
                </TableCell>
                <TableCell style={myStyle} align="center">
                  שם
                </TableCell>
                <TableCell style={myStyle} align="center">
                  תמונה
                </TableCell>
                <TableCell style={myStyle} align="center">
                  כמות
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cakes
                .filter((cake) => cart[cake.id])
                .map((cake) => (
                  <TableRow
                    key={cake.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 5 } }}
                  >
                    <TableCell
                      style={myStyle}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {`${cake.price}`}₪
                    </TableCell>
                    <TableCell style={myStyle} align="center">
                      {cake.name}
                    </TableCell>
                    <TableCell style={myStyle} align="center">
                      <img
                        src={cake.img}
                        style={{
                          maxWidth: "100%",
                        }}
                      />
                    </TableCell>
                    <TableCell style={myStyle} align="center">
                      <button
                        onClick={() => {
                          decreaseCount(cake.id);
                          setTotalPrice(totalPrice - cake.price);
                        }}
                        type="button"
                      >
                        -
                      </button>
                      {cart[cake.id]}
                      <button
                        type="button"
                        onClick={() => {
                          increaseCount(cake.id);
                          setTotalPrice(totalPrice + cake.price);
                        }}
                      >
                        +
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              <TableRow>
                <TableCell style={{ fontSize: "1.8rem" }} align="center">
                  {totalPrice}&#8362;
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Cart;
