import PropTypes from "prop-types";
import "./detail-items2.css";

const DetailItems2 = ({ className = "" }) => {
  return (
    <div className={`detail-items1 ${className}`}>
      <div className="line-parent">
        <div className="frame-child14" />
        <div className="frame-child15" />
        <div className="additional-info">
          <div className="first-info-pair">
            <div className="apply-before2">Apply before</div>
            <div className="dec-20232">8 Dec, 2023</div>
          </div>
          <div className="second-type-pair">
            <div className="job-type2">Job type</div>
            <div className="full-time6">Full time</div>
          </div>
          <div className="third-info-pair">
            <div className="salary2">Salary</div>
            <div className="k-15k2">$10k-$15k</div>
          </div>
        </div>
      </div>
      <div className="wordpress-group">
        <img
          className="wordpress-icon1"
          loading="lazy"
          alt=""
          src="/wordpress@2x.png"
        />
        <div className="job-designations">
          <h3 className="digital-marketer2">Digital Marketer</h3>
        </div>
      </div>
      <p className="join-our-team5">
        Join our team as an Email Marketing Specialist and lead our digital
        outreach efforts.
      </p>
      <div className="detail-items-child" />
      <div className="details-container">
        <div className="job-location">
          <div className="location-icon">
            <img className="icon2" loading="lazy" alt="" src="/icon.svg" />
          </div>
          <div className="london-united-kingdom2">London, United Kingdom</div>
        </div>
        <div className="details-button">
          <u className="more-details5">More Details</u>
        </div>
      </div>
      <img className="arrow-up-right-icon2" alt="" src="/arrowupright.svg" />
    </div>
  );
};

DetailItems2.propTypes = {
  className: PropTypes.string,
};

export default DetailItems2;
