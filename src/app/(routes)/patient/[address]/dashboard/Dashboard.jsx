import "./../../../../globals.css";
import {
  DashboardTop,
  RecordList,
  PatientInfo,
} from "./../components/_dashboard";

function Dashboard() {
  const recordListProps = {
    recordTitle: "Medical Checkup Rutin",
    recordDate: "Selasa, 11 September 2023",
    recordAddress: "0x66E167fDd23614b58A4459C1C875C6705f550ED6",
    recordDoctorName: "Dokter Suryono",
  };

  const patientInfoProps = [
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
      <DashboardTop />
      <div className="grid grid-cols-5 justify-center min-h-fit max-h-fit w-full min-w-screen mx-auto px-14 pt-8 gap-x-8 gap-y-4">
        <div className="col-span-3 w-full">
          <RecordList {...recordListProps} />
        </div>
        <div className="col-span-2 w-full">
          <div className="w-full py-4 px-8 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200">
                {patientInfoProps.map((patient, index) => (
                  <PatientInfo key={index} {...patient} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
