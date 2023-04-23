import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./Cake.css";

function Cake(): JSX.Element {
    return (
        <div className="Cake">
            
			 <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 340 }}
        image="https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png"
        title="green iguana"
    
      />
      <CardContent style={{ textAlign: 'center', backgroundColor: "transparent"}}>
        <Typography gutterBottom variant="h5" component="div" style={{fontSize:"40px"}}>
        שוקולד
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontSize:"20px"  }}>
          360&#8362;

        </Typography>
      </CardContent>
      <CardActions style={{ alignItems: 'center' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    );
}

export default Cake;
