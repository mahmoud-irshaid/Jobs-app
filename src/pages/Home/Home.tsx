import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@mui/material";
import { fetchJobs } from "../../services/axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobsList from "../../components/JobsList/JobsList";
import JobPagination from "../../components/Pagination/Pagination";
import styles from "./home.module.css";

const JOBS_LIMIT = 12;

interface JobsResponse {
  results: {
    jobs: Array<any>;
    pages: number;
  };
}

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const loadJobs = useCallback(async () => {
    setLoading(true);
    try {
      const data: JobsResponse = await fetchJobs("/jobs", {
        itemQuery: searchTerm,
        page: page - 1,
        limit: JOBS_LIMIT,
      });

      const { results } = data;
      setJobs(results?.jobs || []);
      setTotalPages(results?.pages || 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  }, [searchTerm, page]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <Container className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <JobsList jobs={jobs} loading={loading} />
      <JobPagination
        totalPages={totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Home;
