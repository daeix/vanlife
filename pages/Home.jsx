import React from "react"
import { Link } from "react-router-dom"

import {
  BsQuestionSquare,
  BsTruck,
  BsArrowRightSquare,
  BsCashCoin,
} from "react-icons/bs"

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
      </div>

      <div className="home-page">
        <p className="home-page-text">
          Hit the open road on an epic adventure that puts you in the driving
          seat!
        </p>
      </div>

      <ul>
        <li>
          <BsTruck className="book-icon" />
          <div className="flex-description">
            <h2 className="title-description"> Range of great Vans to rent</h2>
            <p className="booking">
              We have a great range of vans for hire for all your needs
              including simple and luxury vans.
            </p>
          </div>
        </li>
        <li>
          <BsQuestionSquare className="book-icon" />
          <div className="flex-description">
            <h2 className="title-description">
              Questions? We’re here to help!
            </h2>
            <p className="booking">
              Our dedicated team is always on standby to assist you. Don’t
              hesitate to reach out to us at any time.
            </p>
          </div>
        </li>
        <li>
          <BsCashCoin className="book-icon" />
          <div className="flex-description">
            <h2 className="title-description">Book now, pay later</h2>
            <p className="booking">
              Booking early means you can get your hands on your dream Van at
              the right price, and spread the cost over easy, affordable chunks.
            </p>
          </div>
        </li>
        <li>
          <BsArrowRightSquare className="book-icon" />
          <div className="flex-description">
            <h2 className="title-description">
              More than a campervan rental website
            </h2>
            <p className="booking">
              At VanLife we do more than just find you the perfect motorhome for
              hire, our team utilise years of experience to make sure you have
              everything you need for your trip before you set off.
            </p>
          </div>
        </li>
      </ul>
    </>
  )
}
