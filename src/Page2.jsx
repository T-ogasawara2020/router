import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/Page2/100">URL Parameter</Link>
      <br />
      <Link to="/Page2/999/?name=hogehoge">QueryParameter</Link>
    </div>
  );
};
