import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaPalette,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaArrowLeft,
  FaBuilding,
} from "react-icons/fa";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!item) return <p className="loading-text">Loading...</p>;

  return (
    <div className="product-page">
      {/* Back Button */}
      <button className="btn-primary" onClick={() => navigate(-1)}>
        <FaArrowLeft size={14} /> Back
      </button>

      <div className="product-container">
        {/* Left: Image */}
        <div className="image-box">
          <img src={item.image} alt={item.name} className="product-image" />
          <h2 className="image-caption">{item.name}</h2>
        </div>

        {/* Right: Details Table */}
        <div className="details-box">
          <h1 className="details-title">Product Information</h1>
          <table className="details-table">
            <tbody>
              <tr>
                <td>
                  <FaBuilding /> Brand
                </td>
                <td>{item.brand}</td>
              </tr>

              <tr>
                <td>
                  <FaPalette /> Color
                </td>
                <td>{item.color}</td>
              </tr>
              <tr>
                <td>
                  <FaMapMarkerAlt /> Location Lost
                </td>
                <td>{item.locationlost}</td>
              </tr>
              <tr>
                <td>
                  <FaCalendarAlt /> Date Lost
                </td>
                <td>{new Date(item.datelost).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>
                  <FaStar /> Unique Marks
                </td>
                <td>{item.uniquemarks}</td>
              </tr>
              <tr>
                <td>
                  <FaBuilding /> Address
                </td>
                <td>Lost & Found Department, 150 ft Ring Road, Rajkot</td>
              </tr>
            </tbody>
          </table>

          {/* Red Warning */}
          <div className="warning-box">
            ⚠️ Please bring the original bill and valid documents when claiming
            this item. Fraudulent claims will face strict legal action.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
