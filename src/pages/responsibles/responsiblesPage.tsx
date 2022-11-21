import Header from "../../components/header/header";
import { RespCard, Nav, RespPage, AllLocals, LocalCard } from "./style";
import { BiChevronLeft } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import FooterBar from "../../components/footer/footer";
import Locals from "../../components/locals/locals";

export default function ResponsiblePage() {
  const { id } = useParams();
  const [responsibles, setResponsibles] = useState<any>({});
  const [locals, setLocals] = useState<any[]>([]);
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
      
      setResponsibles(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    renderLocals();
  }, );

  function renderLocals() {
    const promise = axios.get(`${URL}/allplaces/${id}`, config);
    promise.then((response) => {
      setLocals(response.data);
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
            <p>{responsibles.name}</p>
            <p>{responsibles.phone}</p>
            <p>{responsibles.CEP}</p>
          </div>
        </RespCard>

        <div className="locals">
          <h2>Locais:</h2>
          <button onClick={formLocals}>+</button>
        </div>
        <AllLocals>{addLocals === true ? <Locals /> : (<>
            {locals.map((local, i) => {
                while (i <= 5) {
                  return (
                    <>
                      <Link className="link" to={`/places/${local.placesId}`}>
                        <LocalCard key={local.responsibleId}>
                          <p>Nome: {local.placesName}</p>
                          <p>CEP: {local.CEP}</p>
                        </LocalCard>
                      </Link>
                    </>
                  );
                }
              })}
          </>)}
          </AllLocals>
      </RespPage>
      <FooterBar />
    </>
  ) : (
    <></>
  );
}
