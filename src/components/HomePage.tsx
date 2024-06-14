import * as React from "react";

import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Task Manager App</h1>
      <p>
        Manage your tasks efficiently and stay organized. Sign up or log in to
        get started.
      </p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
