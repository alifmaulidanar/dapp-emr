import SignUpDoctor from "../../../../pages/SignUp";

export const metadata = {
  title: "Pendaftaran Akun Dokter",
  description: "EMR with Blockchain",
};

export default async function SignUpDoctorPage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-slate-400">
      <SignUpDoctor role="Dokter" />
    </div>
  );
}
