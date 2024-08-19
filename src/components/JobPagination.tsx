import React, { memo } from "react";
import { Pagination } from "@mui/material";

interface JobPaginationProps {
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

const JobPagination: React.FC<JobPaginationProps> = ({
  totalPages,
  page,
  onPageChange,
}) => {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, value) => onPageChange(value)}
      sx={{ mt: 4 }}
    />
  );
};

export default memo(JobPagination);
