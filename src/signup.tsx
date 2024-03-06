import React from 'react';

const Signup = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bloom Lotion | Registration</title>
        <link rel="stylesheet" href="signup.css" />
      </head>
      <style>
        {`
          p {
            text-align: center;
          }
        `}
      </style>
      <body>
        <div className="container">
          <div className="logo"></div>
          <form action="signup.php" method="POST">
            <div className="container">
              <h3>
                Create an Account In<span> Fique </span>
              </h3>
              <div className="form-group">
                <label htmlFor="first name">First Name</label>
                <input type="text" id="first name" name="firstName" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="last name">Last Name</label>
                <input type="text" id="last name" name="lastName" className="form-control" />
              </div>
              <label htmlFor="email">
                E-mail
                <input type="email" id="email" name="email" required /><br />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" name="password" required /><br />
              </label>
              <label htmlFor="number">
                Phone Number
                <input type="number" id="number" name="number" required />
              </label>
              <p>
                Already have an account?
                <a className="hop" href="login.html" id="tst">
                  Login
                </a>
                <br /><br />
              </p>
              <button type="submit" id="next">Next</button>
            </div>
          </form>
        </div>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      </body>
    </html>
  );
};

export default Signup;