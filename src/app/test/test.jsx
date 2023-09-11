"use client";

import { useState, useCallback } from "react";
import { ethers } from "ethers";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import {
  ETH_SEPOLIA_RPC_URL,
  getContract,
  getPatients,
  getPatientById,
  getDoctors,
  getDoctorById,
} from "../contract/contract";

function Test() {
  const [patients] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [fetchedPatients, setFetchedPatients] = useState([]);

  const [doctors] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [fetchedDoctors, setFetchedDoctors] = useState([]);

  const { data: doctorList = doctors } = useSWR("doctor-list", () =>
    getDoctors()
  );
  const { data: patientList = patients } = useSWR("patient-list", () =>
    getPatients()
  );

  const getSigner = useCallback(async () => {
    const win = window;
    if (!win.ethereum) {
      toast.error("You must install Metamask first");
      return;
    }

    const provider = new ethers.BrowserProvider(win.ethereum, "sepolia");
    const signer = await provider.getSigner();
    await provider.send("wallet_addEthereumChain", [
      {
        chainId: "0xaa36a7",
        chainName: "Sepolia",
        nativeCurrency: {
          name: "ETH",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: [ETH_SEPOLIA_RPC_URL],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
      },
    ]);
    return signer;
  }, []);

  const addDoctor = useCallback(
    async (e) => {
      e.preventDefault();

      const signer = await getSigner();
      if (!signer) return;

      const contract = getContract(signer);

      return toast.promise(
        contract.addDoctor(doctorName).then(() => {
          setDoctorName("");
        }),
        {
          loading: "Processing...",
          success: <b>Doctor Added!</b>,
          error: <b>An error occured.</b>,
        }
      );
    },
    [getSigner, doctorName]
  );

  const addPatient = useCallback(
    async (e) => {
      e.preventDefault();

      const signer = await getSigner();
      if (!signer) return;

      const contract = getContract(signer);

      return toast.promise(
        contract.addPatient(patientName).then(() => {
          setPatientName("");
        }),
        {
          loading: "Processing...",
          success: <b>Patients Added!</b>,
          error: <b>An error occured.</b>,
        }
      );
    },
    [getSigner, patientName]
  );

  const searchPatient = useCallback(
    async (e) => {
      e.preventDefault();

      const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
      const contract = getContract(callProvider);

      return toast.promise(
        contract.getPatientById(patientId).then((patient) => {
          if (patient.id < 0) {
            // Handle patient not found
            console.error("Patient not found");
          } else {
            setFetchedPatients([
              {
                id: patientId,
                name: patient.name,
              },
            ]);
            setPatientName("");
          }
        }),
        {
          loading: "Searching...",
          success: <b>Patient Found!</b>,
          error: <b>Patient not found.</b>,
        }
      );
    },
    [patientId]
  );

  const searchDoctor = useCallback(
    async (e) => {
      e.preventDefault();

      const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
      const contract = getContract(callProvider);

      return toast.promise(
        contract.getDoctorById(doctorId).then((doctor) => {
          if (doctor.id < 0) {
            // Handle Doctor not found
            console.error("Doctor not found");
          } else {
            setFetchedDoctors([
              {
                id: doctorId,
                name: doctor.name,
              },
            ]);
            setDoctorName("");
          }
        }),
        {
          loading: "Searching...",
          success: <b>Doctor Found!</b>,
          error: <b>Doctor not found.</b>,
        }
      );
    },
    [doctorId]
  );

  return (
    <div className="w-full grid grid-cols-2 gap-x-4 justify-center my-12">
      <div className="col-span-2">
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white mb-4">
          Data Dokter dan Pasien
        </h5>
        <p className="text-md text-center mb-8">
          Check Contract at{" "}
          <a
            className="underline text-blue-400"
            href="https://sepolia.etherscan.io/address/0x66E167fDd23614b58A4459C1C875C6705f550ED6"
            target="_blank"
          >
            Sepolia Scanner
          </a>
        </p>
      </div>
      <div className="w-fit mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
            Tambah Data
          </h5>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <h3 className="text-l">Dokter</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <label
                htmlFor="doctorName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Dokter
              </label>
              <input
                type="text"
                name="doctorName"
                id="doctorName"
                className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
              <button
                type="button"
                onClick={addDoctor}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tambah Dokter
              </button>
            </div>
            <div>
              <h3 className="text-l">Pasien</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <label
                htmlFor="patientName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Pasien
              </label>
              <input
                type="text"
                name="patientName"
                id="patientName"
                className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              <button
                type="button"
                onClick={addPatient}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tambah Pasien
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-fit mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
            Daftar Dokter & Pasien
          </h5>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <h3 className="text-l">Dokter</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <table className="mt-8 table table-zebra">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorList.map(([_pId, _pName]) => (
                    <tr key={`doctor-${_pId}`}>
                      <td>{_pId.toString()}</td>
                      <td>{_pName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-l">Pasien</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <table className="mt-8 table table-zebra">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {patientList.map(([_pId, _pName]) => (
                    <tr key={`patient-${_pId}`}>
                      <td>{_pId.toString()}</td>
                      <td>{_pName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Mengambil data berdasarkan id */}
      <div className="my-8 col-span-2">
        <div className="w-fit mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Ambil Data Berdasarkan ID
            </h5>
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <h3 className="text-l">Dokter</h3>
                <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <label
                  htmlFor="doctorId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID Dokter
                </label>
                <input
                  type="text"
                  name="doctorId"
                  id="doctorId"
                  className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                />
                <button
                  type="button"
                  onClick={searchDoctor}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ambil Data Dokter
                </button>
                <table className="mt-8 table table-zebra">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchedDoctors.map((doctor, index) => (
                      <tr key={`fetched-doctor-${index}`}>
                        <td>{doctor.id}</td>
                        <td>{doctor.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-l">Pasien</h3>
                <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <label
                  htmlFor="patientId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID Pasien
                </label>
                <input
                  type="text"
                  name="patientId"
                  id="patientId"
                  className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
                <button
                  type="button"
                  onClick={searchPatient}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ambil Data Pasien
                </button>
                <table className="mt-8 table table-zebra">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchedPatients.map((patient, index) => (
                      <tr key={`fetched-patient-${index}`}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
