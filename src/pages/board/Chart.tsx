import { ResponsiveRadar } from "@nivo/radar";

export default function Chart() {
  const data = [
    {
      taste: "키워드1",
      me: 100,
      others: 47,
    },
    {
      taste: "키워드2",
      me: 100,
      others: 54,
    },
    {
      taste: "키워드3",
      me: 100,
      others: 91,
    },
    {
      taste: "키워드4",
      me: 100,
      others: 37,
    },
    {
      taste: "키워드5",
      me: 100,
      others: 72,
    },
    {
      taste: "키워드6",
      me: 100,
      others: 80,
    },
  ];
  return (
    <div style={{ height: 420, maxWidth: "100%" }}>
      <ResponsiveRadar
        data={data}
        keys={["me", "others"]}
        indexBy="taste"
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
    </div>
  );
}
