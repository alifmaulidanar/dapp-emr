import SignInPatient from "../../../../pages/SignUp";

export const metadata = {
  title: "Pendaftaran Akun Pasien",
  description: "EMR with Blockchain",
};

export default async function SignInPatientPage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-slate-400">
      <SignInPatient role="Pasien" />
    </div>
  );
}
