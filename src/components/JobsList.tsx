import React from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  loading: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (jobs?.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {jobs?.map((job) => (
        <Grid item xs={12} md={6} key={job.id}>
          <JobCard title={job.title} description={job.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(JobList);
