import {useEffect, useState} from "react";
import loanApplicationsData from './loanApplicationsData.json'

const App = () => {
  const [loanApplications, setLoanApplications] = useState()
  useEffect(() => {
    setLoanApplications(loanApplicationsData.data)
  }, [])

  return (
    <div className="App">
      <h1>hello world</h1>
      <p>{loanApplications && loanApplications[0].clientName}</p>
    </div>
  );
};

export default App;
