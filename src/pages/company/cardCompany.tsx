import Header from "../../components/header/header";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { CompanyInfo, Company } from "./style";

export default function CardCompany() {
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [companies, setCompanies] = useState<any[]>([]);
  const URL = `http://localhost:5000`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderCompany();
  }, []);

  function renderCompany() {
    const promise = axios.get(`${URL}/company/${id}`, config);
    promise.then((response) => {
      setCompanies(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <CompanyInfo>
        {companies.map((company) => {
          return (
            <>
            <Company>
              <h1>Razão Social: {company.companyName}</h1>
              <h2>CNPJ: {company.CNPJ}</h2>
              </Company>
            </>
          );
        })}
      </CompanyInfo>
    </>
  );
}
