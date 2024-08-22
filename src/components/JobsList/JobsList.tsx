import React from "react";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import JobCard from "../JobCard/JobCard";
import { useGlobalTranslation } from "../../hooks/useGlobalTranslation";

import styles from "./jobsList.module.css";

type JobProps = {
  id: string;
  uri: string;
  title: string;
  location: {
    city: string;
    country: string;
  };
  career_level: Array<string>;
};

interface JobListProps {
  jobs: Array<JobProps>;
  loading: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading }) => {
  const { t } = useGlobalTranslation();

  if (loading) {
    return (
      <Box className={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  if (jobs?.length === 0) {
    return (
      <Typography className={styles.noJobBox}>{t("no_results")}</Typography>
    );
  }

  return (
    <Box className={styles.jobListContainer}>
      <h3>{t("Recent Openings")}</h3>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={2}
        justifyContent={"center"}
        className={styles.gridContainer}
      >
        {jobs?.map((job: JobProps) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
            <JobCard
              uri={job?.uri}
              title={job?.title}
              location={job?.location}
              career_level={job?.career_level}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(JobList);
