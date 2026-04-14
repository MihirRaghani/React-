import React, { useState } from "react";
import "./DataTable.css";

const DataTable = () => {

  // ✅ STEP 1: Your original data
  const data = [
    { id: 1, name: "Amit", age: 25, city: "Ahmedabad" },
    { id: 2, name: "Rahul", age: 30, city: "Delhi" },
    { id: 3, name: "Priya", age: 22, city: "Mumbai" },
  ];

  // ✅ STEP 2: Put useState HERE (inside component, top area)
  const [tableData, setTableData] = useState(data);

  // ✅ STEP 3: Delete function (also inside component)
  const handleDelete = (id) => {
    const newData = tableData.filter((item) => item.id !== id);
    setTableData(newData);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th> {/* ✅ New column */}
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>

            {/* ✅ Delete button */}
            <td>
              <button onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
