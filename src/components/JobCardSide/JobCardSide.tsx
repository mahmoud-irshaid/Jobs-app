import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./jobCardSide.module.css";

interface JobCardProps {
  uri: string;
  title: string;
  location: {
    city: string;
    country: string;
  };
  career_level: Array<string>;
}

const JobCardSide: React.FC<JobCardProps> = ({
  uri,
  title,
  location,
  career_level,
}) => {
  const navigate = useNavigate();

  const handleJobClick = (id: string) => {
    navigate(`/jobs/${id}`);
  };

  return (
    <Card
      onClick={() => handleJobClick(uri)}
      variant="outlined"
      className={styles.jobCardSide}
    >
      <Box>
        <Typography className={styles.jobTitle}>{title}</Typography>
      </Box>
      <Box>
        {(location?.city || location?.country) && (
          <Typography variant="body2">
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
    </Card>
  );
};

export default JobCardSide;
