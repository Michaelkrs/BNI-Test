/* eslint-disable react/prop-types */
function Form({
  onChangeHandler,
  submitHandler,
  formData,
  type,
  error,
  isFormEmpty,
}) {
  return (
    <>
      <h1>{type} User</h1>
      <div
        className="border rounded shadow-sm p-3 mt-3"
        style={{ width: "500px" }}
      >
        <form action="" onSubmit={submitHandler}>
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              onChange={onChangeHandler}
              value={formData?.firstName}
            />
            {error?.firstName && (
              <p style={{ color: "red" }}>{error.firstName}</p>
            )}
          </div>

          <div className="mt-2">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="password"
              id="lastName"
              name="lastName"
              className="form-control"
              onChange={onChangeHandler}
              value={formData?.lastName}
            />
            {error?.lastName && (
              <p style={{ color: "red" }}>{error.lastName}</p>
            )}
          </div>

          <div className="mt-2">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              onChange={onChangeHandler}
              value={formData?.age}
            />
            {error?.age && <p style={{ color: "red" }}>{error.age}</p>}
          </div>

          <div className="mt-2">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              onChange={onChangeHandler}
              value={formData?.gender}
            >
              <option value="">--SELECT--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {error?.gender && <p style={{ color: "red" }}>{error.gender}</p>}
          </div>

          <button
            className="btn btn-primary mt-4"
            type="submit"
            disabled={isFormEmpty}
          >
            {type} user
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
