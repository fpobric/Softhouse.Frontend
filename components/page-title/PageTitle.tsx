interface iPageTitle {
  classes?: string;
  text?: string | null;
  size?: string;
}

const PageTitle = ({ classes, text, size }: iPageTitle) => {
  switch (size) {
    case "h1":
      return <h1 className={classes}>{text}</h1>;
    case "h2":
      return <h2 className={classes}>{text}</h2>;
    default:
      return <h3 className={classes}>{text}</h3>;
  }
};

export default PageTitle;
