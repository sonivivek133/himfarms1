import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To HimFarms</h1>
          <p>
          HimFarms is a vibrant online marketplace dedicated to promoting a healthy and sustainable lifestyle.We offer a curated range of genuine, handpicked Himalayan products delivered straight to your door. We are dedicated to bridging the gap for local businesses, self-help groups, and FPOs in the Himalayan region. We understand their challenges in accessing broader markets due to gaps in branding, packaging, quality control, and market demand knowledge.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
