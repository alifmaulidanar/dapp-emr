import PatientList from "./PatientList";

export default async function PatientListPage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-white">
      <PatientList />
    </div>
  );
}
