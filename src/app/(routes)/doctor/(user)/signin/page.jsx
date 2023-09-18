import SignInDoctor from "../../../../pages/SignIn";

export const metadata = {
  title: "Masuk Akun Dokter",
  description: "EMR with Blockchain",
};

export default async function SignInDoctorPage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-slate-400">
      <SignInDoctor
        role="Dokter"
        resetLink="/doctor/reset-password"
        signupLink="/doctor/signup"
      />
    </div>
  );
}
