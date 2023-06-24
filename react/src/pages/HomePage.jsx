import { Link } from "react-router-dom";
import { useGetUsersQuery, useDeleteUserMutation } from "../services/userApi";

function HomePage() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    const res = await deleteUser(id);
    console.log(res);
  };

  return (
    <>
      {isLoading && <h2>LOADING...</h2>}
      {error && <h2>ERROR...</h2>}

      <div className="d-flex flex-row flex-wrap gap-4 justify-content-center">
        {data?.users.map((user) => (
          <div
            className="card mb-3 shadow-sm"
            style={{ width: "540px" }}
            key={user.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {user.firstName} {user.lastName}
                  </h5>
                  <div className="card-text">Age: {user.age}</div>
                  <div className="card-text">Gender: {user.gender}</div>
                </div>
                <div className="card-body">
                  <Link className="btn btn-secondary" to={`/edit/${user.id}`}>
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deleteHandler(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
