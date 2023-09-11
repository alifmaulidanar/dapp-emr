import { ethers } from "ethers";
import MEDICAL_RECORDS_ABI from "./MedicalRecords.abi.json";
const DotEnv = require("dotenv");
DotEnv.config({ path: ".env" });
const { CONTRACT_ADDRESS_KEY = "", RPC_URL_KEY = "" } = process.env;

export { MEDICAL_RECORDS_ABI };
export const MEDICAL_RECORDS_CONTRACT_ADDRESS = [CONTRACT_ADDRESS_KEY];
export const ETH_SEPOLIA_RPC_URL = [RPC_URL_KEY];

export function getContract(provider) {
  return new ethers.Contract(
    MEDICAL_RECORDS_CONTRACT_ADDRESS,
    MEDICAL_RECORDS_ABI.abi,
    provider
  );
}

export async function getPatients() {
  const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
  const contract = getContract(callProvider);
  const res = await contract.getPatients();
  return res;
}

export async function getPatientById(id) {
  const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
  const contract = getContract(callProvider);
  const patient = await contract.getPatientById(id);

  return {
    id: patient.id.toNumber(),
    name: patient.name,
  };
}

export async function getDoctors() {
  const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
  const contract = getContract(callProvider);
  const res = await contract.getDoctors();
  return res;
}

export async function getDoctorById(id) {
  const callProvider = new ethers.JsonRpcProvider(ETH_SEPOLIA_RPC_URL);
  const contract = getContract(callProvider);
  const doctor = await contract.getDoctorById(id);

  return {
    id: doctor.id.toNumber(),
    name: doctor.name,
  };
}
