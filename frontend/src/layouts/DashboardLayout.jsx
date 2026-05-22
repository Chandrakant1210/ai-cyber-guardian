import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          color: "white",
        }}
      >
       <>
  <Navbar />
  {children}
</>
      </div>
    </div>
  );
}

export default DashboardLayout;