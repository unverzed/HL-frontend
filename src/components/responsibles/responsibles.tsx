import { Form } from "./style";
import {
  useState,
  useContext,
  useRef,
  ChangeEvent,
} from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Responsible() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    CEP: "",
    neighborhood: "",
    street: "",
    number: "",
    state: "",
    city: "",
  });

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
  type InputRef = {
    [x: string]: HTMLInputElement | null;
  };
  const inputRef = useRef<InputRef>({
    cep: null,
    endereco: null,
    bairro: null,
    cidade: null,
    numero: null,
    uf: null,
  });

  const { setFocus, register } = useForm();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = { ...form, isMainResponsible };
    const promise = axios.post(`${URL}/responsibles/${id}`, data, config);
    promise.then((response) => {
      console.log(response);
      setIsMainResponsible("");
      setHasResp(true);
    });

    promise.catch((error) => {
      console.error(error.response.data);
      setLoading(false);
      setHasResp(false);
    });

    promise.finally(() => {
      setLoading(false);
    })
  };

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
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
        value={form.phone}
        name="phone"
        onChange={handleInputChange}
        placeholder="Telefone"
      ></input>
      <input
        type="text"
        {...register("cep")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["cep"] = element)}
        value={form.CEP}
        name="CEP"
        onBlur={checkCEP}
        onChange={handleInputChange}
        placeholder="CEP"
      ></input>
      <input
        type="text"
        {...register("neighborhood")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["bairro"] = element)}
        name="neighborhood"
        value={form.neighborhood}
        onChange={handleInputChange}
        placeholder="Bairro"
      ></input>
      <input
        type="text"
        {...register("address")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["endereco"] = element)}
        name="street"
        value={form.street}
        onChange={handleInputChange}
        placeholder="Rua"
      ></input>
      <input
        type="text"
        {...register("number")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["numero"] = element)}
        name="number"
        value={form.number}
        onChange={handleInputChange}
        placeholder="Número"
      ></input>
      <input
        type="text"
        {...register("city")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["cidade"] = element)}
        name="city"
        value={form.city}
        onChange={handleInputChange}
        placeholder="Cidade"
      ></input>
      <input
        type="text"
        {...register("uf")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["uf"] = element)}
        name="state"
        value={form.state}
        onChange={handleInputChange}
        placeholder="UF"
      ></input>
      <div className="responsible">
        <label>É o principal responsável?</label>
        <input
          className="checkbox"
          type="checkbox"
          disabled={loading}
          value={isMainResponsible}
          onChange={(e) => setIsMainResponsible(e.target.value)}
        ></input>
      </div>
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
