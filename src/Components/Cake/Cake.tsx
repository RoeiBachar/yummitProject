import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./Cake.css";
import { cakesdataInterface } from "../../Data/cakesdata";
import { json } from "node:stream/consumers";

function Cake( props:cakesdataInterface): JSX.Element {
    const addToLocalStorage=()=>{
        const checkingLS = localStorage.getItem("myCart");
        if(checkingLS){
            const array=JSON.parse(checkingLS);
            array.push(props);
            localStorage.setItem("myCart",JSON.stringify(array))

        }
        else{
            const array=[];
            array.push(props)
            localStorage.setItem("myCart",JSON.stringify(props))
        }

    }
    console.log(props)
    return (
        <div className="Cake">
            
			 <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={props.img}
        title="green iguana"
    
      />
      <CardContent style={{ textAlign: 'center', backgroundColor: "transparent"}}>
        <Typography gutterBottom variant="h5" component="div" style={{fontSize:"40px"}}>
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontSize:"20px"  }}>
          {`${props.price}`}&#8362;

        </Typography>
      </CardContent>
      <CardActions style={{ alignItems: 'center' }}>
        <Button size="small" onClick={addToLocalStorage}>הזמן</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    );
}

export default Cake;
