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
      <table>
        <tr>
          <th>Client Details</th>
          <th>Address</th>
          <th>Type</th>
          <th>All in rate</th>
          <th>Loan amount</th>
          <th>Created on</th>
          <th>Status</th>
        </tr>
        {loanApplications &&
          loanApplications.map((application) => (
          <tr>
            <td>{application.clientName}</td>
            <td>{application.propertyAddress}</td>
            <td>{application.loanType.charAt(0).toUpperCase() + application.loanType.toLowerCase().slice(1)}</td>
            <td>{Math.round(((application.allInRate * 100) + Number.EPSILON) * 100) / 100}%</td>
            <td>{new Intl.NumberFormat("en-GB", { style: 'currency', currency: 'GBP' }).format(application.loanAmount)}</td>
            <td>{application.createdAt}</td>
            <td>{(application.submittedAt) ? "Submitted" : "Incomplete"}</td>
          </tr>
          ))
      }
      </table>
    </div>
  );
};

export default App;
