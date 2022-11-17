import Header from "../../components/header/header";
import { RespCard, Nav, RespPage } from "./style";
import { BiChevronLeft } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ErrorBoundary from "../../components/errorComponent";

export default function ResponsiblePage() {
  const { id } = useParams();
  const [responsibles, setResponsibles] = useState<any[]>([]);
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

  return (
    <>
      <Header />
      <ErrorBoundary>
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
          {responsibles.map((responsible) => {
            return <></>;
          })}
        </RespPage>
      </ErrorBoundary>
    </>
  );
}
