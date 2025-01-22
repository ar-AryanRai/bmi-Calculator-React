import React, { useState } from "react";

const App = () => {
  const [bmi, setBmi] = useState(0.0);
  const [h, setH] = useState(0);
  const [w, setW] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "height") {
      setH(value);
    } else if (name === "weight") {
      setW(value);
    }
    if (h && w) {
      const heightInMeters = h / 100.0;
      const bmiValue = w / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="bg-[#1c1c1c] text-white h-[100vh] max-w-[100vw] flex justify-center items-center">
      <div className="container w-[50%] h-[50%] p-4">
        <div className="heading h-[30%] flex justify-center items-center bg-blue-400 font-bold text-4xl underline mb-2 rounded-lg">
          <h1>BMI Calculator</h1>
        </div>
        <div className="inputs bg-green-400 h-[20%] content-center text-xl font-semibold rounded-lg">
          <div>
            <label className="pl-12 pr-4" htmlFor="height">
              Height (in cm)
            </label>
            <input
              className="w-[25%]"
              type="range"
              name="height"
              id="height"
              min={50}
              max={230}
              value={h}
              onChange={(e) => handleChange(e)} // Call handleChange with parentheses
            />
            <span className="pl-8">{h} cm</span>
          </div>
          <div>
            <label className="pl-12 pr-4" htmlFor="weight">
              Weight (in kg)
            </label>
            <input
              className="w-[25%]"
              type="range"
              name="weight"
              id="weight"
              min={5}
              max={200}
              value={w}
              onChange={(e) => handleChange(e)} // Call handleChange with parentheses
            />
            <span className="pl-8">{w} kg</span>
          </div>
        </div>
        <div className="outputs content-center h-[20%] font-semibold text-xl bg-[#c50a3b] mt-2 rounded-lg">
          <h2 className="text-center">
            BMI ={" "}
            <span
              className={
                bmi <= 18.5
                  ? "bg-blue-400 border-[3px] rounded-lg px-4 py-1"
                  : bmi <= 24.9
                  ? "bg-green-400 border-[3px] rounded-lg px-4 py-1"
                  : bmi <= 34.9
                  ? "bg-orange-400 border-[3px] rounded-lg px-4 py-1"
                  : "bg-red-400 border-[1px] rounded-lg px-4 py-1"
              }
            >
              {bmi}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
