import { Button } from "@mui/material";
import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate= useNavigate();

  const handleNavigation = (jobDetails) => {
    navigate("/jobs-internship-mentoraide1", { state: { jobDetails } });
  }
  
  const jobListings = [
  {
    companyName: "Apple",
    title: "Email Marketing",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/app-store@2x.png",
    location: "London, United Kingdom",
    applyBefore: "8 Dec, 2023",
    salary: "$10k-$15k",
    
  },
  {
    companyName: "Spotify",
    title: "Visual Designer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/spotify@2x.png",
    location: "London, United Kingdom",
    applyBefore: "18 Oct, 2023",
    salary: "$20k-$21k",
  },
  {
    companyName: "WordPress",
    title: "Data Analyst",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/wordpress@2x.png",
    location: "London, United Kingdom",
    applyBefore: "8 Jan, 2024",
    salary: "$20k-$35k",
  },
  {
    companyName: "Slack",
    title: "Content Writer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/slack@2x.png",
    location: "London, United Kingdom",
    applyBefore: "8 Sept, 2023",
    salary: "$10k-$15k",
  },
  {
    companyName: "Google",
    title: "Product Designer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/search@2x.png",
    location: "London, United Kingdom",
    applyBefore: "8 Oct, 2023",
    salary: "$8k-$15k",
  },
  {
    companyName: "Telegram",
    title: "PHP/JS Developer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/telegram@2x.png",
    location: "London, United Kingdom",
    applyBefore: "8 Nov, 2023",
    salary: "$20k-$25k",
  },
  {
    companyName: "Figma",
    title: "Plugin Developer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/figma@2x.png",
    location: "London, United Kingdom",
    applyBefore: "18 Dec, 2023",
    salary: "$12k-$19k",
  },
  {
    companyName: "Pinterest",
    title: "Digital Marketer",
    description: "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    type: "Full Time",
    companyLogo: "/pinterest@2x.png",
    location: "London, United Kingdom",
    applyBefore: "12 Dec, 2023",
    salary: "$15k-$25k",
  }
  ]
  
  
  return (
    <footer className={`featured-jobs-parent ${className}`}>
      <h1 className="featured-jobs">
        <span>{`Featured `}</span>
        <span className="jobs1">Jobs</span>
      </h1>
      <div className="job-internship-name-parent">
        <Button
          className="job-internship-name"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#222",
            fontSize: "20",
            background: "#38ef7d",
            borderRadius: "10px 0px 0px 10px",
            "&:hover": { background: "#38ef7d" },
            height: 50,
          }}
        >
          Jobs
        </Button>
        <Button
          className="job-internship-name1"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "20",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "0px 10px 10px 0px",
            "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
            height: 50,
          }}
        >
          Internship
        </Button>
      </div>
      <div className="frame-parent5">
        {jobListings.map((job, index) => (
          <div key={index} className="rectangle-parent4" onClick={() => handleNavigation(job)}>
            <div className="rectangle">
              <div className="app-store-parent">
                <img className="app-store-icon" loading="lazy" alt="" src={job.companyLogo} />
                <div className="line-container">
                  <div className="frame-child9" />
                </div>
                <div className="full-time-container">
                  <b className="full-time3">{job.type}</b>
                </div>
              </div>
              <div className="job-description-parent">
                <div className="email-marketing-wrapper">
                  <h3 className="email-marketing">{job.title}</h3>
                </div>
                <p className="join-our-team3">{job.description}</p>
              </div>
              <div className="more-details-group">
                <u className="more-details3">More Details</u>
                <div className="frame-wrapper2">
                  <div className="vector-group">
                    <img className="vector-icon2" alt="" src="/vector.svg" />
                    <img className="vector-icon3" alt="" src="/vector-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <GroupComponent
          onClick={() => handleNavigation(jobDetails2)}
          spotify="/spotify@2x.png"
          visualDesigner="Visual Designer"
          vector="/vector.svg"
          vector1="/vector-1.svg"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails3)}
          spotify="/wordpress@2x.png"
          visualDesigner="Data Analyst"
          vector="/vector.svg"
          vector1="/vector-1.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails4)}
          spotify="/slack@2x.png"
          visualDesigner="Content Writer"
          vector="/vector-6.svg"
          vector1="/vector-7.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails5)}
          spotify="/search@2x.png"
          visualDesigner="Product Designer"
          vector="/vector.svg"
          vector1="/vector-1.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="0"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails6)}
          spotify="/telegram@2x.png"
          visualDesigner="PHP/JS Developer"
          vector="/vector.svg"
          vector1="/vector-1.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="0"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails7)}
          spotify="/figma@2x.png"
          visualDesigner="Plugin Developer"
          vector="/vector.svg"
          vector1="/vector-1.svg"
          propWidth="185px"
          propWidth1="40px"
          propMargin="0"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
        <GroupComponent
          onClick={() => handleNavigation(jobDetails8)}
          spotify="/pinterest@2x.png"
          visualDesigner="Digital Marketer"
          vector="/vector.svg"
          vector1="/vector-1.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="288px"
          groupDivAlignSelf="unset"
          visualDesignerColor="#fafafa"
          joinOurTeamColor="#fafafa"
          moreDetailsColor="#fafafa"
        />
      </div>
    </footer>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
