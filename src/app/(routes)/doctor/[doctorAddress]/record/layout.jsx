import "./../../../../globals.css";
import Navbar from "../../../../../components/_navbar";

export const metadata = {
  title: "Rekam Medis",
  description: "EMR with Blockchain",
};

export default function MedicalRecordLayout({ children }) {
  const navItems = [
    {
      text: "Daftar Rekam Medis",
      linkToPage: "/patient/123/dashboard",
      color: "blue",
    },
    {
      text: "Profil Pasien",
      linkToPage: "/patient/123/profile",
      color: "gray",
    },
  ];

  const navbarProps = {
    title: "Eka Hospital",
    navItems: navItems,
  };

  return (
    <>
      <Navbar {...navbarProps} />
      {children}
    </>
  );
}
