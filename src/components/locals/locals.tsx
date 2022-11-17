import { Form } from "./style"
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";

export default function Locals() {
  const [name, setName] = useState("");
  const [CEP, setCEP] = useState("");
  const [loading, setLoading] = useState(false);
  const { id, idResponsible } = useParams();

  const { token } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function createResponsible(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = { name, CEP };
    const promise = axios.post(
      `${URL}/places/${id}/responsibles/${idResponsible}`,
      data,
      config
    );
    promise.then((response) => {
      console.log(response);
      setName("");
      setCEP("");
    });

    promise.catch((error) => {
      console.log(error);
      console.log(id);
      console.log(idResponsible);
      setLoading(false);
    });
    promise.finally(() => {
      setLoading(false);
    });
  }

  return (
    <Form onSubmit={createResponsible}>
      <input
        type="name"
        disabled={loading}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        value={CEP}
        onChange={(e) => setCEP(e.target.value)}
        placeholder="CEP"
      ></input>
      <button className="button-submit" type="submit" disabled={loading}>
        {loading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          "Cadastrar"
        )}
      </button>
    </Form>
  );
}
