import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import "./job-filters.css";

const JobFilters = ({ className = "" }) => {
  return (
    <div className={`job-filters ${className}`}>
      <div className="filter-options">
        <div className="rectangle-parent5">
          <div className="frame-child12" />
          <div className="filter-icons">
            <img
              className="app-store-icon1"
              loading="lazy"
              alt=""
              src="/app-store@2x.png"
            />
            <div className="filter-icons-inner">
              <div className="frame-child13" />
            </div>
            <div className="employment-type">
              <b className="full-time5">Full Time</b>
            </div>
          </div>
          <div className="job-categories">
            <div className="category-labels">
              <h3 className="email-marketing1">Email Marketing</h3>
            </div>
            <p className="join-our-team4">
              Join our team as an Email Marketing Specialist and lead our
              digital outreach efforts.
            </p>
          </div>
          <div className="details-buttons">
            <u className="more-details4">More Details</u>
            <div className="button-icons">
              <div className="icon-pairs">
                <img
                  className="first-icon-set"
                  alt=""
                  src="/first-icon-set.svg"
                />
                <img
                  className="second-icon-set"
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <GroupComponent
          spotify="/spotify@2x.png"
          visualDesigner="Visual Designer"
          vector="/first-icon-set.svg"
          vector1="/vector-11.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="unset"
          groupDivAlignSelf="stretch"
          visualDesignerColor="#fff"
          joinOurTeamColor="#fff"
          moreDetailsColor="#fff"
        />
        <GroupComponent
          spotify="/wordpress@2x.png"
          visualDesigner="Data Analyst"
          vector="/first-icon-set.svg"
          vector1="/vector-11.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="unset"
          groupDivAlignSelf="stretch"
          visualDesignerColor="#fff"
          joinOurTeamColor="#fff"
          moreDetailsColor="#fff"
        />
        <GroupComponent
          spotify="/slack@2x.png"
          visualDesigner="Content Writer"
          vector="/vector-61.svg"
          vector1="/vector-71.svg"
          propWidth="193px"
          propWidth1="48px"
          propMargin="unset"
          groupDivWidth="unset"
          groupDivAlignSelf="stretch"
          visualDesignerColor="#fff"
          joinOurTeamColor="#fff"
          moreDetailsColor="#fff"
        />
        <GroupComponent
          spotify="/figma@2x.png"
          visualDesigner="Plugin Developer"
          vector="/first-icon-set.svg"
          vector1="/vector-11.svg"
          propWidth="185px"
          propWidth1="40px"
          propMargin="0"
          groupDivWidth="unset"
          groupDivAlignSelf="stretch"
          visualDesignerColor="#fff"
          joinOurTeamColor="#fff"
          moreDetailsColor="#fff"
        />
      </div>
      <div className="filter-names1">
        <div className="filter-names-item" />
        <div className="background-shape" />
        <p className="minimum-qualification-bachelo-container">
          <span className="minimum-qualification-bachelo">
            <b>Minimum Qualification:</b>
            <span className="bachelor"> Bachelor</span>
          </span>
          <span className="experience-level-mid-level">
            <b>Experience Level:</b>
            <span className="mid-level"> Mid level</span>
          </span>
          <span className="experience-length-2-years">
            <b>Experience Length:</b>
            <span className="years"> 2 years</span>
          </span>
          <span className="location-san-francisco-usa">
            <b className="location">Location:</b>
            <span> San Francisco, USA</span>
          </span>
          <span className="application-deadline-120820">
            <b>Application Deadline:</b>
            <span className="span"> 12/08/2022</span>
          </span>
          <span className="salary-range-105000-150">
            <b className="salary-range">Salary Range</b>
            <span className="span1">:</span>
            <b className="b">{` `}</b>
            <span>$ 105,000 - 150,000</span>
          </span>
          <span className="blank-line">
            <span className="blank-line1">&nbsp;</span>
          </span>
          <span className="job-description">
            <b>Job description</b>
          </span>
          <span className="we-are-searching-for-a-laravel">
            <span className="we-are-searching">
              We are searching for a Laravel developer to build web applications
              for our company. In this role, you will design and create projects
              using Laravel framework and PHP, and assist the team in delivering
              high-quality web applications, services, and tools for our
              business.To ensure success as a Laravel developer you should be
              adept at utilizing Laravel's GUI and be able to design a PHP
              application from start to finish. A top-notch Laravel developer
              will be able to leverage their expertise and experience of the
              framework to independently produce complete solutions in a short
              turnaround time.
            </span>
          </span>
          <span className="blank-line2">
            <span className="blank-line3">&nbsp;</span>
          </span>
          <span className="laravel-developer-requirements">
            <b>Laravel Developer Requirements:</b>
          </span>
          <ul className="a-degree-in-programming-compu">
            <li className="a-degree-in-programming-compu1">
              <span>
                A degree in programming, computer science, or a related field.
              </span>
            </li>
            <li className="experience-working-with-php-p">
              <span>
                Experience working with PHP, performing unit testing, and
                managing APIs such as REST.
              </span>
            </li>
            <li className="a-solid-understanding-of-appli">
              <span>
                A solid understanding of application design using Laravel.
              </span>
            </li>
            <li className="knowledge-of-database-design-a">
              <span>Knowledge of database design and querying using SQL.</span>
            </li>
            <li className="proficiency-in-html-and-javasc">
              <span>
                Proficiency in HTML and JavaScript. Experience developing in Vue
                is considered a plus.
              </span>
            </li>
            <li className="practical-experience-using-the">
              <span>Practical experience using the MVC architecture.</span>
            </li>
            <li className="the-ability-to-work-on-lamp-de">
              <span>The ability to work on LAMP development environment</span>
            </li>
            <li className="problem-solving-skills-and-cri">
              <span>Problem-solving skills and critical mindset.</span>
            </li>
            <li className="great-communication-skills">
              <span>Great communication skills.</span>
            </li>
            <li className="the-desire-and-ability-to-lear">
              <span>The desire and ability to learn.</span>
            </li>
          </ul>
          <span className="blank-line4">
            <span>&nbsp;</span>
          </span>
          <span className="responsibilities">
            <b>Responsibilities:</b>
          </span>
          <ul className="discussing-project-aims-with-t">
            <li className="discussing-project-aims-with-t1">
              <span>
                Discussing project aims with the client and development team.
              </span>
            </li>
            <li className="designing-and-building-web-app">
              <span>
                Designing and building web applications using Laravel.
              </span>
            </li>
            <li className="troubleshooting-issues-in-the">
              <span>
                Troubleshooting issues in the implementation and debug builds.
              </span>
            </li>
            <li className="working-with-front-end-and-bac">
              <span>
                Working with front-end and back-end developers on projects.
              </span>
            </li>
            <li className="testing-functionality-for-user">
              <span>Testing functionality for users and the backend.</span>
            </li>
            <li className="ensuring-that-integrations-run">
              <span>Ensuring that integrations run smoothly.</span>
            </li>
            <li className="scaling-projects-based-on-clie">
              <span>Scaling projects based on client feedback.</span>
            </li>
            <li className="recording-and-reporting-on-wor">
              <span>Recording and reporting on work done in Laravel.</span>
            </li>
            <li className="maintaining-web-based-applicat">
              <span>Maintaining web-based applications.</span>
            </li>
            <li className="presenting-work-in-meetings-wi">
              <span>
                Presenting work in meetings with clients and management.
              </span>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

JobFilters.propTypes = {
  className: PropTypes.string,
};

export default JobFilters;
