import React from "react";

export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token, "Content-Type": "application/json", Accept: "*/*" };
  } else {
    return { "Content-Type": "application/json", Accept: "*/*" };
  }
}
