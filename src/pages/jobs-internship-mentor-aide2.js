import ListingDetails from "../components/listing-details";
import JobFilters from "../components/job-filters";
import DetailItems2 from "../components/detail-items2";
import DetailItems1 from "../components/detail-items1";
import FilterNames from "../components/filter-names";
import DetailItems from "../components/detail-items";
import "./jobs-internship-mentor-aide2.css";
import { useLocation } from "react-router-dom";

const JobsInternshipMentorAide2 = () => {
  const location = useLocation();
  const { jobDetails } = location.state || {};


  return (
    <div className="jobs-internship-mentoraide2">
      <header className="product-card-wrapper">
        <div className="product-card">
          <img
            className="full-colour-11"
            loading="lazy"
            alt=""
            src="/full-colour-1@2x.png"
          />
          <div className="login-container">
            <a className="login-app1">Login App</a>
          </div>
        </div>
      </header>
      <div className="jobs-internship-mentoraide-child" />
      <div className="jobs-internship-mentoraide-item" />
      <img className="figma-icon" loading="lazy" alt="" src="/figma@2x.png" />
      <img className="arrow-up-right-icon" alt="" src="/arrowupright.svg" />
      <section className="job-listings">
        <div className="listing">
          <ListingDetails />
          <JobFilters />
        </div>
      </section>
      <section className="job-postings">
        <div className="post-header">
          <h1 className="latest-jobs-post-container">
            <span>{`Latest `}</span>
            <span className="jobs-post">Jobs Post</span>
          </h1>
        </div>
        <div className="post-details">
          <div className="detail-items">
            <div className="application-info">
              <div className="frame-div">
                <div className="frame-parent1">
                  <div className="apply-before-parent">
                    <div className="apply-before">Apply before</div>
                    <div className="dec-2023">{jobDetails.applyBefore || "N/A"}</div>
                  </div>
                  <div className="line-div" />
                  <div className="job-type-parent">
                    <div className="job-type">Job type</div>
                    <div className="full-time">{jobDetails.type || "N/A"}</div>
                  </div>
                  <div className="type-separator" />
                </div>
                <div className="wordpress-parent">
                  <img
                    className="wordpress-icon"
                    loading="lazy"
                    alt={jobDetails.companyName || "Company"}
                    src={jobDetails.companyLogo || "/wordpress@2x.png"}
                  />
                  <div className="digital-marketer-wrapper">
                    <h3 className="digital-marketer">{jobDetails.title || "Job Title"}</h3>
                  </div>
                </div>
              </div>
              <div className="salary-info">
                <div className="salary">Salary</div>
                <div className="k-15k">{jobDetails.salary || "N/A"}</div>
              </div>
            </div>
            <div className="job-summaries">
              <p className="join-our-team">
                {jobDetails.description || "Job Description"}
              </p>
            </div>
            <div className="description-extensions">
              <div className="description-extensions-child" />
            </div>
            <div className="location-details">
              <div className="first-location-icons-parent">
                <div className="first-location-icons">
                  <img className="icon" loading="lazy" alt="" src="/icon.svg" />
                </div>
                <div className="london-united-kingdom">
                  {jobDetails.location || "Location"}
                </div>
              </div>
              <div className="first-details-buttons-wrapper">
                <div className="first-details-buttons">
                  <u className="more-details">More Details</u>
                  <div className="first-button-icons">
                    <img
                      className="arrow-up-right-icon1"
                      loading="lazy"
                      alt=""
                      src="/arrowupright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DetailItems2 />
          <DetailItems1 />
          <FilterNames />
          <DetailItems />
          <div className="apply-before1">Apply before</div>
          <div className="dec-20231">{jobDetails.applyBefore || "N/A"}</div>
          <div className="job-type1">Job type</div>
          <div className="full-time1">{jobDetails.type || "N/A"}</div>
          <div className="salary1">Salary</div>
          <div className="k-15k1">{jobDetails.salary || "N/A"}</div>
          <h3 className="digital-marketer1">{jobDetails.title || "Job Title"}</h3>
          <p className="join-our-team1">
            {jobDetails.description || "Job Description"}
          </p>
          <div className="post-details-child" />
          <img className="icon1" loading="lazy" alt="" src="/icon.svg" />
          <div className="london-united-kingdom1">{jobDetails.location || "Location"}</div>
          <u className="more-details1">More Details</u>
        </div>
      </section>
    </div>
  );
};

export default JobsInternshipMentorAide2;
