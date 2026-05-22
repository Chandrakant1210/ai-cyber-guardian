import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", threats: 2 },
  { day: "Tue", threats: 5 },
  { day: "Wed", threats: 3 },
  { day: "Thu", threats: 8 },
  { day: "Fri", threats: 6 },
];

function ThreatChart() {
  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "20px",
        border: "1px solid #06b6d4",
      }}
    >
      <h2
        style={{
          color: "#06b6d4",
          marginBottom: "20px",
        }}
      >
        Threat Activity Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="threats"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ThreatChart;