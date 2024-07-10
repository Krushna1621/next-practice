import LineChart from "./line-chart";

function Barchart() {
  return (
    <div>
      <h1>Bar Chart</h1>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <Barchart />
      <LineChart />
    </div>
  );
}
