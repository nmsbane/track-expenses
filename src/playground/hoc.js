// higher order component - a component ( HOC ) that renders other component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please dont' share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login to view the info</p>
      )}
    </div>
  );
};

// requireAuthentication
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo info="this is the detail" isAdmin={false} />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo info="this is the detail" isAuthenticated={true} />,
  document.getElementById("app")
);
