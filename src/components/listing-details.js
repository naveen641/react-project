import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./listing-details.css";

const ListingDetails = ({ className = "" }) => {
  return (
    <div className={`listing-details ${className}`}>
      <div className="product-description">
        <div className="listing-actions">
          <TextField
            className="listing-actions-child"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="18px" height="18px" src="/layer-2.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "48px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                paddingRight: "16px",
                borderRadius: "10px",
              },
              "& .MuiInputBase-input": { color: "rgba(255, 255, 255, 0.5)" },
            }}
          />
        </div>
        <div className="filter-names">
          <div className="filter-names-child" />
          <div className="job-info">
            <img
              className="telegram-icon"
              loading="lazy"
              alt=""
              src="/telegram@2x.png"
            />
            <div className="job-title">
              <div className="phpjs-developer-full-container">
                <span>{`PHP/JS Developer `}</span>
                <span className="full-time4">(Full Time)</span>
              </div>
            </div>
          </div>
          <div className="frame-parent6">
            <button className="group-button">
              <div className="frame-child10" />
              <a className="view-company">View Company</a>
            </button>
            <Button
              className="frame-child11"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#38ef7d",
                borderRadius: "10px",
                "&:hover": { background: "#38ef7d" },
                height: 48,
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingDetails.propTypes = {
  className: PropTypes.string,
};

export default ListingDetails;
