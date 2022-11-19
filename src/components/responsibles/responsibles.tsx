import { Form } from "./style";
import { useState, useContext, useRef } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Responsible() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [CEP, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [UF, setUF] = useState("");
  const [numero, setNumero] = useState("");
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

  const { setValue, setFocus, handleSubmit, register } = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  };

  function createResponsible(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name,
      phone,
      CEP,
      rua,
      bairro,
      UF,
      cidade,
      numero,
      isMainResponsible,
    };
    const promise = axios.post(`${URL}/responsible/${id}`, data, config);
    promise.then((response) => {
      console.log(response);
      setName("");
      setCEP("");
      setRua("");
      setBairro("");
      setCidade("");
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

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        {...register("cep")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["cep"] = element)}
        value={CEP}
        onBlur={checkCEP}
        onChange={(e) => setCEP(e.target.value)}
        placeholder="CEP"
      ></input>
      <input
        type="text"
        {...register("neighborhood")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["bairro"] = element)}
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        placeholder="Bairro"
      ></input>
      <input
        type="text"
        {...register("address")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["endereco"] = element)}
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        placeholder="Rua"
      ></input>
      <input
        type="text"
        {...register("number")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["numero"] = element)}
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número"
      ></input>
      <input
        type="text"
        {...register("city")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["cidade"] = element)}
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Cidade"
      ></input>
      <input
        type="text"
        {...register("uf")}
        disabled={loading}
        required
        ref={(element) => (inputRef.current["uf"] = element)}
        value={UF}
        onChange={(e) => setUF(e.target.value)}
        placeholder="UF"
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
