import React from "react";
import {
  Card,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useGlobalTranslation } from "../../hooks/useGlobalTranslation";

import styles from "./jobDetails.module.css";

interface JobProps {
  job: any;
}

const JobDetails: React.FC<JobProps> = ({ job }) => {
  const { t } = useGlobalTranslation();

  let summaryData = [
    {
      label: t("Salary range"),
      content: `${job?.salary?.min}-${job?.salary?.max}`,
    },
    {
      label: t("Major"),
      content: job?.major?.join(", "),
    },
    {
      label: t("Industry"),
      content: job?.industry?.join(", "),
    },
    {
      label: t("Career Level"),
      content: job?.career_level?.join(", "),
    },
    {
      label: t("Experience Required"),
      content: `${job?.years_of_experience?.join(", ")} ${t(
        "year(s) minimum"
      )}`,
    },
    {
      label: t("Minimum GPA"),
      content: job?.gpa,
    },
  ];

  return (
    <Card className={styles.jobCard}>
      <Box className={styles.header}>
        <Typography variant="h5">{job?.title}</Typography>
        <Box className={styles.iconContainer}>
          {job?.is_top && <StarIcon className={styles.goldStar} />}
          <Typography variant="body2" ml={1}>
            {job?.job_type?.map((t: string, i: number) => (
              <Chip label={t} key={i} />
            ))}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        className={styles.bodyText}
      >
        {t("Posted On")}: {job?.posted_at}
      </Typography>
      <Box>
        <Typography variant="h6" gutterBottom>
          {t("Description")}
        </Typography>
        <Typography
          variant="body2"
          paragraph
          dangerouslySetInnerHTML={{ __html: job?.description }}
        ></Typography>
        <Typography variant="h6" gutterBottom>
          {t("Requirements")}:
        </Typography>
        <Typography
          variant="body2"
          paragraph
          dangerouslySetInnerHTML={{ __html: job?.requirements }}
        ></Typography>
        <Typography variant="h6" gutterBottom>
          {t("Summary")}
        </Typography>
        <Grid container spacing={2} className={styles.summary}>
          {summaryData.map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box>
                <Typography variant="body2">
                  <strong>{item.label}:</strong> {item.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider className={styles.sectionDivider} />

        <Typography variant="h6" gutterBottom>
          {t("Required Skills")}
        </Typography>
        <Box className={styles.skillsContainer}>
          {job?.skills?.map((t: string, i: number) => (
            <Chip label={t} key={i} />
          ))}
        </Box>

        <Divider className={styles.sectionDivider} />

        <Typography variant="h6" gutterBottom>
          {t("Languages")}
        </Typography>
        <Box className={styles.languagesContainer}>
          {job?.languages?.map((t: string, i: number) => (
            <Chip label={t} key={i} />
          ))}
        </Box>

        <Divider className={styles.sectionDivider} />

        <Box className={styles.footer}>
          <Box>
            <FacebookIcon className={styles.socialIcons} />
            <TwitterIcon className={styles.socialIcons} />
            <LinkedInIcon className={styles.socialIcons} />
          </Box>
          <Button variant="contained" className={styles.btn}>
            {t("Apply")}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default JobDetails;
