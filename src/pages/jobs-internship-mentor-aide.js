import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import "./jobs-internship-mentor-aide.css";

const JobsInternshipMentorAide = () => {
  return (
    <div className="jobs-internship-mentoraide">
      <Header />
      <main className="features">
        <div className="features-title">
          <b className="features1">FEATURES</b>
        </div>
        <section className="rectangle-parent">
          <div className="frame-child" />
          <div className="rectangle-wrapper">
            <div className="frame-item" />
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default JobsInternshipMentorAide;
