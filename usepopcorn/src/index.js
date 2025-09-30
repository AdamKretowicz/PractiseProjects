import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating.js";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} /> */}

    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
