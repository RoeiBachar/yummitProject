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
  const [totalItems,setTotalItems]=useState(0);
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  console.log("cart", cart);
  console.log("cakes", cakes);

  useEffect(() => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
      const cart: { [key: string]: number } = JSON.parse(myCartLocalStorage);
      setCart(cart);

      let priceSum = 0;
      let itemsSum=0;
      cakes.map((item) => {
        priceSum += cart[item.id] * item.price;
        itemsSum+= cart[item.id];
      });
      setTotalItems(itemsSum)
      dispatch(updateAmount(itemsSum))
      console.log(itemsSum);
      
      setTotalPrice(priceSum);
    } else {
      console.log("הסל ריק");
    }
  }, []);
  const increaseCount = (id: string) => {
    const cartClone = { ...cart };
    cartClone[id]++;
    setCart(cartClone);
    dispatch(increment())

    if (localStorage.getItem("myCart")) {
      const myCartClone = JSON.stringify(cartClone);
      localStorage.setItem("myCart", myCartClone);
    }
  };

  const decreaseCount = (id: string) => {
    const cartClone = { ...cart };
    if (cartClone[id] - 1 >= 0) {
      cartClone[id]--;
    }
    setCart(cartClone);
    dispatch(decrement())
    if (localStorage.getItem("myCart")) {
      const myCartClone = JSON.stringify(cartClone);
      localStorage.setItem("myCart", myCartClone);
    }
  };
  console.log(cart.length);
  return (
    <div className="Cart">
      <Header />
      <h1>סל קניות</h1>
      <div className="table-wrapper">
        <TableContainer
          component={Paper}
          style={{ width: "150vh", alignItems: "center" }}
        >
          <Table
            style={{ textAlign: "center" }}
            sx={{ minWidth: 350 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "3vh",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                  align="center"
                >
                  מחיר
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "3vh",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                  align="center"
                >
                  שם
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "3vh",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                  align="center"
                >
                  תמונה
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "3vh",
                    fontWeight: "bold",
                    border: "1px solid black",
                  }}
                  align="center"
                >
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
                      style={{ fontSize: "3vh", border: "1px solid black" }}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {`${cake.price}`}₪
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "3vh", border: "1px solid black" }}
                      align="center"
                    >
                      {cake.name}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "3vh", border: "1px solid black" }}
                      align="center"
                    >
                      <img
                        src={cake.img}
                        style={{
                          width: "10vh",
                          maxWidth: "100%",
                          height: "10vh",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "3vh", border: "1px solid black" }}
                      align="center"
                    >
                      {" "}
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
                <TableCell style={{ fontSize: "4vh" }} align="center">
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
