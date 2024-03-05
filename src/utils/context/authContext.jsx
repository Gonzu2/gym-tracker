import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getUserOnLoad(token);
    }
  }, []);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function getUserOnLoad(token) {
    try {
      const response = await axios.get("http://localhost:4001/user/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setUser(response.data.user);
      } else {
        Cookies.remove("token");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogout(e) {
    e.preventDefault();
    Cookies.remove("token");
    setUser(null);
    navigate("/");
  }

  async function handleLogin(user) {
    setUser(user);
    navigate("/dashboard");
  }

  async function handleRegister(user) {
    setUser(user);
    navigate("/dashboard");
  }

  const contextData = useMemo(() => ({
    getUserOnLoad,
    handleLogout,
    handleLogin,
    handleRegister,
    user,
  }));

  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div
          className={` ${
            loading ? "flex" : "hidden"
          } absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-60 items-center justify-center`}
        >
          <div className="w-[120px] h-[120px] rounded-[50%] border-t-[16px] border-t-transparent border-[16px] animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
