import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PathwayCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="/pathway_graph.png"
        alt="pathway"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pathway XY
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pathway XY ... Lorem ipsum
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default PathwayCard
