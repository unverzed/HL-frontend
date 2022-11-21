import Header from "../../components/header/header";
import FooterBar from "../../components/footer/footer";
import { Main, Form, AllCompanies, Company } from "./style";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { GiCancel } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Home() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [description, setDescription] = useState("");
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [haveCompany, setHaveCompany] = useState(false);
  const { token } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if(token === ""){
      navigate("/");
    }
  }, []);

  function cancelForm() {
    setForm(false);
    setHaveCompany(true);
  }

  function createCompany(event: any) {
    event.preventDefault();
    setForm(true);
    setHaveCompany(false);

    const data = { name, CNPJ, description };
    const promise = axios.post(`${URL}/company`, data, config);
    promise.then((response) => {
      setName("");
      setCNPJ("");
      setDescription("");
    });
    promise.catch((error) => {
      console.log(error);
    });
    promise.finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    renderCompanies();
  }, []);

  function renderCompanies() {
    const promise = axios.get(`${URL}/company`, config);
    promise.then((response) => {
      setHaveCompany(true);
      setCompanies(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <Main>
        <div className="create-company">
          <h1>Empresas</h1>
          <button onClick={createCompany}>+</button>
        </div>
        {haveCompany ? (
          <AllCompanies>
            {companies.map((company) => {
              return (
                <Link className="link" to={`/company/${company.id}`}>
                  <Company key={company.id}>
                    <h2>{company.name}</h2>
                    <h3>{company.CNPJ}</h3>
                    <h4>{company.description}</h4>
                  </Company>
                </Link>
              );
            })}
          </AllCompanies>
        ) : (
          <div className="loading">
              <ThreeDots color="white"/>
            </div>
        )}
        {form === true ? (
          <div className="company">
            <Form onSubmit={createCompany}>
              <div className="top-form">
                <GiCancel className="cancel" onClick={cancelForm} />
              </div>
              <input
                className="name"
                type="text"
                placeholder="Nome"
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
              <input
                type="text"
                placeholder="CNPJ"
                disabled={loading}
                value={CNPJ}
                onChange={(e) => setCNPJ(e.target.value)}
                required
              ></input>
              <input
                className="description"
                type="text"
                placeholder="Descrição"
                disabled={loading}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              <button className="submit-company">Cadastrar empresa</button>
            </Form>
          </div>
        ) : (
          <></>
        )}
      </Main>
      <FooterBar/>
    </>
  );
}
