import PropTypes from "prop-types";
import "./detail-items.css";

const DetailItems = ({ className = "" }) => {
  return (
    <div className={`detail-items3 ${className}`}>
      <div className="info-separator-parent">
        <div className="info-separator">
          <div className="apply-before6">Apply before</div>
          <div className="dec-20236">8 Dec, 2023</div>
        </div>
        <div className="info-separator1" />
        <div className="info-separator2">
          <div className="job-type7">Job type</div>
          <div className="full-time10">Full time</div>
        </div>
        <div className="info-separator3" />
        <div className="fourth-info-pair">
          <div className="salary6">Salary</div>
          <div className="k-15k6">$10k-$15k</div>
        </div>
      </div>
      <div className="pinterest-parent">
        <img
          className="pinterest-icon"
          loading="lazy"
          alt=""
          src="/pinterest@2x.png"
        />
        <div className="ux-designerresearcher-wrapper">
          <h3 className="ux-designerresearcher">UX Designer/Researcher</h3>
        </div>
      </div>
      <div className="join-our-team-as-an-email-mark-container">
        <p className="join-our-team9">
          Join our team as an Email Marketing Specialist and lead our digital
          outreach efforts.
        </p>
      </div>
      <div className="detail-items-inner1">
        <div className="frame-child19" />
      </div>
      <div className="frame-parent12">
        <div className="frame-parent13">
          <div className="icon-container">
            <img className="icon6" loading="lazy" alt="" src="/icon.svg" />
          </div>
          <div className="london-united-kingdom6">London, United Kingdom</div>
        </div>
        <div className="more-details-wrapper">
          <u className="more-details9">More Details</u>
        </div>
      </div>
      <img className="arrow-up-right-icon6" alt="" src="/arrowupright.svg" />
    </div>
  );
};

DetailItems.propTypes = {
  className: PropTypes.string,
};

export default DetailItems;
