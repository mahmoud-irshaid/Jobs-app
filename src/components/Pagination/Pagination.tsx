import React, { memo } from "react";
import { Box, Pagination } from "@mui/material";
import styles from "./pagination.module.css";

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
    <Box className={styles.pagination}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
      />
    </Box>
  );
};

export default memo(JobPagination);
