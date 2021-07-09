import React, { useState } from "react";

import { saveShippingAddress } from "../src/services/shippingService"

const FORM_STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED"
}

// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
};


export default function Checkout({ dispatch }) {
  const [address, setAddress] = useState(emptyAddress);
  const [status, setStatus] = useState(FORM_STATUS.IDLE)
  const [error, setError] = useState("")
  const [touched, setTouched] = useState({})

  const errors = getErrors(address)
  const isValid = Object.keys(errors).length === 0

  function handleChange(e) {
    e.persist()
    setAddress((currentAddress) => {
      return {
        ...currentAddress, [e.target.id]: e.target.value
      }
    })
  }

  function handleBlur(event) {
    event.persist()
    setTouched((curr) => {
      return { ...curr, [event.target.id]: true }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus(FORM_STATUS.SUBMITTING)

    if (isValid) {
      try {
        await saveShippingAddress(address)
        dispatch({ type: "empty" })
        setStatus(FORM_STATUS.COMPLETED)
      } catch (error) {
        setError(error)
      }
    } else {
      setStatus(FORM_STATUS.SUBMITTED)
    }
  }

  function getErrors(address) {
    let result = {}
    if (!address.city) result.city = "city required";
    if (!address.country) result.country = "country required";
    return result
  }

  if (error) throw error;

  if (status === FORM_STATUS.COMPLETED) return <h1>Thanks for the purchase.</h1>

  return (
    <>
      <h1>Shipping Info</h1>
      {
        !isValid && status === FORM_STATUS.SUBMITTED && (
          <div role="alert">
            <p>Please fix the errors</p>
            {Object.keys(errors).map((key) => {
              return <li key={key}>{errors[key]}</li>
            })}
          </div>
        )
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            id="city"
            type="text"
            value={address.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <p role="alert">
            {(touched.city || status === FORM_STATUS.SUBMITTED) && errors.city}
          </p>
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            id="country"
            value={address.country}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
          </select>
          <p role="alert">
            {(touched.country || status === FORM_STATUS.SUBMITTED) && errors.country}
          </p>
        </div>

        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Save Shipping Info"
            disabled={status === FORM_STATUS.SUBMITTING}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
}
