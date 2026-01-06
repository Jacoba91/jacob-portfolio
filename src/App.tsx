import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import {
  HomePage,
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  SkillsPage,
} from "./pages";
import { ThemeProvider } from "./hooks/useTheme";

// Use base path for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="skills" element={<SkillsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
