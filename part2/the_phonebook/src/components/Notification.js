import React from "react";

const Notification = ({ notification }) => {
  const styles = {
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
  if (notification === null) {
    return (
      <></>
    )
  } else {
    return (
      <div style={styles}>
        <h1>{notification}</h1>
      </div>
    )
  }
}

export default Notification