import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./jobCard.module.css";
import { useGlobalTranslation } from "../../hooks/useGlobalTranslation";

interface JobCardProps {
  uri: string;
  title: string;
  location: {
    city: string;
    country: string;
  };
  career_level: Array<string>;
}

const JobCard: React.FC<JobCardProps> = ({
  uri,
  title,
  location,
  career_level,
}) => {
  const { t } = useGlobalTranslation();
  const navigate = useNavigate();
  const handleJobClick = (id: string) => {
    navigate(`/jobs/${id}`);
  };

  return (
    <Card variant="outlined" className={styles.jobCard}>
      <Box>
        <Typography className={styles.jobTitle}>{title}</Typography>
      </Box>
      <Box>
        {(location?.city || location?.country) && (
          <Typography variant="body2" className={styles.jobLocation}>
            {location?.city || location?.country}
          </Typography>
        )}
        {career_level?.length > 0 && (
          <Typography variant="body2">
            {career_level.map((level: string, i: number) => (
              <span key={i}>level + " "</span>
            ))}
          </Typography>
        )}
      </Box>
      <Box className={styles.jobButton}>
        <Button variant="outlined" onClick={() => handleJobClick(uri)}>
          {t("view_details")}
        </Button>
      </Box>
    </Card>
  );
};

export default JobCard;
