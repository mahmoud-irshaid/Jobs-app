import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useGlobalTranslation } from "../../hooks/useGlobalTranslation";
import styles from "./searchBar.module.css";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { t } = useGlobalTranslation();
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    localSearchTerm.length > 0 && onSearch(localSearchTerm);
  };

  return (
    <Box className={styles.searchBarContainer}>
      <Box className={styles.searchBar}>
        <TextField
          fullWidth
          size="small"
          label={t("search_placeholder")}
          value={localSearchTerm}
          onChange={handleInputChange}
          className={styles.textField}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          className={styles.searchButton}
        >
          {t("search")}
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(SearchBar);
