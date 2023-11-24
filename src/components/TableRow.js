import React from "react";

function TableRow ({ transaction, onDelete }) {
    return (
    
    <div className="transaction-table">
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
        <td>
          <button onClick={() => onDelete(transaction.id)}>Delete</button>
        </td>
      </tr>
    </div>
    );
  };

  
  export default TableRow;