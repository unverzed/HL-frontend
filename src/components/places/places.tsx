import { Form } from "./style";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";

export default function PlacesForm() {
  const [name, setName] = useState("");
  const [CEP, setCEP] = useState("");
  const [loading, setLoading] = useState(false);
  let { id, idResponsible } = useParams();
  const { token  } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function createPlace(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = { name, CEP };
    const promise = axios.post(`${URL}/places/${id}/responsibles/${idResponsible}`, data, config);
    promise.then((response) => {
      console.log(response);
      setName("");
      setCEP("");
    });

    promise.catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  return (
    <Form onSubmit={createPlace}>
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
      <button type="submit" disabled={loading}>
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
