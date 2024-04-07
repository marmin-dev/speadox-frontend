import { useEffect, useState } from "react";
import { styled } from "styled-components";

const CalInput = styled.input`
  background-color: #cf7fff;
  border-radius: 2px;
`;

export const SoundSpeedCalcuator = () => {
  const [result, setResult] = useState("");
  const speed = (event) => {
    let tempreture = event.target.value;
    setResult(331.5 + 0.6 * tempreture);
  };
  return (
    <div>
      <CalInput type="number" placeholder="기온 입력" onChange={speed} />
      <CalInput type="text" placeholder="결과 값" value={result} readOnly />
    </div>
  );
};

export const SabineCalculator = () => {
  const [result, setResult] = useState(0);
  const [calVal, setCalVal] = useState({
    volume: "",
    surface: "",
    absortion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // 기존 상태를 복사하고 해당 입력 필드의 값을 업데이트
    setCalVal({
      ...calVal,
      [name]: value, // name에 해당하는 필드의 값을 업데이트
    });
  };

  useEffect(() => {
    if (calVal.volume != "" && calVal.surface != "" && calVal.absortion != "") {
      setResult((0.161 * calVal.volume) / (calVal.surface * calVal.absortion));
    }
  }, [calVal]);

  return (
    <div>
      <CalInput
        type="number"
        name="volume"
        placeholder="부피"
        value={calVal.volume}
        onChange={handleChange}
      />
      <CalInput
        type="number"
        name="surface"
        placeholder="전체 표면 넓이"
        value={calVal.surface}
        onChange={handleChange}
      />
      <CalInput
        type="number"
        name="absortion"
        placeholder="평균 흡음률"
        value={calVal.absortion}
        onChange={handleChange}
      />
      <CalInput type="text" value={result} readOnly />
    </div>
  );
};
