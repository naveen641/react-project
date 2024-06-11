import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/jobs-internship-mentoraide");
  };
  return (
    <div className={`header ${className}`}>
      <div className="frame-parent2">
        <div className="full-colour-1-group">
          <img
            className="full-colour-12"
            loading="lazy"
            alt=""
            src="/full-colour-1@2x.png"
          />
          <div className="login-app-wrapper">
            <a className="login-app2">Login App</a>
          </div>
        </div>
        <div className="content">
          <div className="job-search">
            <div className="find-a-job-that-matches-your-p-parent">
              <h1 className="find-a-job-container">
                <span>{`Find A `}</span>
                <span className="job">Job</span>
                <span>{` That `}</span>
                <span className="matches">Matches</span>
                <span> Your Passion</span>
              </h1>
              <p className="hand-picked-opportunities-to">
                Hand-picked opportunities to work from home, remotely,
                freelance, full-time, part-time, contract and internships.
              </p>
            </div>
            <div className="search-bar">
              <TextField
                className="schedule"
                placeholder="Search by job title..."
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "64px",
                    backgroundColor: "#fff",
                    borderRadius: "10px 0px 0px 10px",
                    fontSize: "20px",
                  },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.5)" },
                }}
              />
              <Button
                className="schedule1"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#38ef7d",
                  borderRadius: "0px 10px 10px 0px",
                  "&:hover": { background: "#38ef7d" },
                  width: 130.9,
                  height: 64,
                }}
              >
                Search
              </Button>
            </div>
          </div>
          <div className="learning">
            <div className="learning-content">
              <div className="learning-options">
                <div className="learning-paths">
                  <div className="learning-paths-child" />
                  <b className="learn">Learn</b>
                  <div className="enchance-your-knowledge">
                    Enchance Your Knowledge
                  </div>
                  <img
                    className="taegyu9309-simple-minimalist-p-icon"
                    loading="lazy"
                    alt=""
                    src="/taegyu9309-simple-minimalist-pictogram-illustration-expressing--b880b6348fca4fa59b8dcbaf952f9010-1-1@2x.png"
                  />
                </div>
                <div className="rectangle-group">
                  <div className="rectangle-div" />
                  <div className="practice-content">
                    <div className="practice-options">
                      <b className="practice">Practice</b>
                      <div className="daily-practice-for">
                        Daily Practice for Mastery
                      </div>
                    </div>
                  </div>
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
              </div>
              <div className="learning-options1" onClick={handleNavigation}>
                <div className="learning-options-child" />
                <div className="jobs-internship-parent">
                  <h3 className="jobs-internship-container">
                    <p className="jobs">{`Jobs &`}</p>
                    <p className="internship">Internship</p>
                  </h3>
                  <div className="discover-varied-career">
                    Discover Varied Career Paths
                  </div>
                </div>
                <div className="screenshot-2024-04-23-003012-p-wrapper">
                  <img
                    className="screenshot-2024-04-23-003012-p"
                    loading="lazy"
                    alt=""
                    src="/screenshot-20240423-003012photoroom-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
