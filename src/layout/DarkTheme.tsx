import React, { useState, useEffect } from "react";

const Swithcer = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <button onClick={handleSwitchTheme}>Change theme</button>;
};

export default Swithcer;
