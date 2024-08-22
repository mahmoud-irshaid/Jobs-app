import React, { KeyboardEvent, MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleJobsNavigate = () => {
    navigate(`/`);
  };

  const renderDrawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        className={styles.drawerContent}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Jobs" />
          </ListItem>
          {i18n.language === "ar" ? (
            <ListItem button>
              <ListItemText
                primary={t("EN")}
                onClick={() => changeLanguage("en")}
              />
            </ListItem>
          ) : (
            <ListItem button>
              <ListItemText
                primary={t("AR")}
                onClick={() => changeLanguage("ar")}
              />
            </ListItem>
          )}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="sticky" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <Link to="/">
          <Typography variant="h6" className={styles.typography}>
            ELEVATUS
          </Typography>
        </Link>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={styles.mobileMenuIcon}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            {renderDrawer}
          </>
        ) : (
          <Box className={styles.desktopMenu}>
            <Button
              className={styles.languageButton}
              onClick={handleJobsNavigate}
            >
              {t("Jobs")}
            </Button>
            <Box display="flex" alignItems="center">
              {i18n.language === "ar" ? (
                <Button
                  className={styles.languageButton}
                  onClick={() => changeLanguage("en")}
                >
                  {t("EN")}
                </Button>
              ) : (
                <Button
                  className={styles.languageButton}
                  onClick={() => changeLanguage("ar")}
                >
                  {t("AR")}
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
