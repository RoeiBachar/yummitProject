import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Cart.css";
import { cakesdataInterface } from "../../Data/cakesdata";
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
  const [getData, setData] = useState<cakesdataInterface[]>();
  const [getCopyData, setCopyData] = useState<cakesdataInterface[]>();

  useEffect(() => {
    const data = localStorage.getItem("myCart");
    if (data) {
      setData(JSON.parse(data));
      const newData=JSON.parse(data);
      newData.map(item=>{})
      const mydata={...newData, counter:  newData.map((item:cakesdataInterface)=>countMyObject(newData,item))}
      console.log(mydata)
    } else {
      console.log("הסל ריק");
    }
  },[]);

  const countMyObject = (myArray: cakesdataInterface[], myObject: cakesdataInterface) =>
  myArray.filter(obj =>  obj.name === myObject.name).length;
  
  
  
  return (
    <div className="Cart">
      <Header />
      <h1>סל קניות</h1>
      <div className="table-wrapper">
        <TableContainer
          component={Paper}
          style={{ width: "150vh", alignItems: "center" }}
        >
          <Table sx={{ minWidth: 350, }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:"3vh"}}>Dessert (100g serving)</TableCell>
                <TableCell style={{fontSize:"3vh"}} align="right">שם</TableCell>
                <TableCell style={{fontSize:"3vh"}} align="right">תמונה</TableCell>
                <TableCell style={{fontSize:"3vh"}} align="right">מחיר</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getData &&
                getData.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{fontSize:"3vh"}} component="th" scope="row">
                     
                    </TableCell>
                    <TableCell style={{fontSize:"3vh"}} align="right">{item.name}</TableCell>
                    <TableCell style={{fontSize:"3vh"}} align="right">
                      <img src={item.img} width={"353vh"} height={"205vh"}/>
                    </TableCell>
                    <TableCell style={{fontSize:"3vh"}} align="right">{`${item.price}`}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Cart;
