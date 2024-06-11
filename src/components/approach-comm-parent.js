import { useMemo } from "react";
import PropTypes from "prop-types";
import "./approach-comm-parent.css";

const ApproachCommParent = ({
  className = "",
  prop,
  personalizedApproach,
  personalizedApproachUniqu,
  propWidth,
  propAlignSelf,
  propWidth1,
  propPadding,
  propMinWidth,
}) => {
  const approachCommParentStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`approach-comm-parent ${className}`}
      style={approachCommParentStyle}
    >
      <div className="rectangle-parent1" style={frameDivStyle}>
        <div className="frame-child3" />
        <div className="div" style={divStyle}>
          {prop}
        </div>
      </div>
      <div className="approach-comm-child">
        <h1 className="personalized-approach">{personalizedApproach}</h1>
        <p className="personalized-approach-unique">
          {personalizedApproachUniqu}
        </p>
      </div>
    </div>
  );
};

ApproachCommParent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  personalizedApproach: PropTypes.string,
  personalizedApproachUniqu: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ApproachCommParent;
