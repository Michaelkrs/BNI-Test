import { useEffect, useState } from "react";
import {
  useEditUserMutation,
  useGetUserDetailQuery,
} from "../services/userApi";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useParams } from "react-router-dom";

function EditUserPage() {
  const [formData, setFormData] = useState({
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    gender: undefined,
  });

  const [error, setError] = useState({
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
  });

  const { id } = useParams();
  const { data } = useGetUserDetailQuery({ id });
  const navigate = useNavigate();

  const [editUser] = useEditUserMutation();

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormEmpty = Object.values(formData).some(
    (value) => !value || value === ""
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.firstName || formData.firstName === "") {
      errors = {
        ...errors,
        firstName: "First name is required!",
      };
    }

    if (!formData.lastName || formData.lastName === "") {
      errors = {
        ...errors,
        lastName: "Last name is required!",
      };
    }
    if (!formData.age || formData.age === "") {
      errors = {
        ...errors,
        age: "Age is required!",
      };
    }
    if (!formData.gender || formData.gender === "") {
      errors = {
        ...errors,
        gender: "Gender is required!",
      };
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      const res = await editUser({ userData: formData, id });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      formData={formData}
      type="Edit"
      error={error}
      isFormEmpty={isFormEmpty}
    />
  );
}

export default EditUserPage;
