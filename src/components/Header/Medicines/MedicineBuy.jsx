import { useState } from "react";
import "./MedicineBuy.css";

const MedicineBuy = ({ addItemList }) => {
  const [medicineName, setMedicineName] = useState("");
  const [medicineDesc, setMedicineDesc] = useState("");
  const [medicineCost, setMedicineCost] = useState(0);

  const handleMedicineNameChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handleMedicineDescChange = (e) => {
    setMedicineDesc(e.target.value);
  };

  const handleMedicineCostChange = (e) => {
    setMedicineCost(e.target.value);
  };

  const handleAddItem = (name, desc, cost) => {
    if (
      medicineName.trim() !== "" &&
      medicineDesc.trim() !== "" &&
      medicineCost > 0
    ) {
      addItemList(name, desc, cost);
      setMedicineName("");
      setMedicineDesc("");
      setMedicineCost(0);
    } else {
      alert("Enter All Details To Add");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(medicineName);
  console.log(medicineDesc);
  console.log(medicineCost);

  return (
    <>
      <div className="center">
        <center>
          <div className="summary">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div>
                  <label htmlFor="itemName">Medicine Name</label>
                  <input
                    type="text"
                    id="itemName"
                    style={{ marginLeft: "5px" }}
                    onChange={handleMedicineNameChange}
                    value={medicineName}
                  />
                </div>
                <div>
                  <label htmlFor="itemDescription">Medicine Use</label>
                  <input
                    type="text"
                    id="itemDescription"
                    style={{ marginLeft: "10px" }}
                    onChange={handleMedicineDescChange}
                    value={medicineDesc}
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="cost">Medicine Cost</label>
                  <input
                    type="number"
                    id="cost"
                    style={{ marginLeft: "15px" }}
                    onChange={handleMedicineCostChange}
                    value={medicineCost}
                  />
                </div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "purple",
                    marginRight: "40px",
                  }}
                  onClick={() => {
                    handleAddItem(medicineName, medicineDesc, medicineCost);
                    console.log(medicineName);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default MedicineBuy;
