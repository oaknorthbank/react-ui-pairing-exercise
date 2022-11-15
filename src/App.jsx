import {useEffect, useState} from "react";
import loanApplicationData from './loanApplications.json'

const App = () => {
  const [loanApplications, setLoanApplications] = useState()
  useEffect(() => {
    setLoanApplications(loanApplicationData.data)
  }, [])

  return (
    <div className="App">
      <h1>hello world</h1>
      <p>{loanApplications && loanApplications[0].clientName}</p>
    </div>
  );
};

export default App;
