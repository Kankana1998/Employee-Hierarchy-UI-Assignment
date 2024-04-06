import React, { useState, useEffect } from 'react';
import './App.css';
import employeeData from './EmployeeData/EmployeeData';
import Employee from './components/Employee';
import useTraverseTree from './hooks/useTraverseTree';

function App() {

  const [empData, setEmpData] = useState(employeeData);
  const { insertNode, updateNode, deleteNode } = useTraverseTree();

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  useEffect(() => {
    const savedData = loadFromLocalStorage('treeData');
    if (savedData) {
      setEmpData(savedData);
    }
  }, []);
  
  const handleInsertNode = (empId, member, email, phoneNo, hasSubordinates) => {
    const finalTree = insertNode(empData, empId, member, email, phoneNo, hasSubordinates);
    setEmpData(finalTree);
    saveToLocalStorage('treeData', finalTree);
  };

  const handleUpdateNode = (empId, member, email, phoneNo, hasSubordinates) => {
    const updatedNewTree = updateNode(empData, empId, member, email, phoneNo, hasSubordinates);
    setEmpData(updatedNewTree);
    saveToLocalStorage('treeData', updatedNewTree);
  };

  const handleDeleteNode = (empId) => {
    const filteredTree = deleteNode(empData, empId); 
    setEmpData(filteredTree);
    saveToLocalStorage('treeData', filteredTree);
  };

  return (
    <Employee
      handleInsertNode={handleInsertNode}
      handleUpdateNode={handleUpdateNode}
      handleDeleteNode={handleDeleteNode}
      employeeData={empData} 
    />
  );
}

export default App;
