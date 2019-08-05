import React from "react";

import "./InputError.css";

/*======================================================================
// This functional component will display an error when no results are
// found within People Search.
======================================================================*/
const InputError = () => {
  return (
    <div className="input-error">
      Form incomplete. All three fields are required!
    </div>
  );
};

export default InputError;
