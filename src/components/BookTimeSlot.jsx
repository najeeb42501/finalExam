import React from "react";
import { useFormik } from "formik";

function BookTimeSlot() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        name="start"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookTimeSlot;
