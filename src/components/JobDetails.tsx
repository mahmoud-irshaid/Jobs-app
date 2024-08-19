import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchJobs } from "../services/axios";

const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadJob = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs("", 1, 10);
        const selectedJob = data.jobs.find((job: any) => job.id === jobId);
        setJob(selectedJob);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
      setLoading(false);
    };
    loadJob();
  }, [jobId]);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : job ? (
        <>
          <Typography variant="h4" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="body1">{job.description}</Typography>
        </>
      ) : (
        <Typography>No job found.</Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(-1)}
        sx={{ marginTop: 2 }}
      >
        Back to Jobs
      </Button>
    </Container>
  );
};

export default JobDetails;
