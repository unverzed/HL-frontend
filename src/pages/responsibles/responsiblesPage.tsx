import Header from "../../components/header/header";
import { RespCard, Nav, RespPage, AllLocals } from "./style";
import { BiChevronLeft } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";
import FooterBar from "../../components/footer/footer";
import Locals from "../../components/locals/locals";

export default function ResponsiblePage() {
  const { id } = useParams();
  const [responsibles, setResponsibles] = useState<any>({});
  const [addLocals, setAddLocals] = useState(false);
  const { token } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderResponsible();
  }, []);

  function renderResponsible() {
    const promise = axios.get(`${URL}/responsibles/${id}`, config);
    promise.then((response) => {
      console.log(response);
      setResponsibles(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
    
  }

  function formLocals() {
    setAddLocals(true);
  }

  return Object.keys(responsibles).length > 0 ? (
    <>
      <Header />

      <RespPage>
        <Nav>
          <div className="return">
            <Link to={`/company/${id}`}>
              <BiChevronLeft className="return-icon" />
            </Link>
          </div>
          <div className="title">
            <h1>Responsável</h1>
          </div>
        </Nav>
        <RespCard>
          <div className="card">
            <div className="head-card">
              <BsTrashFill className="trash" />
            </div>
            <p>{responsibles.name}</p>
            <p>{responsibles.phone}</p>
            <p>{responsibles.CEP}</p>
          </div>
        </RespCard>

        <div className="locals">
          <h2>Locais:</h2>
          <button onClick={formLocals}>+</button>
        </div>
        <AllLocals>{addLocals === true ? <Locals /> : <></>}</AllLocals>
      </RespPage>
      <FooterBar />
    </>
  ) : (
    <></>
  );
}
