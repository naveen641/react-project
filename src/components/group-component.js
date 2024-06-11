import { useMemo } from "react";
import PropTypes from "prop-types";
import "./group-component.css";

const GroupComponent = ({
  className = "",
  onClick,
  spotify,
  visualDesigner,
  vector,
  vector1,
  propWidth,
  propWidth1,
  propMargin,
  groupDivWidth,
  groupDivAlignSelf,
  visualDesignerColor,
  joinOurTeamColor,
  moreDetailsColor,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spotifyIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const visualDesignerStyle = useMemo(() => {
    return {
      margin: propMargin,
      color: visualDesignerColor,
    };
  }, [propMargin, visualDesignerColor]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      alignSelf: groupDivAlignSelf,
    };
  }, [groupDivWidth, groupDivAlignSelf]);

  const joinOurTeamStyle = useMemo(() => {
    return {
      color: joinOurTeamColor,
    };
  }, [joinOurTeamColor]);

  const moreDetailsStyle = useMemo(() => {
    return {
      color: moreDetailsColor,
    };
  }, [moreDetailsColor]);

  return (
    <div className={`group-div ${className}`} style={groupDivStyle} onClick={onClick}>
      <div className="frame-child6" />
      <div className="spotify-parent" style={frameDiv1Style}>
        <img
          className="spotify-icon"
          loading="lazy"
          alt=""
          src={spotify}
          style={spotifyIconStyle}
        />
        <div className="line-wrapper">
          <div className="frame-child7" />
        </div>
        <div className="full-time-wrapper">
          <b className="full-time2">Full Time</b>
        </div>
      </div>
      <div className="visual-designer-parent">
        <b className="visual-designer" style={visualDesignerStyle}>
          {visualDesigner}
        </b>
        <p className="join-our-team2" style={joinOurTeamStyle}>
          Join our team as an Email Marketing Specialist and lead our digital
          outreach efforts.
        </p>
      </div>
      <div className="more-details-parent">
        <u className="more-details2" style={moreDetailsStyle}>
          More Details
        </u>
        <div className="frame-wrapper1">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src={vector} />
            <img className="vector-icon1" alt="" src={vector1} />
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  spotify: PropTypes.string,
  visualDesigner: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propMargin: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivAlignSelf: PropTypes.any,
  visualDesignerColor: PropTypes.any,
  joinOurTeamColor: PropTypes.any,
  moreDetailsColor: PropTypes.any,
};

export default GroupComponent;
