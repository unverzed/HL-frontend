import Header from "../../components/header/header";
import { BiChevronLeft } from "react-icons/bi";
import { Nav, AllLocals } from "./style";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";

export default function Local() {
  const { id } = useParams();
  const [locals, setLocals] = useState<any>({});
  const { token } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderLocals();
  }, []);

  function renderLocals() {
    const promise = axios.get(`${URL}/allplaces/${id}`, config);
    promise.then((response) => {
      console.log(response);
      setLocals(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function deleteLocals() {
    const promise = axios.delete(`${URL}/places/${id}`, config);

    promise.then((response) => {
      console.log(response);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return Object.keys(locals).length > 0 ? (
    <>
      <Header />
      <Nav>
        <div className="return">
          <Link to={`/home`}>
            <BiChevronLeft className="return-icon" />
          </Link>
        </div>
        <div className="title">
          <h1>Locais</h1>
        </div>
      </Nav>
      <AllLocals>
        <div className="card">
          <div className="head-card">
            <BsTrashFill onClick={deleteLocals} className="trash" />
          </div>
          <p>{locals.placesName}</p>
          <p>{locals.CEP}</p>
          <p>{locals.neighborhood}</p>
          <p>{locals.street}</p>
          <p>{locals.number}</p>
          <p>{locals.city}</p>
          <p>{locals.state}</p>
        </div>
      </AllLocals>
    </>
  ) : (
    <></>
  );
}
