import { useState } from "react";

const Homepage = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <div className="homepage">
          <h1>Welcome! </h1>
          <button
            type="button"
            className="btn"
            onClick={() => setisLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="homepage">
          <h1>Hey User! Please Login </h1>
          <button
            type="button"
            className="btn"
            onClick={() => setisLoggedIn(true)}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
export default Homepage;
