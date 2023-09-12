import Link from "next/link";
import Image from "next/image";
import "./../../../globals.css";

function Profile() {
  return (
    <div className="grid grid-cols-1 justify-center min-h-screen w-full min-w-screen mx-auto px-16 pt-24">
      <div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow grid grid-cols-3 gap-x-8">
          <div>
            <div className="flex flex-col items-center p-8">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                width={500}
                height={500}
                src="/Alif.jpg"
                alt="ALif image"
              />
              <h5 className="text-xl font-medium text-gray-900 mb-1">
                Alif Maulidanar
              </h5>
              <div>
                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded text-center">
                  0x66E167fDd23614b58A4459C1C875C6705f550ED6
                </span>
              </div>
            </div>
          </div>
          <form className="col-span-2 grid grid-cols-2 gap-x-8">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>

          {/* <table suppressHydrationWarning>
                <tbody>
                  <tr>
                    <th className="table-head">Usia</th>
                    <td>: 21 tahun</td>
                  </tr>
                  <tr>
                    <th className="table-head">Golongan Darah</th>
                    <td>: -</td>
                  </tr>
                  <tr>
                    <th className="table-head">Alergi</th>
                    <td>: -</td>
                  </tr>
                  <tr>
                    <th className="table-head">Kontak</th>
                    <td>: 081763163981</td>
                  </tr>
                </tbody>
              </table> */}
          {/* <div>
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center"
              >
                Lihat Profil Pasien
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
