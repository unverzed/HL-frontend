import { Footer } from "./style";
import { Link } from "react-router-dom";

export default function FooterBar() {
  return (
    <Footer>
      <Link to={`/tickets`}>
        <h1>Tickets</h1>
      </Link>
    </Footer>
  );
}
