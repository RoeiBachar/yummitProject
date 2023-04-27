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

function Cart(): JSX.Element {
  const [cakes, setCakes] = useState<CakeInterface[]>(CakesArray);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  console.log("cart", cart);
  console.log("cakes", cakes);

  useEffect(() => {
    const myCartLocalStorage = localStorage.getItem("myCart");
    if (myCartLocalStorage) {
      const cart: { [key: string]: number } = JSON.parse(myCartLocalStorage);
      setCart(cart);
      let sum = 0;
      cakes.map((item) => (sum += cart[item.id] * item.price));
      setTotalPrice(sum);
    } else {
      console.log("הסל ריק");
    }
  }, []);
  const countMyObject = (myArray: CakeInterface[], myObject: CakeInterface) =>
    myArray.filter((obj) => obj.id === myObject.id).length;

  const increaseCount = (id: string) => {
    const cartClone = { ...cart };
    cartClone[id]++;
    setCart(cartClone);
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
    if (localStorage.getItem("myCart")) {
      const myCartClone = JSON.stringify(cartClone);
      localStorage.setItem("myCart", myCartClone);
    }
  };

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
                  style={{ fontSize: "3vh", fontWeight: "bold" ,border:"1px solid black"}}
                  align="center"
                >
                  מחיר
                </TableCell>
                <TableCell
                  style={{ fontSize: "3vh", fontWeight: "bold" ,border:"1px solid black"}}
                  align="center"
                >
                  שם
                </TableCell>
                <TableCell
                  style={{ fontSize: "3vh", fontWeight: "bold" ,border:"1px solid black"}}
                  align="center"
                >
                  תמונה
                </TableCell>
                <TableCell
                  style={{ fontSize: "3vh", fontWeight: "bold" ,border:"1px solid black"}}
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
                    sx={{ "&:last-child td, &:last-child th": { border:5 } }}
                    
                  >
                    <TableCell
                      style={{ fontSize: "3vh",border:"1px solid black" }}
                      component="th"
                      scope="row"
                      align="center"
                      
                    >
                      {`${cake.price}`}₪
                    </TableCell>
                    <TableCell style={{ fontSize: "3vh",border:"1px solid black" }} align="center">
                      {cake.name}
                    </TableCell>
                    <TableCell style={{ fontSize: "3vh",border:"1px solid black" }} align="center">
                      <img src={cake.img} width={"353vh"} height={"205vh"} />
                    </TableCell>
                    <TableCell style={{ fontSize: "3vh",border:"1px solid black" }} align="center">
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
