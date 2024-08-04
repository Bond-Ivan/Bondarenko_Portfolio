import { ReactElement, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './Glopal.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Themes/Themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App(): ReactElement {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProjectCard/:projectId" element={<ProjectCard />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;