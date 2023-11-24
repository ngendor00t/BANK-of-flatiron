import React from "react";
import TableRow from "./TableRow";

//function to display the data from the db into a table
function Tabletransactions({transactions, onDelete}) {
    return(
    <div className="transaction-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </tbody>
    </table>  
   </div>     
    )
}
export default Tabletransactions ;