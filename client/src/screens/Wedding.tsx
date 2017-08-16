import * as React from "react";
import {HeroImage} from "./wedding/HeroImage";
import {WhenAndWhere} from "./wedding/WhereAndWhen";
import Rsvp from "./wedding/Rsvp";
import {UserDetails} from "../models/authentication";

type WeddingProps = { user: UserDetails }

export const Wedding = (props: WeddingProps) => (
  <div className="Wedding">
    <HeroImage />
    <WhenAndWhere />
    <Rsvp user={props.user} />
  </div>
);

export default Wedding;