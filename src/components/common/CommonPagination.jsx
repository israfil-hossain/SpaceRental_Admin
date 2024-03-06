import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

const CommonPagination = ({ count , page, setSize,setPage }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100, 500]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{ background: "linear-gradient(to right, #0ffff, #94FBCE)", width:"100%" }}
    />
  );
};

export default CommonPagination;
