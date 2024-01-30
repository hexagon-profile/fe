import { FC } from "react";
import HexagonChart from "../../components/hexagon-chart/HexagonChart";
import "./RegisterPointPage.scss";
import { useNavigate } from "react-router-dom";

interface RegisterPointPageProps {}

interface HexagonChartData {
  keyword: string;
  me?: number;
  others?: number;
}

const RegisterPointPage: FC<RegisterPointPageProps> = (props) => {
  const navigate = useNavigate();
  const data: HexagonChartData[] = [
    {
      keyword: "키워드1",
      // me: 100,
      // others: 47,
    },
    {
      keyword: "키워드2",
      // me: 100,
      // others: 54,
    },
    {
      keyword: "키워드3",
      // me: 100,
      // others: 91,
    },
    {
      keyword: "키워드4",
      // me: 100,
      // others: 37,
    },
    {
      keyword: "키워드5",
      // me: 100,
      // others: 72,
    },
    {
      keyword: "키워드6",
      // me: 100,
      // others: 80,
    },
  ];

  return (
    <div className="container">
      <p>본인이 생각하는 육각형 점수</p>
      <div className="chart-wrapper">
        <HexagonChart data={data} />
      </div>
      <div className="point-wrapper">
        <input placeholder="키워드1" />
        <input placeholder="키워드2" />
        <input placeholder="키워드3" />
        <input placeholder="키워드4" />
        <input placeholder="키워드5" />
        <input placeholder="키워드6" />
      </div>
      <button onClick={() => navigate("/share")}>다음</button>
    </div>
  );
};

export default RegisterPointPage;
