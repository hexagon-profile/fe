import { FC } from "react";
import "./SharePage.scss";
import HexagonChart from "../../components/hexagon-chart/HexagonChart";

interface SharePageProps {}

const SharePage: FC<SharePageProps> = (props) => {
  return (
    <>
      <div style={{ height: 420, maxWidth: "100%" }}>
        <HexagonChart
          data={[
            {
              keyword: "키워드1",
              me: 100,
              others: 47,
            },
            {
              keyword: "키워드2",
              me: 100,
              others: 47,
            },
            {
              keyword: "키워드3",
              me: 100,
              others: 47,
            },
          ]}
        />
      </div>
      <button>공유하기</button>
    </>
  );
};

export default SharePage;
