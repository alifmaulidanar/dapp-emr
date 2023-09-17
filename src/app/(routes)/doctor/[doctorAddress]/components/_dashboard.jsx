"use client";

import Link from "next/link";
import Image from "next/image";
import "./../../../../globals.css";

function PatientModal() {
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Tambah Pasien ke Daftar
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Kode Pasien
                </label>
                <input
                  type="text"
                  name="kode_pasien"
                  id="kode_pasien"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0X6..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cek Pasien
              </button>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-900">
                  Pasien ditemukan:
                </p>
                <p className="text-sm text-gray-900">Alif Maulidanar</p>
                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded text-center">
                  0x66E167fDd23614b58A4459C1C875C6705f550ED6
                </span>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Tambah Pasien
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen untuk bagian atas dashboard
function DashboardTop() {
  return (
    <div className="grid grid-cols-1 justify-center min-h-fit max-h-fit w-1/2 min-w-screen mx-auto px-14 pt-24 gap-x-8 gap-y-4 items-center">
      <div className="grid grid-cols-2 items-center h-fit">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 max-w-fit"
        >
          Tambah Pasien
        </button>

        <PatientModal />

        <form className="flex items-center justify-end">
          <div className="relative w-fit">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
              placeholder="Cari pasien"
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}

// Komponen untuk daftar pasien
function RecordList({
  recordTitle,
  recordDate,
  recordAddress,
  recordDoctorName,
}) {
  return (
    <Link href="/patient/123/record">
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="grid grid-cols-2 items-center">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            {recordTitle}
          </h5>
          <p className="text-base text-gray-900 text-right">{recordDate}</p>
        </div>
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {recordAddress}
          </span>
        </div>
        <p className="text-gray-900">{recordDoctorName}</p>
      </div>
    </Link>
  );
}

// Komponen untuk informasi pasien
function PatientList({ patientName, patientImage, patientAddress }) {
  return (
    <li className="py-3 sm:py-4">
      <Link href="/doctor/123/patient-list/123">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              width={500}
              height={500}
              src={`${patientImage}`}
              alt={`${patientName} image`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {patientName}
            </p>
            <div>
              <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded text-center">
                {patientAddress}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export { DashboardTop, RecordList, PatientList };
