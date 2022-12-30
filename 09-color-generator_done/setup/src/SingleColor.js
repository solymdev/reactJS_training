import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const ALERT_TIMEOUT = 3000

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(",")
  const hexValue = `#${hexColor}`

  const handleButtonPressed = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, ALERT_TIMEOUT)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleButtonPressed}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

SingleColor.propTypes = {
  rgb: PropTypes.number.isRequired,
  weigth: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  hexColor: PropTypes.string.isRequired,
}

export default SingleColor
