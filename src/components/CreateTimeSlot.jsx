import React from "react";
import { useFormik } from "formik";

function CreateTimeSlot() {
  const formik = useFormik({
    initialValues: {
      startTime: "",
      endTime: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="startTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <input
        name="endTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateTimeSlot;
