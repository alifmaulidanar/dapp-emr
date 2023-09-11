import { SignInForm } from "../../../components/_user";

function SignIn() {
  return (
    <div className="grid grid-cols-4 justify-center items-center min-h-screen w-full min-w-screen mx-auto px-20 pt-12">
      <SignInForm />
    </div>
  );
}

export default SignIn;
