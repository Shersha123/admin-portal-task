import axios from "axios";
import React from "react";
import { useFormik } from "formik"

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter username "
      }

      if (values.name.length < 5) {
        errors.name = "Please enter geaer than 5"
      }

      if (values.position === "") {
        errors.position = "Please enter Position "
      }

      return errors;
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://6300f2429a1035c7f8fb32ef.mockapi.io/users/users", values )
      alert("User Created")
    },
  });



  return (
    <>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input className='form-control'
                type={"text"}

                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"

              />
              <span style={{ color: 'red' }}>{formik.errors.name}</span>

            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input className={`form-control ${formik.errors.position ? `input-error` : ``}`}
                type={"text"}

                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: 'orange' }}>{formik.errors.position}</span>
            </div>

            <div className="col-lg-6">
              <label>Office</label>
              <input className='form-control' type={"text"}

                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>

            <div className="col-lg-6">
              <label>Age</label>
              <input className='form-control' type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>

            <div className="col-lg-6">
              <label>Start Date</label>
              <input className='form-control' type={"text"}

                value={formik.values.startDate}
                onChange={formik.handleChange}
                name="startDate"
              />
            </div>

            <div className="col-lg-6">
              <label>Salary</label>
              <input className='form-control' type={"text"}

                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>

            <div className="col-lg-6">
              <input
                className="btn-primary mt-2"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>

    </>
  );
}

export default CreateUser;