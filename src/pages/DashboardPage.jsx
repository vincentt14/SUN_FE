import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import UserContext from "../context/UserContext";

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="mt-[105px] bg_login w-full">
      <div className="container flex flex-col justify-center items-center text-center">
        <div className="my-20">
          <h1 className="font-bold text-3xl mb-6 text_shadow">Hello</h1>
          <div className="md:w-[500px]">
            <div className="flex flex-col border-2 p-5 border-secondary justify-center items-center rounded-2xl bg-white">
              <div className="my-8">
                <p>
                  Token :<span className="ml-4 border p-3 rounded-2xl">{user}</span>
                </p>
              </div>
              <CustomButton link="/" title="Back to home" style="border-2" parentStyle="my-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
