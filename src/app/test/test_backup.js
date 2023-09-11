"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";
import {
  MEDICAL_RECORDS_ABI,
  MEDICAL_RECORDS_CONTRACT_ADDRESS,
  ETH_SEPOLIA_RPC_URL,
  getContract,
  getPatients,
  getDoctors,
} from "./contract/contract";

function Test() {
  const [name, setName] = useState("");

  const getSigner = useCallback(async () => {
    if (typeof window.ethereum === "undefined") {
      console.log("You must install Metamask first");
      return;
    }

    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "sepolia"
    );
    const signer = provider.getSigner();
    return signer;
  }, []);

  const contractAddress = MEDICAL_RECORDS_CONTRACT_ADDRESS;
  const abi = MEDICAL_RECORDS_ABI;
  const signer = getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const addPatient = useCallback(
    async (e) => {
      e.preventDefault();

      const signer = await getSigner();
      if (!signer) return;

      if (!name) {
        toast.error("Isi nama pasien.");
        return;
      }

      return toast.promise(
        contract.addPatient(name).then(() => {
          setName("");
        }),
        {
          loading: "Processing...",
          success: <b>Pasien ditambahkan</b>,
          error: <b>An error occurred.</b>,
        }
      );
    },
    [getSigner, name, contract]
  );

  const addDoctor = useCallback(
    async (e) => {
      e.preventDefault();

      const signer = await getSigner();
      if (!signer) return;

      if (!name) {
        toast.error("Isi nama dokter.");
        return;
      }

      return toast.promise(
        contract.addDoctor(name).then(() => {
          setName("");
        }),
        {
          loading: "Processing...",
          success: <b>Dokter ditambahkan</b>,
          error: <b>An error occurred.</b>,
        }
      );
    },
    [getSigner, name, contract]
  );

  const getDoctorsList = useCallback(async () => {
    const doctorsList = await getDoctors();
    console.log(doctorsList); // You can display the doctorsList as needed
  }, []);

  const getPatientsList = useCallback(async () => {
    const patientsList = await getPatients();
    console.log(patientsList); // You can display the patientsList as needed
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-x-4 justify-center my-12">
      <div className="col-span-2">
        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white mb-8">
          Data Dokter dan Pasien
        </h5>
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
      <div className="w-full mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6">
          <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
            Ambil Data
          </h5>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <h3 className="text-l">Dokter</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <button
                type="button"
                onClick={getDoctorsList}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Data Dokter
              </button>
              <div className="mt-8">
                {doctors.map((doctor, index) => (
                  <div key={index}>
                    <p>ID: {doctor.id}</p>
                    <p>Nama: {doctor.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-l">Pasien</h3>
              <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <button
                type="button"
                onClick={getPatientsList}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Data Pasien
              </button>
              <div className="mt-8">
                {patients.map((patient, index) => (
                  <div key={index}>
                    <p>ID: {patient.id}</p>
                    <p>Nama: {patient.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
