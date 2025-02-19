import React from 'react'
import "./insta.css"
function Insta() {
  return (
   
    <div className="container">
    <div className="content">
      <i
        style={{
          backgroundImage:
            'url("https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png")',
          backgroundPosition: "0px -52px",
          backgroundSize: "auto",
          width: 175,
          height: 51,
          backgroundRepeat: "no-repeat",
          display: "inline-block"
        }}
        role="img"
        className=""
        aria-label="Instagram"
        data-visualcompletion="css-img"
      />
      <form className="content__form">
        <div className="content__inputs">
          <label>
            <input required="" type="text" />
            <span>Phone number, username, or email</span>
          </label>
          <label>
            <input required="" type="password" />
            <span>Password</span>
          </label>
        </div>
        <button>Log In</button>
      </form>
      <div className="content__or-text">
        <span />
        <span>OR</span>
        <span />
      </div>
      <div className="content__forgot-buttons">
        <button>
          <span>
            <svg
              className=""
              xmlSpace="preserve"
              style={{ enableBackground: "new 0 0 512 512" }}
              viewBox="0 0 408.788 408.788"
              y={0}
              x={0}
              height={512}
              width={512}
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  className=""
                  data-original="#475993"
                  fill="#475993"
                  d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 0 1-8.954-8.92l-.182-47.087a8.955 8.955 0 0 1 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 0 1 8.955 8.955v39.704a8.955 8.955 0 0 1-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 0 1-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                />
              </g>
            </svg>
          </span>
          <span>Log in with Facebook</span>
        </button>
        <button>Forgot password?</button>
      </div>
    </div>
  </div>
  
  )
}

export default Insta
