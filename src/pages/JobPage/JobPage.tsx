import React, { useCallback, useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchJobs } from "../../services/axios";
import JobDetails from "../../components/JobDetails/JobDetails";
import SideJobs from "../../components/SideJobs/SideJobs";
import styles from "./jobPage.module.css";

const JobPages: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const loadJob = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs("/jobs/uri", {
          uri: jobId,
        });
        const { results } = data;
        setJob(results);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
      setLoading(false);
    };
    loadJob();
  }, [jobId]);

  // get side jobs
  const loadJobs = useCallback(async () => {
    setLoadingJobs(true);
    try {
      const data = await fetchJobs("/jobs", {
        page: 0,
        limit: 10,
      });

      const { results } = data;
      setJobs(results?.jobs || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoadingJobs(false);
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  return (
    <Container className={styles.jobPagesContainer}>
      {loading ? (
        <Box className={styles.loadingBox}>
          <CircularProgress />
        </Box>
      ) : job ? (
        <Container className={styles.contentContainer}>
          <SideJobs loading={loadingJobs} jobs={jobs} />
          <JobDetails job={job} />
        </Container>
      ) : (
        <Box className={styles.noJobBox}>
          <Typography>No job found.</Typography>
        </Box>
      )}
    </Container>
  );
};

export default JobPages;
