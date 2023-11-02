import React from "react";
import { useState, useEffect } from "react";
import { API_URL, BASE_URL } from "../common/constant";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "mobile_no",
    headerName: "Mobile No",
    type: "string",
    width: 130,
  },
  { field: "class_section", headerName: "class/Section", width: 100 },
  { field: "join_date", headerName: "Joining Date", width: 130 },
  { field: "gaurdian_name", headerName: "Gaurdian", width: 160 },
];

const Directory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}${API_URL.all_students}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div id="directory-container">
      <h4>All Students Information</h4>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default Directory;
