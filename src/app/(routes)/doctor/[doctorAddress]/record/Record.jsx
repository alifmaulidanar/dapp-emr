import "./../../../../globals.css";
import PatientData from "../components/_record";

function Profile() {
  return (
    <div className="grid grid-cols-6 justify-center min-h-screen w-full min-w-screen mx-auto px-16 py-24">
      <div className="col-start-2 col-span-4">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow grid grid-cols-2 gap-x-8">
          <PatientData />
        </div>
      </div>
    </div>
  );
}

export default Profile;
