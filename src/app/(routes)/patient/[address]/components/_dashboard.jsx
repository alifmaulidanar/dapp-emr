import Link from "next/link";
import Image from "next/image";
import "./../../../../globals.css";

// Komponen untuk bagian atas dashboard
function DashboardTop() {
  return (
    <div className="grid grid-cols-5 justify-center min-h-fit max-h-fit w-full min-w-screen mx-auto px-14 pt-24 gap-x-8 gap-y-4 items-center">
      <div className="grid grid-cols-1 col-span-3 items-center h-fit">
        {/* tombol akses dokter => ganti jadi grid-cols-2 kalo mau pake tombol ini */}
        {/* <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 max-w-fit"
        >
          Beri Akses Dokter
        </button> */}
        {/* tombol akses dokter */}

        <form className="flex items-center justify-end">
          <div className="relative w-fit">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-800"
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
            </div> */}
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
              placeholder="Cari rekam medis"
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
      <div className="grid col-span-2 items-center h-fit">
        <h5 className="text-xl font-semibold text-gray-900">
          Daftar pasien di akun Anda
          <hr class="h-px bg-gray-700 border-0"></hr>
        </h5>
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
    <Link href="/patient/0x66E167fDd23614b58A4459C1C875C6705f550ED6/record">
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
function PatientList({
  patientName,
  patientImage,
  patientAddress,
  patientIsChosen,
}) {
  return (
    <li className="py-3 sm:py-4">
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
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {patientIsChosen && (
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-sm font-semibold text-white bg-blue-700 rounded-full">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="sr-only">Pasien Terpilih</span>
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export { DashboardTop, RecordList, PatientList };
