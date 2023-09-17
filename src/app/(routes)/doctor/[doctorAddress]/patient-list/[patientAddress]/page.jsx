import Profile from "./Profile";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  return (
    <div className="w-full max-w-screen mx-auto min-h-screen h-content shadow-lg shadow-primary/40 bg-white">
      <Profile />
    </div>
  );
}
