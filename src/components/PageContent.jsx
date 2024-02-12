import classes from './PageContent.module.css'
const PageContent = ({ title, children }) => {
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
