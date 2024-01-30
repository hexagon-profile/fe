import { ResponsiveRadar } from "@nivo/radar";
import { FC } from "react";

interface HexagonChartProps {
  data: {
    keyword: string;
    me?: number;
    others?: number;
  }[];
}

const HexagonChart: FC<HexagonChartProps> = (props) => {
  const { data } = props;
  return (
    <ResponsiveRadar
      maxValue={100}
      gridShape="linear"
      data={data}
      // keys={["me", "others"]}
      keys={[]}
      indexBy="keyword"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default HexagonChart;
