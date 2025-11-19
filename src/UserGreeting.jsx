import PropTypes from "prop-types";
function UserGreeting({ name="Guest", isLoggedIn=false }) {
  const welcomeMessage = <h1 className="Welcome">Welcome back, {name}!</h1>;
  const signUpMessage = <h1 className="SignUp">Please sign up.</h1>;
  return isLoggedIn ? welcomeMessage : signUpMessage;
}

UserGreeting.propTypes = {
  name: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
};


export default UserGreeting;
