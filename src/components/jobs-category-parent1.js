import { useMemo } from "react";
import PropTypes from "prop-types";
import "./jobs-category-parent1.css";

const JobsCategoryParent1 = ({
  className = "",
  maskGroup,
  design,
  propMinWidth,
}) => {
  const designStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`jobs-category-parent ${className}`}>
      <div className="mask-group-wrapper">
        <img
          className="mask-group-icon"
          loading="lazy"
          alt=""
          src={maskGroup}
        />
      </div>
      <div className="job-category-name-parent">
        <b className="design" style={designStyle}>
          {design}
        </b>
        <div className="jobs-available">235 Jobs Available</div>
      </div>
      <div className="jobs-category-parent-child" />
    </div>
  );
};

JobsCategoryParent1.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  design: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default JobsCategoryParent1;
