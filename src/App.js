import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import JobsInternshipMentorAide from "./pages/jobs-internship-mentor-aide";
import JobsInternshipMentorAide1 from "./pages/jobs-internship-mentor-aide1";
import JobsInternshipMentorAide2 from "./pages/jobs-internship-mentor-aide2";
import FrameComponent1 from "./components/frame-component1"; 


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Job Listings";
        metaDescription = "Browse the latest job listings.";
        break;
      case "/jobs-internship-mentoraide1":
        title = "Job Details";
        metaDescription = "View detailed information about the job.";
        break;
      case "/jobs-internship-mentoraide":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<JobsInternshipMentorAide />} />
      <Route
        path="/jobs-internship-mentoraide"
        element={<JobsInternshipMentorAide1 />}
      />
      <Route
        path="/jobs-internship-mentoraide1"
        element={<JobsInternshipMentorAide2 />}
      />
      <Route path="/frame-component" element={<FrameComponent1 />} />
    </Routes>
  );
}
export default App;
