import "./../../../../globals.css";
import Navbar from "./../../../../../components/_navbar";

export const metadata = {
  title: "Profil Pasien",
  description: "EMR with Blockchain",
};

export default function PatientProfileLayout({ children }) {
  const navItems = [
    {
      text: "Daftar Rekam Medis",
      linkToPage: "/patient/123/dashboard",
      color: "gray",
    },
    {
      text: "Profil Pasien",
      linkToPage: "/patient/123/profile",
      color: "blue",
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
