import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "green",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    marginTop:"100px"
  },
}));

const Loader = ({ show }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={show}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;