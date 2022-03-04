import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    // maxWidth: '100%',
    color: 'white',
    backgroundColor:'#c0c0c0',
  },
  media: {
    height: 0,
    width:"100%",
    paddingTop: '90.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },
  addShoppingCart : {
    color: 'white',
  }
}));
