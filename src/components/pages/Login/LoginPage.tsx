import Logo from '/bongkim_text_logo.svg';
import { LoginButton } from '../../../ui/Button';

export default function LoginPage() {
  return (
    <div className="bg-off-white flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        {/* Logo Placeholder */}
        <div className="mb-6 flex justify-center">
          <img
            src={Logo}
            alt="Bongkim Security Agency Logo"
            className="h-30 w-30"
          />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username or email"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="focus:ring-primary rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
          />
          <LoginButton>Login</LoginButton>
        </form>

        {/* Forgot Password + Sign Up */}
        <div className="mt-4 flex justify-between text-sm">
          <a href="#" className="text-secondary hover:underline">
            Forgot Password?
          </a>
          <a href="#" className="text-secondary hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
