// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
      setShowDetails(!showDetails);
  };
    return ();
};

export default Event;
