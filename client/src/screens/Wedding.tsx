import * as React from "react";
import {HeroImage} from "./wedding/HeroImage";
import {WhenAndWhere} from "./wedding/WhereAndWhen";
import {Rsvp} from "./wedding/Rsvp";

export const Wedding = () => (
  <div className="Wedding">
    <HeroImage />
    <WhenAndWhere />
    <Rsvp />
  </div>
);

export default Wedding;