import { useMemo } from "react";
import PropTypes from "prop-types";
import "./jobs-category-parent.css";

const JobsCategoryParent = ({
  className = "",
  maskGroup,
  finance,
  propMinWidth,
  propDisplay,
}) => {
  const financeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div className={`jobs-category-parent1 ${className}`}>
      <div className="jobs-category-parent-item" />
      <div className="mask-group-container">
        <img className="mask-group-icon1" alt="" src={maskGroup} />
      </div>
      <div className="finance-parent">
        <b className="finance" style={financeStyle}>
          {finance}
        </b>
        <div className="jobs-available1">235 Jobs Available</div>
      </div>
    </div>
  );
};

JobsCategoryParent.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  finance: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default JobsCategoryParent;
