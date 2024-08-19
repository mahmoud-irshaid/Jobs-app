import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@mui/material";
import { fetchJobs } from "../services/axios";
import SearchBar from "../components/SearchBar";
import JobsList from "../components/JobsList";
import JobPagination from "../components/JobPagination";

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadJobs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJobs(searchTerm, page - 1, 10);
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

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <Container>
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
