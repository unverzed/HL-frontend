import { Form } from "./style";
import { useState, useContext, ChangeEvent } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Locals() {
  const [form, setForm] = useState({
    name: "",
    CEP: "",
    neighborhood: "",
    street: "",
    number: "",
    state: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const { id, idResponsible } = useParams();
  const { token, setHasResp } = useContext(UserContext);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { setFocus } = useForm();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = { ...form };
    const promise = axios.post(`${URL}/places/${id}/responsibles/${idResponsible}`, data, config);
    promise.then((response) => {
      console.log(response);
    });

    promise.catch((error) => {
      console.error(error.response.data);
      setLoading(false);
      setHasResp(false);
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        const { logradouro, bairro, localidade, uf } = data;
        setForm({
          ...form,
          street: logradouro,
          neighborhood: bairro,
          city: localidade,
          state: uf,
        });

        setFocus("addressNumber");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="name"
        disabled={loading}
        required
        value={form.name}
        name="name"
        onChange={handleInputChange}
        placeholder="Nome"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        value={form.CEP}
        name="CEP"
        onBlur={checkCEP}
        onChange={handleInputChange}
        placeholder="CEP"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        name="neighborhood"
        value={form.neighborhood}
        onChange={handleInputChange}
        placeholder="Bairro"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        name="street"
        value={form.street}
        onChange={handleInputChange}
        placeholder="Rua"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        name="number"
        value={form.number}
        onChange={handleInputChange}
        placeholder="Número"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        name="city"
        value={form.city}
        onChange={handleInputChange}
        placeholder="Cidade"
      ></input>
      <input
        type="text"
        disabled={loading}
        required
        name="state"
        value={form.state}
        onChange={handleInputChange}
        placeholder="UF"
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
