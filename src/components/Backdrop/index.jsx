import classes from "./style.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onCancel} />;
}

export default Backdrop;
