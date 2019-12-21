import React from "react";

import "./homepage.styles.scss";
import { Directory } from "../../components/directory/directory.component";

export const HomePage: React.FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);
