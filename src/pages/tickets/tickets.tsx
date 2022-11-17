import Header from "../../components/header/header";
import { Nav } from "./style";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

export default function Ticket() {
  return (
    <>
      <Header />
      <Nav>
        <div className="return">
          <Link to={`/home`}>
            <BiChevronLeft className="return-icon" />
          </Link>
        </div>
        <div className="title">
          <h1>Tickets</h1>
        </div>
      </Nav>
    </>
  );
}
