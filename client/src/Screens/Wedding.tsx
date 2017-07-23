import * as React from "react";
import {HeroImage} from "./Wedding/HeroImage";
import {WhenAndWhere} from "./Wedding/WhereAndWhen";
import {Rsvp} from "./Wedding/Rsvp";

export const Wedding = () => (
  <div className="Wedding">
    <HeroImage />
    <WhenAndWhere />
    <Rsvp />
  </div>
);

export default Wedding;