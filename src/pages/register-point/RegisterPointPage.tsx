import { FC } from "react";
import HexagonChart from "../../components/hexagon-chart/HexagonChart";

interface RegisterPointPageProps {}

interface HexagonChartData {
  keyword: string;
  me?: number;
  others?: number;
}

const RegisterPointPage: FC<RegisterPointPageProps> = (props) => {
  const data: HexagonChartData[] = [
    {
      keyword: "키워드1",
      //   me: 100,
      //   others: 47,
    },
    {
      keyword: "키워드2",
      //   me: 100,
      //   others: 54,
    },
    {
      keyword: "키워드3",
      //   me: 100,
      //   others: 91,
    },
    {
      keyword: "키워드4",
      //   me: 100,
      //   others: 37,
    },
    {
      keyword: "키워드5",
      //   me: 100,
      //   others: 72,
    },
    {
      keyword: "키워드6",
      //   me: 100,
      //   others: 80,
    },
  ];

  return (
    <div style={{ height: 420, maxWidth: "100%" }}>
      <HexagonChart data={data} />
    </div>
  );
};

export default RegisterPointPage;
