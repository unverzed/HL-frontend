import Header from "../../components/header/header";
import { Nav } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useEffect, useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export default function Ticket() {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token === "") {
      navigate("/");
    }
  }, []);

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
