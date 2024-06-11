import { Button } from "@mui/material";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import "./jobs-internship-mentor-aide1.css";

const JobsInternshipMentorAide1 = () => {
  return (
    <div className="jobs-internship-mentoraide1">
      <header className="full-colour-1-parent">
        <img
          className="full-colour-1"
          loading="lazy"
          alt=""
          src="/full-colour-1@2x.png"
        />
        <div className="login-form">
          <a className="login-app">Login App</a>
        </div>
      </header>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="unlock-your-potential-with-men-parent">
            <h1 className="unlock-your-potential-container">
              <span>{`Unlock Your Potential with `}</span>
              <span className="mentoraide">MentorAide</span>
              <span> Exciting Career Opportunities</span>
            </h1>
            <img
              className="a27aeb26-e622-4fec-9c70-e2932b-icon"
              loading="lazy"
              alt=""
              src="/a27aeb26e6224fec9c70e2932bf12aa3-1@2x.png"
            />
          </div>
          <div className="stand-out-with">
            Stand out with an impressive resume, connect with top companies, and
            gain valuable insights for your professional journey
          </div>
        </div>
        <Button
          className="frame-inner"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "24",
            background: "#38ef7d",
            borderRadius: "10px",
            "&:hover": { background: "#38ef7d" },
            width: 194,
            height: 56,
          }}
        >
          Apply Now
        </Button>
      </div>
      <section className="frame-container">
        <FrameComponent3 />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
    </div>
  );
};

export default JobsInternshipMentorAide1;
