import { ThemeProvider } from "../../context/ThemeContext";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="layout">
        {children}
      </div>
    </ThemeProvider>
  );
}
