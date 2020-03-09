import React from "react";

const Notification = ({ notification }) => {
  console.log(notification)
  const stylesSuccess = {
    backgroundColor: "lightgray",
    fontSize: 8,
    padding: 4,
    marginTop: 6,
    marginBottom: 6,
    color: "green",
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 2
  }

  const stylesFailed = {
    backgroundColor: "lightgray",
    fontSize: 8,
    padding: 4,
    marginTop: 6,
    marginBottom: 6,
    color: "red",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2
  }
  if (notification === null) {
    return (
      <></>
    )
  } else {
    return (
      <div style={notification.status !== "failed" ? stylesSuccess : stylesFailed}>
        <h1>{notification.status !== "failed" ? notification : notification.msg}</h1>
      </div>
    )
  }
}

export default Notification