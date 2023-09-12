import "./../../../globals.css";
import Navbar from "./components/_patient";

export const metadata = {
  title: "Dashboard Patient",
  description: "EMR with Blockchain",
};

export default function PatientDashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
