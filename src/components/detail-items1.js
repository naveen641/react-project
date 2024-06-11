import PropTypes from "prop-types";
import "./detail-items1.css";

const DetailItems1 = ({ className = "" }) => {
  return (
    <div className={`detail-items2 ${className}`}>
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="frame-parent9">
            <div className="apply-before-group">
              <div className="apply-before3">Apply before</div>
              <div className="dec-20233">8 Dec, 2023</div>
            </div>
            <div className="frame-child16" />
            <div className="job-type-group">
              <div className="job-type3">Job type</div>
              <div className="full-time7">Full time</div>
            </div>
          </div>
          <div className="wordpress-container">
            <img
              className="wordpress-icon2"
              loading="lazy"
              alt=""
              src="/wordpress@2x.png"
            />
            <div className="digital-marketer-container">
              <h3 className="digital-marketer3">Digital Marketer</h3>
            </div>
          </div>
        </div>
        <div className="frame-child17" />
        <div className="salary-parent">
          <div className="salary3">Salary</div>
          <div className="k-15k3">$10k-$15k</div>
        </div>
      </div>
      <div className="join-our-team-as-an-email-mark-wrapper">
        <p className="join-our-team6">
          Join our team as an Email Marketing Specialist and lead our digital
          outreach efforts.
        </p>
      </div>
      <div className="detail-items-inner">
        <div className="frame-child18" />
      </div>
      <div className="frame-parent10">
        <div className="frame-parent11">
          <div className="icon-wrapper">
            <img className="icon3" loading="lazy" alt="" src="/icon.svg" />
          </div>
          <div className="london-united-kingdom3">London, United Kingdom</div>
        </div>
        <div className="frame-wrapper3">
          <div className="more-details-container">
            <u className="more-details6">More Details</u>
            <div className="arrow-up-right-wrapper">
              <img
                className="arrow-up-right-icon3"
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

DetailItems1.propTypes = {
  className: PropTypes.string,
};

export default DetailItems1;
