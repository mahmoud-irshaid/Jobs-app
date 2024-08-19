import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(localSearchTerm);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", my: 4 }}>
      <TextField
        fullWidth
        placeholder={t("search_placeholder")}
        value={localSearchTerm}
        onChange={handleInputChange}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        {t("search_button")}
      </Button>
    </Box>
  );
};

export default React.memo(SearchBar);
