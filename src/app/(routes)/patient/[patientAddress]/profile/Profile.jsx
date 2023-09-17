import "./../../../../globals.css";
import { PatientIdentifier, PatientData } from "../components/_profile";

export const dynamic = "force-dynamic";

function Profile() {
  const patientIdentifierProps = {
    patientName: "Alif Maulidanar",
    patientImage: "/Alif.jpg",
    patientAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
    // recordDoctorName: "Dokter Suryono",
  };

  const patientDataProps = {
    patientName: "Alif Maulidanar",
    patientIdNumber: "18310893018601",
    patientBirthLocation: "Jakarta",
    patientBirthDate: "04/06/2002",
    patientGender: "Pria",
    patientBloodType: "O",
    patientMaritalStatus: "Tidak/Belum Menikah",
    patientReligion: "Islam",
    patientJob: "Mahasiswa",
    patientCitizenship: "Indonesia",
    patientPhone: "085819130187",
    patientEmail: "contoh@gmail.com",
    patientHomeAddress: "Jalan Melati",
    patientProvince: "Kepulauan Bangka Belitung",
    patientCity: "Jakarta Selatan",
    patientSubdistrict: "Tebet",
    patientVillage: "Tebet Timur",
    patientPostalCode: "12820",
    relativesName: "Danar",
    relativesIdNumber: "187318418601",
    relativesGender: "Pria",
    relativesBirthDate: "01/01/2002",
    relativesPhone: "1889146846",
    relativesRelation: "Keluarga",
    relativesHomeAddress: "Jalan Melati",
    relativesProvince: "DKI Jakarta",
    relativesCity: "Jakarta Selatan",
    relativesSubdistrict: "Tebet",
    relativesVillage: "Tebet Timur",
    relativesPostalCode: "12820",
  };

  return (
    <div className="grid grid-cols-1 justify-center min-h-screen w-full min-w-screen mx-auto px-16 py-24">
      <div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow grid grid-cols-3 gap-x-8">
          <PatientIdentifier {...patientIdentifierProps} />
          <PatientData {...patientDataProps} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
