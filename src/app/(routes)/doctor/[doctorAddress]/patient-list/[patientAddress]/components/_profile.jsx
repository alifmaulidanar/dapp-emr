"use client";

import React, { useState } from "react";
import Image from "next/image";

function PatientIdentifier({ patientName, patientImage, patientAddress }) {
  return (
    <div className="flex flex-col col-span-3 items-center p-8">
      <Image
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        width={500}
        height={500}
        src={`${patientImage}`}
        alt={`${patientName} image`}
      />
      <h5 className="text-xl font-medium text-gray-900 mb-1">{patientName}</h5>
      <div>
        <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded text-center">
          {patientAddress}
        </span>
      </div>
    </div>
  );
}

const PatientProfile = ({ data }) => {
  return (
    <>
      {data.map(({ key, value1, value2 }) => (
        <div key={key} className="mb-6">
          <h3 className="text-sm block font-medium text-gray-900 mb-2">
            {value1}
          </h3>
          <p className="text-sm text-gray-900">{value2}</p>
        </div>
      ))}
    </>
  );
};

function PatientData() {
  const patientDataProps1 = [
    { key: "patientName", value1: "Nama Pasien", value2: "Alif Maulidanar" },
    {
      key: "patientIdNumber",
      value1: "Nomor Identitas Pasien",
      value2: "18310893018601",
    },
    {
      key: "patientBirthLocation",
      value1: "Tempat Lahir Pasien",
      value2: "Jakarta",
    },
    {
      key: "patientBirthDate",
      value1: "Tanggal Lahir Pasien",
      value2: "04/06/2002",
    },
    { key: "patientGender", value1: "Jenis Kelamin Pasien", value2: "Pria" },
    { key: "patientBloodType", value1: "Golongan Darah Pasien", value2: "O" },
    {
      key: "patientMaritalStatus",
      value1: "Status Pernikahan Pasien",
      value2: "Tidak/Belum Menikah",
    },
    { key: "patientReligion", value1: "Agama Pasien", value2: "Islam" },
    { key: "patientJob", value1: "Pekerjaan Pasien", value2: "Mahasiswa" },
    {
      key: "patientCitizenship",
      value1: "Kewarganegaraan Pasien",
      value2: "Indonesia",
    },
    {
      key: "patientPhone",
      value1: "Nomor Telepon Pasien",
      value2: "085819130187",
    },
    { key: "patientEmail", value1: "Email Pasien", value2: "contoh@gmail.com" },
    {
      key: "patientHomeAddress",
      value1: "Alamat Rumah Pasien",
      value2: "Jalan Melati",
    },
    {
      key: "patientProvince",
      value1: "Provinsi Pasien",
      value2: "Kepulauan Bangka Belitung",
    },
    { key: "patientCity", value1: "Kota Pasien", value2: "Jakarta Selatan" },
    { key: "patientSubdistrict", value1: "Kecamatan Pasien", value2: "Tebet" },
    {
      key: "patientVillage",
      value1: "Desa/Kelurahan Pasien",
      value2: "Tebet Timur",
    },
    { key: "patientPostalCode", value1: "Kode Pos Pasien", value2: "12820" },
  ];

  const patientDataProps2 = [
    { key: "relativesName", value1: "Nama Lengkap", value2: "Danar" },
    {
      key: "relativesIdNumber",
      value1: "Nomor Identitas (NIK/SIM/Paspor)",
      value2: "187318418601",
    },
    {
      key: "relativesGender",
      value1: "Jenis Kelamin",
      value2: "Pria",
    },
    {
      key: "relativesBirthDate",
      value1: "Tanggal Lahir",
      value2: "01/01/2002",
    },
    {
      key: "relativesPhone",
      value1: "Nomor Telepon",
      value2: "1889146846",
    },
    {
      key: "relativesRelation",
      value1: "Hubungan dengan Pasien",
      value2: "Keluarga",
    },
    {
      key: "relativesHomeAddress",
      value1: "Alamat Rumah",
      value2: "Jalan Melati",
    },
    {
      key: "relativesProvince",
      value1: "Provinsi",
      value2: "DKI Jakarta",
    },
    {
      key: "relativesCity",
      value1: "Kota",
      value2: "Jakarta Selatan",
    },
    {
      key: "relativesSubdistrict",
      value1: "Kecamatan",
      value2: "Tebet",
    },
    {
      key: "relativesVillage",
      value1: "Desa/Kelurahan",
      value2: "Tebet Timur",
    },
    {
      key: "relativesPostalCode",
      value1: "Kode Pos",
      value2: "12820",
    },
  ];

  return (
    <div className="col-span-3 p-8">
      <div className="grid grid-cols-2 gap-x-8">
        {/* DATA PROFIL PASIEN */}
        <div className="col-span-2 text-gray-900 text-lg mb-6">
          Data Pasien
          <hr className="h-px bg-gray-700 border-0"></hr>
        </div>
        <PatientProfile data={patientDataProps1} />
        <div className="col-span-2 text-gray-900 text-lg mb-6"></div>

        {/* DATA KERABAT/PENANGGUNG JAWAB PASIEN */}
        <div className="col-span-2 text-gray-900 text-lg mb-6">
          Data Kerabat/Penanggung Jawab Pasien
          <hr className="h-px bg-gray-700 border-0"></hr>
        </div>
        <PatientProfile data={patientDataProps2} />
        <div className="col-span-2 text-gray-900 text-lg mb-6"></div>
      </div>
    </div>
  );
}

export { PatientIdentifier, PatientData };
