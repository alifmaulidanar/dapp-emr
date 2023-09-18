"use client";

import Link from "next/link";
import Image from "next/image";
import "./../../../../globals.css";
import { useState, useRef, useEffect } from "react";

function PatientModal() {
  // Modal State
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prevStat) => !prevStat);
  };

  // Modal Component
  const modalComponent = useRef();

  const handleClickOutside = (event) => {
    if (
      modalComponent.current &&
      !modalComponent.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center w-full h-full bg-black/50 top-0 left-0 z-[999]">
          <div
            ref={modalComponent}
            className="bg-white w-full max-w-lg h-auto rounded-2xl p-5"
          >
            <button
              onClick={handleModal}
              className="block ml-auto text-gray-400 bg-transparent hover:text-gray-900"
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
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Sign in to our platform
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="patient__code"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Kode Pasien
                  </label>
                  <input
                    type="text"
                    name="patient__code"
                    id="patient__code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="0x6"
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
                    Pasien ditemukan
                  </p>
                  <div>
                    <p className="mb-2 text-sm text-gray-900">
                      Alif Maulidanar
                    </p>
                    <span className="bg-green-100 text-green-800 text-sm px-2.5 py-0.5 rounded text-center">
                      0x66E167fDd23614b58A4459C1C875C6705f550ED6
                    </span>
                  </div>
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
      )}

      <button
        onClick={handleModal}
        className="px-2 py-2 bg-blue-700 text-white rounded-lg w-full max-w-[200px]"
      >
        Tambah Patient
      </button>
    </>
  );
}

// Komponen untuk bagian atas dashboard
function DashboardTop() {
  return (
    <div className="grid grid-cols-1 justify-center min-h-fit max-h-fit w-1/2 min-w-screen mx-auto px-14 pt-24 gap-x-8 gap-y-4 items-center">
      <div className="grid grid-cols-2 items-center h-fit">
        {/* <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 max-w-fit"
        >
          Tambah Pasien
        </button> */}

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
