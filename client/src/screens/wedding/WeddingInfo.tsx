import * as React from 'react';
import {WeddingSection} from "./components/WeddingSection";
import {SectionTitle} from "./components/SectionTitle";
import './WeddingInfo.scss';
import {ContentBox} from "./components/ContentBox";
import {isDayGuest, UserDetails} from "../../models/authentication";
import {menu} from "../../models/menu";

type Props = {
  user: UserDetails,
}

export const WeddingInfo = (props: Props) => (
  <div className="WeddingInfo" id="WeddingInfo">
    <WeddingSection>
      <div className="content">

        <ContentBox title="The Venue">
          <div className="venue">
            <p>We're getting married at <a href="http://olddownestate.co.uk/" target="_blank">Old Down Manor</a>, 30 minutes north of Bristol and just off the M4 and M5.</p>
            <address className="venue-address">
              Old Down Estate<br />
              Foxholes Lane<br />
              Tockington<br />
              Bristol<br />
              BS32 4PG
            </address>
            <p>See <a target="blank" href="https://www.google.co.uk/maps/place/The+Manor+at+Old+Down+Estate/@51.5849614,-2.5595411,15z/data=!4m13!1m7!3m6!1s0x48719727138df2fb:0xcebc275216a6a821!2sOld+Down,+Bristol+BS32+4PJ!3b1!8m2!3d51.5863889!4d-2.555271!3m4!1s0x0:0x45b769202feffcb0!8m2!3d51.5869165!4d-2.5642133?hl=en">here</a> for a map and directions.</p>
          </div>
        </ContentBox>

        <ContentBox title="The Day">
          <div>
            {isDayGuest(props.user) &&
              <div>
                <p>Please arrive from 1pm, on 11th November 2017.</p>
                <p>The wedding ceremony will start at 2pm.</p>
                <p>After the ceremony there will be drinks, canapes and photographs.</p>
                <p>The wedding breakfast will follow.</p>
                <p>Evening guests will arrive from 7:30pm</p>
                <p>A live band will be performing from 9pm.</p>
                <p>The night will end at 1am.</p>
              </div>
            }
            {!isDayGuest(props.user) &&
              <div>
                <p>Please arrive from 7:30pm, on 11th November 2017.</p>
                <p>A live band will be performing from 9pm.</p>
                <p>An evening buffet will be provided.</p>
                <p>The night will end at 1am.</p>
              </div>
            }
          </div>
        </ContentBox>

        <ContentBox title="Travel">
          <div className="parking">
            <p>If you are bringing a car, there will be plenty of parking for wedding guests in the designated wedding car park of Old Down Estate.</p>
            <p>You will not need to park in the main Old Down car park. An attendant will be able to direct you on the day of the wedding when you arrive at Old Down Manor.</p>
          </div>
          <div className="taxis">
            <p>You may wish to book a taxi home in advance. The venue has recommended the following taxi firms:</p>
            <ul className="taxi-list">
              <li>Thornbury Hire - 01454 413404</li>
              <li>Severn Side Taxis - 07879 601011</li>
              <li>Streamline - 0117 9264001</li>
            </ul>
          </div>
        </ContentBox>

        <ContentBox title="Accommodation">
          <div>
            <p>There are plenty of nearby hotels if you are planning on staying the night before and/or the night of the wedding.</p>
            <p>Here some examples, but please don't hesitate to contact us if you'd like any further advice.</p>
            <ul className="hotel-list">
              <li><a href="http://www.premierinn.com/gb/en/hotels/england/bristol/bristol/bristol-alveston.html" target="_blank">Premier Inn Alveston</a></li>
              <li><a href="http://doubletree3.hilton.com/en/hotels/united-kingdom/doubletree-by-hilton-hotel-bristol-north-BSTBRDI/index.html" target="_blank">DoubleTree by Hilton Bristol North</a></li>
              <li><a href="http://www.alvestonhousehotel.co.uk/" target="_blank">Alveston House Hotel</a></li>
            </ul>
          </div>
        </ContentBox>

        {isDayGuest(props.user) &&
          <ContentBox title="Food">
            <div>
              <p>The Wedding Breakfast menu will be:</p>
              <ul className="menu-options">
                <li><span className="menu-key">Starter:</span> {menu.starter}</li>
                <li><span className="menu-key">Vegetarian option:</span> {menu.vegStarter}</li>
                <li><span className="menu-key">Main:</span> {menu.main}</li>
                <li><span className="menu-key">Vegetarian option:</span> {menu.vegMain}</li>
                <li><span className="menu-key">Pudding:</span> {menu.pudding}</li>
              </ul>
              <p>An evening buffet will be provided.</p>
              <p>Please let us know if you are vegetarian, and any other dietary requirements when you RSVP.</p>
            </div>
          </ContentBox>
        }

        <ContentBox title="Gift List">
          <div className="gift-list">
            <p>If you can join us to celebrate our wedding day, that is a gift enough in itself!</p>
            <p>However, if you would like to look at our John Lewis wedding gift list, it will be live on the <a href="https://www.johnlewisgiftlist.com/giftint/guestpassword?giftListNumber=123456" target="_blank">John Lewis website</a> from 30th September 2017.</p>
          </div>
          <div className="flower" />
        </ContentBox>

        <ContentBox title="Anything else?">
          <p>If you would like any more info, you can include questions in the RSVP form below, you can email us at <a href="mailto: wedding@example.com">wedding@example.com</a>, or ring Harriet on 01234 56789.</p>
        </ContentBox>

      </div>
    </WeddingSection>
  </div>
);