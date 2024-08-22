import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              Elevatus
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} CopyRight`} <>&copy;</>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
