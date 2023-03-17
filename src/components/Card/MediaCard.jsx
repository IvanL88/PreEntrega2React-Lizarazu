import { Link } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function getDescription(desc){
  if (desc.length>50){
      return desc.substring(0, 49) + "...";
  }else{
      return desc;
  }
}


const MediaCard = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {getDescription(product.description)}
        </Typography>
      </CardContent>
      <CardActions>
        <p>$ {product.price}</p>
        <p>{product.category}</p>
      </CardActions>
    </Card>
    </Link>
  );
};

export default MediaCard;