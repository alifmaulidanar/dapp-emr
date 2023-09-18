import Profile from "../../../../../pages/doctor/PatientOverview";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Data Pasien",
  description: "EMR with Blockchain",
};

export default async function ProfilePage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-white">
      <Profile />
    </div>
  );
}
