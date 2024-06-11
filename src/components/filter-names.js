import RatingIcon from "./rating-icon";
import PropTypes from "prop-types";
import "./filter-names.css";

const FilterNames = ({ className = "" }) => {
  return (
    <div className={`filter-names2 ${className}`}>
      <div className="filter-names-inner" />
      <div className="job-info1">
        <RatingIcon
          appStore="/app-store@2x.png"
          leadProductDesigner="Lead Product Designer"
        />
        <RatingIcon
          appStore="/spotify@2x.png"
          leadProductDesigner="Social Media Assistant"
        />
      </div>
      <div className="job-container">
        <div className="job-content">
          <div className="job-post">
            <div className="job-card">
              <div className="job-info2">
                <div className="job-details">
                  <div className="apply-before5">Apply before</div>
                  <div className="dec-20235">8 Dec, 2023</div>
                </div>
                <div className="job-details1" />
                <div className="job-details2">
                  <div className="job-type6">Job type</div>
                  <div className="full-time9">Full time</div>
                </div>
                <div className="job-details3" />
              </div>
              <div className="company-logo">
                <img
                  className="slack-icon"
                  loading="lazy"
                  alt=""
                  src="/slack@2x.png"
                />
                <div className="role-container">
                  <h3 className="full-stack-developer">Full-Stack Developer</h3>
                </div>
              </div>
            </div>
            <div className="compensation1">
              <div className="salary5">Salary</div>
              <div className="k-15k5">$10k-$15k</div>
            </div>
          </div>
          <div className="description-container">
            <p className="join-our-team8">
              Join our team as an Email Marketing Specialist and lead our
              digital outreach efforts.
            </p>
          </div>
          <div className="divider">
            <div className="separator1" />
          </div>
          <div className="location-container1">
            <div className="location1">
              <div className="location-pin1">
                <img className="icon5" loading="lazy" alt="" src="/icon.svg" />
              </div>
              <div className="london-united-kingdom5">
                London, United Kingdom
              </div>
            </div>
            <div className="details-container-wrapper">
              <div className="details-container1">
                <u className="more-details8">More Details</u>
                <div className="arrow-up-right-frame">
                  <img
                    className="arrow-up-right-icon5"
                    loading="lazy"
                    alt=""
                    src="/arrowupright.svg"
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

FilterNames.propTypes = {
  className: PropTypes.string,
};

export default FilterNames;
