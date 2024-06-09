import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "../styles/Dark.css";

function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className="dark">
      <IconButton
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </div>
  );
}

export default Dark;
