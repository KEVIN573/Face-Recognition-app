import React, { useState } from "react";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().max(15, 'Must be 15 characters or less').required('Name is Required'),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  subject:Yup.string().max(20, 'Must be 30 characters or less').required('Subject is Required'),
  message: Yup.string().max(100, 'Must be 100 characters or less').required("Message is Required")
});

const Signin = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://warm-sea-20579.herokuapp.com/send",
      data: values
    })
    // https://warm-sea-20579.herokuapp.com
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, <p id='success-message'>Message sent successfully</p>);
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <main class="pa4 black-80">
    <form class="measure center">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph0 mh0">Sign In</legend>
        <div class="mt3">
          <label class="db fw6 lh-copy f6" for="email-address">Email</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address">
        </div>
        <div class="mv3">
          <label class="db fw6 lh-copy f6" for="password">Password</label>
          <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
        </div>
        <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
      </fieldset>
      <div class="">
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in">
      </div>
      <div class="lh-copy mt3">
        <a href="#0" class="f6 link dim black db">Sign up</a>
        <a href="#0" class="f6 link dim black db">Forgot your password?</a>
      </div>
    </form>
  </main>
  
  );
};

export default Signin;

