import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  title: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleJobClick = (id: string) => {
    navigate(`/jobs/${id}`);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => handleJobClick(title)}
        >
          {t("view_details")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
