import React from "react";

import "../../styles/error.css";

interface ErrorProps {
  error: boolean;
}

export default function Error({ error }: ErrorProps) {
  return (
    <React.Fragment>
      {error && (
        <div className="error-container">
          <p className="error-message">You need to write a message to send.</p>
        </div>
      )}
    </React.Fragment>
  );
}
