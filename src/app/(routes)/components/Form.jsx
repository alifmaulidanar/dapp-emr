import Link from "next/link";

function SignUpForm({ role }) {
  return (
    <div className="w-90 h-fit grid col-start-2 col-span-2 pt-12 pb-8">
      <div className="h-fit px-12 py-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Pendaftaran Akun {role}
        </h1>
        <form className="grid grid-cols-1 gap-x-12">
          <div className="grid mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama Pengguna
            </label>
            <input
              type="text"
              id="nama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nama Pengguna"
              required
            />
          </div>
          <div className="grid mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Alamat Email"
              required
            />
          </div>
          <div className="grid mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="telepon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nomor Telepon"
              required=""
            />
          </div>
          <div className="grid mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ketik password baru Anda"
              required
            />
          </div>
          <div className="grid mb-6">
            <label
              htmlFor="repassword"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ketik Ulang Password
            </label>
            <input
              type="password"
              id="repassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ketik ulang password baru Anda"
              required
            />
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
            >
              Daftarkan Akun
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SignInForm({ role, resetLink, signupLink }) {
  return (
    <div className="col-start-2 col-span-2 h-fit">
      <div className="h-fit px-12 py-8 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Masuk sebagai {role}
        </h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="contoh@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ketik password Anda"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
            >
              Masuk
            </button>
          </div>
        </form>
        <div className="flex mt-8 justify-evenly items-center text-center">
          <div>
            <Link href={resetLink}>
              <button
                type="submit"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Lupa Password
              </button>
            </Link>
          </div>
          <div>
            <p className="text-l text-gray-900">atau</p>
          </div>
          <div>
            <Link href={signupLink}>
              <button
                type="submit"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Daftar Baru
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SignInForm, SignUpForm };
