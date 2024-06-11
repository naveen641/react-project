import JobsCategoryParent1 from "./jobs-category-parent1";
import JobsCategoryParent from "./jobs-category-parent";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`jobs-category-parent-parent ${className}`}>
      <JobsCategoryParent1 maskGroup="/mask-group@2x.png" design="Design" />
      <JobsCategoryParent1
        maskGroup="/mask-group-1@2x.png"
        design="Analyst"
        propMinWidth="84px"
      />
      <JobsCategoryParent1
        maskGroup="/mask-group-2@2x.png"
        design="Electrician"
        propMinWidth="113px"
      />
      <JobsCategoryParent maskGroup="/mask-group-3@2x.png" finance="Finance" />
      <div className="jobs-category-parent2">
        <div className="mask-group-frame">
          <img className="mask-group-icon2" alt="" src="/mask-group-4@2x.png" />
        </div>
        <div className="jobs-category-parent-inner" />
        <div className="technology-parent">
          <b className="technology">Technology</b>
          <div className="jobs-available2">235 Jobs Available</div>
        </div>
      </div>
      <JobsCategoryParent
        maskGroup="/mask-group-5@2x.png"
        finance="Engineering"
        propMinWidth="unset"
        propDisplay="unset"
      />
      <JobsCategoryParent
        maskGroup="/mask-group-6@2x.png"
        finance="Marketing"
        propMinWidth="111px"
        propDisplay="inline-block"
      />
      <JobsCategoryParent
        maskGroup="/mask-group-7@2x.png"
        finance="Programmer"
        propMinWidth="unset"
        propDisplay="unset"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
