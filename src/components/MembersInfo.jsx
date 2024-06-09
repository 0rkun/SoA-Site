import PropTypes from "prop-types";

function MembersInfo({ name, title, image }) {
  return (
    <div className="membersInfo">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <h6>{title}</h6>
    </div>
  );
}

MembersInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MembersInfo;
