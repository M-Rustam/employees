import * as React from 'react';
import './App.css';
import Employees from './employees';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';



function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    { id: 1, fullName: "Bob Jones", designation: "Javascript", gender: "male", teamName: "TeamA" },
    { id: 2, fullName: "BIll Jailey", designation: "Node Dev", gender: "female", teamName: "TeamB" },
    { id: 3, fullName: "Gail Shepherd", designation: "Java Dev", gender: "female", teamName: "TeamC" },
    { id: 4, fullName: "BIll Jailey", designation: "Python Dev", gender: "male", teamName: "TeamD" },
    { id: 5, fullName: "BIll Jailey", designation: "React Dev", gender: "female", teamName: "TeamA" },
    { id: 6, fullName: "Bob Jones", designation: "Javascript", gender: "male", teamName: "TeamA" },
    { id: 7, fullName: "BIll Jailey", designation: "Node Dev", gender: "female", teamName: "TeamB" },
    { id: 8, fullName: "Gail Shepherd", designation: "Java Dev", gender: "female", teamName: "TeamC" },
    { id: 9, fullName: "BIll Jailey", designation: "Python Dev", gender: "male", teamName: "TeamD" },
    { id: 10, fullName: "BIll Jailey", designation: "React Dev", gender: "female", teamName: "TeamA" },
    { id: 11, fullName: "Gail Shepherd", designation: "Java Dev", gender: "female", teamName: "TeamC" },
    { id: 12, fullName: "BIll Jailey", designation: "Python Dev", gender: "male", teamName: "TeamD" },
    { id: 13, fullName: "BIll Jailey", designation: "React Dev", gender: "female", teamName: "TeamA" }
  ]);


  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

  }, [selectedTeam]);
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Routes>
        <Route path="/"
          element={<Employees employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />}>
        </Route>
        <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees}
          selectedTeam={selectedTeam} setTeam={setTeam} />}>
        </Route>
        <Route path="*" element={<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App