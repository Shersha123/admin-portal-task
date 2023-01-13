import React, { useEffect} from "react";
import { useFormik } from "formik"
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'


function EditUser() {
  const params = useParams()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter name ";
      }

      if (values.name.length < 5) {
        errors.name = "Please enter greater than 5";
      }

      if (values.position === "") {
        errors.position = "Enter current Position ";
      }

      return errors;
    },

    onSubmit: async (values) => {
    await axios.put(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/users/${params.id}`, values)
    navigate("/portal/users")
  },
  });

  useEffect(() => {
  loadUser()
  },[])

  let loadUser = async () => {
    try {
let user = await axios.get(`https://6300f2429a1035c7f8fb32ef.mockapi.io/users/users/${params.id}`)   
    formik.setValues({
      name:user.data.name,
      position: user.data.position,
      office: user.data.office,
      age: user.data.age,
      startDate: user.data.startDate,
      salary:user.data.salary,
    })  
    }
   catch (error) {

  }
}
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>name</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "orange" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                className={`form-control ${
                  formik.errors.position ? `input-error` : ``
                }`}
                type={"text"}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: "orange" }}>{formik.errors.position}</span>
            </div>

            <div className="col-lg-6">
              <label>Office</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>

            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>

            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.startDate}
                onChange={formik.handleChange}
                name="startDate"
              />
            </div>

            <div className="col-lg-6">
              <label>Salary</label>
              <input
                className="form-control"
                type={"text"}
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

export default EditUser;