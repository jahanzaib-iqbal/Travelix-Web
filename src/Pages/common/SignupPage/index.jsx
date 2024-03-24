import React, { useState } from "react";
import SignupImage from "../../../assets/images/TravelixBanner.png";
import { ReactComponent as BlueUnderline } from "../../../assets/icons/underlineBlue.svg";
import { Link } from "react-router-dom";
import "./styles.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Passwords don't match, display error message or take appropriate action
      alert("Passwords do not match");
      return;
    }
    // Logic for handling Signup
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="Signup-page-container">
        <div className="Signup-page">
          <div className="Signup-image-container">
            <img src={SignupImage} />
          </div>
          <div className="Signup-form-container">
            <div className="Signup-form">
              <div className="Signup-heading-container">
                <h1 className="Signup-section-heading">Signup</h1>
                <BlueUnderline className="underlineSvgSignup" />
              </div>

              <form className="Signup-box" onSubmit={handleSignup}>
                <div class="signup-user-box">
                  <input
                    type="email"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Email</label>
                </div>

                {/* ---Password--- */}

                <div class="signup-user-box">
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label>Password</label>
                </div>

                <div class="signup-user-box">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder=""
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label>Confirm Password</label>
                </div>

                <div className="Signup-btn-container">
                  <button type="submit" className="Signup-btn-submit">
                    Signup
                  </button>
                </div>
              </form>

              <div className="Signup-extra-links">
                Already have an account?
                <Link to="/login"> Login</Link>
              </div>

              {/* Other Signup */}

              <div className="other-signup-container">
                <span className="lines">Or Singup with</span>
                <div className="signup-social">
                  <a href="http://facebook.com/" target="_blank">
                    <svg
                    className="signup-social-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fff"
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                      />
                    </svg>
                  </a>
                  <a href="https://www.google.com/">
                    <svg
                    className="signup-social-icon"

                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <g fill="#fff">
                        <g clip-path="url(#akarIconsGoogleContainedFill0)">
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0m.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86"
                            clip-rule="evenodd"
                          />
                        </g>
                        <defs>
                          <clipPath id="akarIconsGoogleContainedFill0">
                            <path fill="#fff" d="M0 0h24v24H0z" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
