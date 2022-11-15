import Header from "../../components/header/header";
import { Main, Form } from "./style";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { GiCancel } from "react-icons/gi";

export default function Home() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  function cancelForm(){
    setForm(false);
  }

  function createCompany(event: any) {
    event.preventDefault();
    setForm(true);

    const data = { name, CNPJ, description };
    const promise = axios.post(`${URL}/company`, data, config);
    promise.then((response) => {
      console.log("deu certo");
      setName("");
      setCNPJ("");
      setDescription("");
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
    });
    promise.finally(() => {
      setLoading(false);
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
        {form === true ? (
          <div className="company">
            <Form onSubmit={createCompany}>
              <div className="top-form">
                <GiCancel className="cancel" onClick={cancelForm}/>
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
    </>
  );
}
