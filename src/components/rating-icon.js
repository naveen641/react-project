import PropTypes from "prop-types";
import "./rating-icon.css";

const RatingIcon = ({ className = "", appStore, leadProductDesigner }) => {
  return (
    <div className={`rating-icon ${className}`}>
      <div className="job-type4">
        <div className="application-date">
          <div className="apply-before4">Apply before</div>
          <div className="dec-20234">8 Dec, 2023</div>
        </div>
        <div className="shapes" />
        <div className="employment-type1">
          <div className="job-type5">Job type</div>
          <div className="full-time8">Full time</div>
        </div>
        <div className="search-input" />
        <div className="compensation">
          <div className="salary4">Salary</div>
          <div className="k-15k4">$10k-$15k</div>
        </div>
      </div>
      <div className="job-highlights">
        <img className="app-store-icon2" loading="lazy" alt="" src={appStore} />
        <div className="role">
          <h3 className="lead-product-designer">{leadProductDesigner}</h3>
        </div>
      </div>
      <div className="description">
        <p className="join-our-team7">
          Join our team as an Email Marketing Specialist and lead our digital
          outreach efforts.
        </p>
      </div>
      <div className="separator">
        <div className="separator-child" />
      </div>
      <div className="location-container-parent">
        <div className="location-container">
          <div className="location-pin">
            <img className="icon4" loading="lazy" alt="" src="/icon.svg" />
          </div>
          <div className="london-united-kingdom4">London, United Kingdom</div>
        </div>
        <div className="more-details-container-wrapper">
          <div className="more-details-container1">
            <u className="more-details7">More Details</u>
            <div className="arrow-up-right-container">
              <img
                className="arrow-up-right-icon4"
                loading="lazy"
                alt=""
                src="/arrowupright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RatingIcon.propTypes = {
  className: PropTypes.string,
  appStore: PropTypes.string,
  leadProductDesigner: PropTypes.string,
};

export default RatingIcon;
