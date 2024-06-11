import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-container ${className}`}>
      <div className="frame-child1" />
      <div className="more-companies">
        <div className="more-label">
          <div className="top-tech-companies-hire-our-st-wrapper">
            <h1 className="top-tech-companies-container">
              <span>{`Top Tech Companies Hire `}</span>
              <span className="our-students">Our Students</span>
            </h1>
          </div>
          <div className="group-parent">
            <img
              className="group-icon1"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <img
              className="group-icon2"
              loading="lazy"
              alt=""
              src="/group-11.svg"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/group-5@2x.png"
            />
            <img
              className="mobikwik-logo-1-icon"
              loading="lazy"
              alt=""
              src="/mobikwik-logo-1@2x.png"
            />
            <img
              className="delhivery-1-icon"
              loading="lazy"
              alt=""
              src="/delhivery-1@2x.png"
            />
            <div className="more-link">
              <b className="more">+50 more</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
