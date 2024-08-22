import React from "react";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import JobCardSide from "../JobCardSide/JobCardSide";
import styles from "./sideJobs.module.css";
import { useGlobalTranslation } from "../../hooks/useGlobalTranslation";

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

const SideJobs: React.FC<JobListProps> = ({ jobs, loading }) => {
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
      <Box className={styles.noJobBox}>
        <Typography>{t("no_results")} </Typography>;
      </Box>
    );
  }

  return (
    <Box className={styles.contentContainer}>
      <Box className={styles.jobsList}>
        {jobs?.map((job: JobProps) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={job.id}>
            <JobCardSide
              uri={job?.uri}
              title={job?.title}
              location={job?.location}
              career_level={job?.career_level}
            />
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(SideJobs);
