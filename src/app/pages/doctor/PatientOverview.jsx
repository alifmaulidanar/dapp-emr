"use client";

import React, { useState } from "react";
import "./../../globals.css";
import PatientIdentifierOverview from "../../components/PatientIdentifierOverview";
import PatientDataOverview from "../../components/PatientDataOverview";
import RecordList from "@/app/components/RecordList";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const patientIdentifierProps = {
    patientName: "Alif Maulidanar",
    patientImage: "/Alif.jpg",
    patientAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
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

  const recordListProps = {
    recordTitle: "Medical Checkup Rutin",
    recordDate: "Selasa, 11 September 2023",
    recordAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
    recordDoctorName: "Dokter Suryono",
  };

  return (
    <div className="grid grid-cols-1 justify-center min-h-screen w-4/5 min-w-screen mx-auto px-16 py-24">
      <div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow grid grid-cols-3 gap-x-8 justify-center">
          <PatientIdentifierOverview {...patientIdentifierProps} />

          {/* TAB */}
          <div className="col-span-3 text-sm font-medium text-center text-gray-900 my-4 w-full mx-auto">
            <ul className="flex flex-wrap -mb-px w-full mx-auto">
              <li>
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-blue-600 hover:border-blue-600 ${
                    activeTab === "profile"
                      ? "text-blue-600 border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("profile")}
                >
                  Profil Pasien
                </button>
              </li>
              <li>
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-blue-600 hover:border-blue-600 ${
                    activeTab === "record-list"
                      ? "text-blue-600 border-blue-600"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("record-list")}
                >
                  Data Rekam Medis
                </button>
              </li>
            </ul>
          </div>

          {/* ISI TAB PERTAMA */}
          {activeTab === "profile" && (
            <PatientDataOverview {...patientDataProps} />
          )}

          {/* ISI TAB KEDUA */}
          {activeTab === "record-list" && (
            <div className="col-span-3 w-full">
              <RecordList {...recordListProps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
