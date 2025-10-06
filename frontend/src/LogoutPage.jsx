import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LogoutPage.css";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login state
    localStorage.removeItem("isLoggedIn");

    // Show logout success toast
    toast.success("Logout successful 🗸", {
      position: "top-right",
      autoClose: 2500,
    });

    // Redirect to login after toast
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="lr-wrapper">
      <div className="lr-card">
        <img
          src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india-1024x1024.jpg"
          className="logimg"
          alt="logo"
        />
        <h2 className="lr-title success">Logging out...</h2>
        <p className="lr-message">
          You are being safely logged out. Redirecting to login page...
        </p>
      </div>

      {/* ✅ Toast container */}
      <ToastContainer />
    </div>
  );
}

export default LogoutPage;
