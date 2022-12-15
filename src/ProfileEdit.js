import { useState, useEffect} from "react"

function ProfileEdit() {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      async function loadUsers() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userFromAPI = await response.json();
        console.log(userFromAPI)
        setUser(userFromAPI);
      }
      loadUsers();
    }, []); // Passing [] so that it only runs the effect once
  
    const changeHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
      }

    const submitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user.id}`,
          {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Content-type':'application/json;charset=UTF-8'
            },

          }
        );
        const savedData = await response.json();
        console.log("Saved user!", savedData);
      };


    if (user.id) {
      // `user.id` is truthy after the API call returns
      return (
        <form name="profileEdit" onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">User Name:
                <input
                    id="username"
                    name="username"
                    type="text"
                    required={true}
                    value={user.username}
                    onChange={changeHandler}
                />
            </label>
          </div>
          <div>
            <label htmlFor="email">Email:
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required={true}
                    value={user.email}
                    onChange={changeHandler} 
                />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }
    return "Loading...";
  }

  export default ProfileEdit