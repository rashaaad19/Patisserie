import classes from "./Input.module.css";
const Textarea = ({ id, label, ...props }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={id} {...props} />
    </div>
  );
};

export default Textarea;
