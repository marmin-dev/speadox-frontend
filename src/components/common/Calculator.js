import { useState } from "react";
import { SabineCalculator, SoundSpeedCalcuator } from "./CalculatorSets";

const Calculator = () => {
  const [condition, setCondition] = useState("speed");
  const changeClick = (cond) => {
    setCondition(cond);
  };
  return (
    <div>
      <div className="flex flex-tabs">
        <ul className="tab-list">
          <li>
            <a
              href="#"
              data-tab="tab-1"
              className={condition == "speed" ? "active" : "inactive"}
              onClick={() => changeClick("speed")}
            >
              음속 계산기
            </a>
          </li>
          <li>
            <a
              href="#"
              data-tab="tab-2"
              className={condition == "sabine" ? "active" : "inactive"}
              onClick={() => changeClick("sabine")}
            >
              Sabine 방정식
            </a>
          </li>
        </ul>

        <div className="tabs">
          {condition == "speed" ? <SoundSpeedCalcuator /> : null}
          {condition == "sabine" ? <SabineCalculator /> : null}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
