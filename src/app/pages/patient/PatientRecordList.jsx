import "./../../globals.css";
import RecordControl from "../../components/RecordControl";
import RecordList from "../../components/RecordList";
import PatientList from "../../components/PatientList";

export default function PatientRecordList() {
  const recordListProps = {
    recordTitle: "Medical Checkup Rutin",
    recordDate: "Selasa, 11 September 2023",
    recordAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
    recordDoctorName: "Dokter Suryono",
  };

  const patientListProps = [
    {
      patientName: "Alif Maulidanar",
      patientImage: "/Alif.jpg",
      patientAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
      patientIsChosen: true,
    },
    {
      patientName: "Alif Zaki",
      patientImage: "/Alif.jpg",
      patientAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
      patientIsChosen: false,
    },
    {
      patientName: "Elham Herlambang",
      patientImage: "/Alif.jpg",
      patientAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
      patientIsChosen: false,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-5 justify-center min-h-fit max-h-fit w-full min-w-screen mx-auto px-14 pt-24 gap-x-8 gap-y-4 items-center">
        <div className="grid grid-cols-1 col-span-3 items-center h-fit">
          <RecordControl />
        </div>
        <div className="grid col-span-2 items-center h-fit">
          <h5 className="text-xl font-semibold text-gray-900">
            Daftar pasien di akun Anda
            <hr class="h-px bg-gray-700 border-0"></hr>
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-5 justify-center min-h-fit max-h-fit w-full min-w-screen mx-auto px-14 pt-8 gap-x-8 gap-y-4">
        <div className="col-span-3 w-full">
          <RecordList {...recordListProps} />
        </div>
        <div className="col-span-2 w-full">
          <div className="w-full py-4 px-8 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                {patientListProps.map((patient, index) => (
                  <PatientList key={index} {...patient} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
