import { ethers } from "ethers";
import MEDICAL_RECORDS_ABI from "./MedicalRecords.abi.json";

export { MEDICAL_RECORDS_ABI };
export const MEDICAL_RECORDS_CONTRACT_ADDRESS =
  "0x66E167fDd23614b58A4459C1C875C6705f550ED6";
export const ETH_SEPOLIA_RPC_URL = "https://rpc.sepolia.org";

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
