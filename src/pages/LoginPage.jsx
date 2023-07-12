import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("bebas");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post("https://reqres.in/api/login", data);
      setUser(response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[105px] bg_login w-full">
      <div className="container flex flex-col justify-center items-center text-center">
        <div className="my-20">
          <h1 className="font-bold text-3xl mb-6 text_shadow">Login</h1>
          <form className="md:w-[500px]" onSubmit={onSubmitHandler}>
            <div className="flex flex-col border-2 p-5 border-secondary justify-center items-center rounded-2xl bg-white">
              <div className="my-5">
                <label>
                  Username :
                  <input type="text" placeholder="Enter Username" name="uname" value={username} className="ml-4 border p-3 rounded-2xl md:w-[300px]" onChange={(e) => setUsername(e.target.value)} />
                </label>
              </div>
              <div className="mb-5">
                <label>
                  Password :
                  <input type="text" placeholder="Enter Password" name="pass" value={password} className="ml-4 border p-3 rounded-2xl md:w-[300px]" onChange={(e) => setPassword(e.target.value)} />
                </label>
              </div>
              <button type="submit" className="mx-2 my-5">
                <p className="py-3 rounded-full bg-secondary font-semibold px-16">login</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
