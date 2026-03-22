import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

function App() {
  const projects = [
    {
      id: 1,
      name: "Eco Habit Tracker",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Weather App",
      technologies: ["API", "JavaScript", "HTML"],
    },
    {
      id: 3,
      name: "Portfolio Website",
      technologies: ["React", "Tailwind"],
    },
  ];

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;