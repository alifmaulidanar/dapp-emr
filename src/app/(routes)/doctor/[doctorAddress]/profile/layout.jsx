import "./../../../../globals.css";
import Navbar from "../../../../../components/_navbar";

export const metadata = {
  title: "Profil Pasien",
  description: "EMR with Blockchain",
};

export default function PatientProfileLayout({ children }) {
  const navItems = [
    {
      text: "Daftar Pasien",
      linkToPage: "/doctor/123/dashboard",
      color: "gray",
    },
    {
      text: "Profil Dokter",
      linkToPage: "/doctor/123/profile",
      color: "blue",
    },
  ];

  const navbarProps = {
    title: "Eka Hospital",
    buttons: [
      {
        text: "Informasi Akun",
        href: "/patient/0x66E167fDd23614b58A4459C1C875C6705f550ED6/profile",
        className:
          "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0",
      },
    ],
    navItems: navItems,
  };

  return (
    <>
      <Navbar {...navbarProps} />
      {children}
    </>
  );
}
