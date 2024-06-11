import ApproachCommParent from "./approach-comm-parent";
import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="frame-parent4">
        <div className="frame-wrapper">
          <div className="how-we-work-parent">
            <h1 className="how-we-work">How we work</h1>
            <p className="transformative-careers-through">
              Transformative careers through meaningful work experiences.
              Explore internships and careers.
            </p>
            <div className="get-in-touch-with-us-parent">
              <div className="get-in-touch">Get in touch with us</div>
              <div className="vector-wrapper">
                <img
                  className="arrow-icon"
                  loading="lazy"
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="explore-by-category-container">
          <span>{`Explore by `}</span>
          <span className="category">Category</span>
        </h1>
      </div>
      <div className="approach-dev-parent-parent">
        <div className="approach-dev-parent">
          <ApproachCommParent
            prop="01"
            personalizedApproach="Personalized Approach"
            personalizedApproachUniqu="Personalized approach: Unique goals, aspirations, skills - tailored services for all."
          />
          <ApproachCommParent
            prop="03"
            personalizedApproach="Transparent Communication"
            personalizedApproachUniqu="Transparent, open communication: updates, feedback, support—every step, we're with you."
            propWidth="unset"
            propAlignSelf="stretch"
            propWidth1="unset"
            propPadding="var(--padding-4xs) var(--padding-xs) var(--padding-4xs) var(--padding-mini)"
            propMinWidth="23px"
          />
        </div>
        <div className="prof-dev-support-parent-wrapper">
          <div className="prof-dev-support-parent">
            <div className="dev-support-parent">
              <div className="rectangle-parent2">
                <div className="frame-child4" />
                <div className="div1">02</div>
              </div>
              <div className="dev-support-child">
                <h1 className="professional-development">
                  Professional Development
                </h1>
                <p className="vast-network-connects">
                  Vast network connects to diverse job opportunities worldwide.
                </p>
              </div>
            </div>
            <div className="dev-support-parent1">
              <div className="rectangle-parent3">
                <div className="frame-child5" />
                <div className="div2">04</div>
              </div>
              <div className="continuous-support-parent">
                <h1 className="continuous-support">
                  <p className="continuous">{`Continuous `}</p>
                  <p className="support">Support</p>
                </h1>
                <p className="continuous-support-guidance">
                  Continuous support, guidance, and expertise for your career
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
