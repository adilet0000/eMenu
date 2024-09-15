// src/pages/SuccessPage.jsx
import React from 'react';
import classes from "../style/SuccessPage.module.css"

const SuccessPage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Order Successfully Placed!</h1>
      <p>Thank you for your order. We will process it shortly.</p>
    </div>
  );
};

export default SuccessPage;