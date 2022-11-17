import { Form } from "./style";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";

export default function Responsible() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [CEP, setCEP] = useState("");
  const [isMainResponsible, setIsMainResponsible] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { token, setHasResp } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function createResponsible(event: any) {
    event.preventDefault();
    setLoading(true);
    

    const data = { name, phone, CEP, isMainResponsible };
    const promise = axios.post(`${URL}/responsible/${id}`, data, config);
    promise.then((response) => {
      console.log(response);
      setName("");
      setCEP("");
      setPhone("");
      setIsMainResponsible("");
      setHasResp(true);
    });

    promise.catch((error) => {
      console.log(error);
      setLoading(false);
      setHasResp(false);
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          ></input>
          <input
          type="text"
          disabled={loading}
          required
          value={CEP}
          onChange={(e) => setCEP(e.target.value)}
          placeholder="CEP"
          ></input>
          <input
          type="checkbox"
          disabled={loading}
          value={isMainResponsible}
          onChange={(e) => setIsMainResponsible(e.target.value)}
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
