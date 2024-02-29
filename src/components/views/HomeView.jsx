import { useState, useEffect } from "react";
import instance from "../../services/api";
import Company from "../company/Company";

const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);

  useEffect(() => {
    instance.get("company").then((res) => setCompanyInfo(res.data));
  }, []);

  return (
    <>
      <h1>HomeView</h1>
      {companyInfo ? <Company companyInfo={companyInfo} /> : null}
    </>
  );
};

export default HomeView;
