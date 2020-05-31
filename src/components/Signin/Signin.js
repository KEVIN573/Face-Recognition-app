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
    <React.Fragment>
      <Formik initialValues={{ name: '', email: '', subject: '', message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="contact-form" noValidate>

          <div className="field-bag">
            <Field type="text" className='form-field' id="name"  name="name" placeholder='Name'/>
            <ErrorMessage name="name" className="errorMsg" component="p" />
          </div> 

          <div className="field-bag">
            <Field type="email" className='form-field' id="email"  name="email" placeholder='Email'/>
            <ErrorMessage name="email" className="errorMsg" component="p"/>
          </div> 

          <div className="field-bag">
            <Field type="text" className='form-field' id="subject" name="subject"  placeholder='Subject'/>
            <ErrorMessage name="subject" className="errorMsg" component="p"/>
          </div>

          <div className="field-bag">
            <Field className='form-field' id="message" name="message" component="textarea" placeholder='Message'/>
            <ErrorMessage name="message" className="errorMsg" component="p" />
          </div>

            <div className='btn-container'>
              <button type="submit" disabled={isSubmitting} className="btn-submit"><span>Send</span></button>
              
            </div>

            {serverState && (
              <p className={!serverState.ok ? "errorMsg" : ""}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Signin;

