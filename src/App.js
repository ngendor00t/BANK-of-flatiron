
import './App.css';
import { useEffect, useState } from 'react';
import Tabletransactions from './components/Tabletransactions';
import Search from './components/Search';
import Header from './components/Header';

 




function App() {
  const [transactions , setTransactions]= useState([]);
  const [searchTerm , setSearchTerm]= useState('');

  useEffect(() => {
fetch("https://my-json-server.typicode.com/ngendor00t/bank-of-flatiron")
.then ((response) => response.json())
.then ((data)=> {
  console.log (data);
  setTransactions(data);
  
})
.catch(error=>console.log("Error fetching data :" ,error));

  }, [] );

  // getting data from the db.json by fetching


//function to add a new transaction from a form input
// function addTransaction(newTransaction) {
//   setTransactions([...transaction, newTransaction]);
// }
//function to filter the transactions by the description
const filteredTransactions = transactions
  ? transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];

//function to delete the transaction by it's id
function deleteTransaction(id) {
  const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
  setTransactions(updatedTransactions);
}

//rendering some key components
return (
  <>
    <Header />
    <Search onSearch={setSearchTerm} />
    <Tabletransactions transactions={filteredTransactions} onDelete={deleteTransaction} />
    
    
  </>
);
}

export default App;


