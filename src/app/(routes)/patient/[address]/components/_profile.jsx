import Link from "next/link";
import Image from "next/image";

function PatientIdentifier(patientName, patientImage, patientAddress) {
  return (
    <div className="flex flex-col items-center p-8">
      <Image
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        width={500}
        height={500}
        src={`${patientImage}`}
        alt={`${patientName} image`}
      />
      <h5 className="text-xl font-medium text-gray-900 mb-1">{patientName}</h5>
      <div>
        <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded text-center">
          {patientAddress}
        </span>
      </div>
    </div>
  );
}

function PatientData(props) {
  const [
    patientName,
    patientIdNumber,
    patientBirthLocation,
    patientBirthDate,
    patientGender,
    patientBloodType,
    patientMaritalStatus,
    patientReligion,
    patientJob,
    patientCitizenship,
    patientPhone,
    patientEmail,
    patientHomeAddress,
    patientProvince,
    patientCity,
    patientSubdistrict,
    patientVillage,
    patientPostalCode,
    relativesName,
    relativesIdNumber,
    relativesGender,
    relativesBirthDate,
    relativesPhone,
    relativesRelation,
    relativesHomeAddress,
    relativesProvince,
    relativesCity,
    relativesSubdistrict,
    relativesVillage,
    relativesPostalCode,
  ] = props;

  return (
    <form className="col-span-2 p-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="col-span-2 text-gray-900 text-lg mb-6">
          Data Pasien
          <hr class="h-px bg-gray-700 border-0"></hr>
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientName}`}
            required
            disable
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nomor_identitas"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nomor Identitas (E-KTP, SIM, atau Paspor)
          </label>
          <input
            type="text"
            id="nomor_identitas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientIdNumber}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tempat_lahir"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tempat Lahir
          </label>
          <input
            type="text"
            id="tempat_lahir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientBirthLocation}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tanggal_lahir"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tanggal Lahir
          </label>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              datepicker-format="dd/mm/yyyy"
              datepicker-autohide
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder={`${patientBirthDate}`}
              required
              disabled
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="jenis_kelamin"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jenis Kelamin
          </label>
          <select
            id="jenis_kelamin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientGender}</option>
            <option value="laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="golongan_darah"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Golongan Darah
          </label>
          <select
            id="golongan_darah"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientBloodType}</option>
            <option value="darah_a">A</option>
            <option value="darah_b">B</option>
            <option value="darah_o">O</option>
            <option value="darah_ab">AB</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="status_perkawinan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Status Perkawinan
          </label>
          <select
            id="status_perkawinan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientMaritalStatus}</option>
            <option value="menikah">Menikah</option>
            <option value="!menikah">Tidak/Belum Menikah</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="agama"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Agama
          </label>
          <select
            id="agama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientReligion}</option>
            <option value="budha">Budha</option>
            <option value="hindu">Hindu</option>
            <option value="islam">Islam</option>
            <option value="katolik">Kristen Katolik</option>
            <option value="protestan">Kristen Protestan</option>
            <option value="konghucu">Konghuchu</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="pekerjaan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Pekerjaan
          </label>
          <input
            type="text"
            id="pekerjaan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientJob}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="kewarganegaraan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kewarganegaraan
          </label>
          <input
            type="text"
            id="kewarganegaraan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientCitizenship}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nomor_telepon"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="nomor_telepon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientPhone}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientEmail}`}
            required
            disabled
          />
        </div>
        {/* TEMPAT TINGGAL */}
        {/* <div className="col-span-2 text-gray-900 text-lg my-6">
                Tempat Tinggal
                <hr class="h-px bg-gray-700 border-0"></hr>
              </div> */}
        <div className="col-span-2 mb-6">
          <label
            htmlFor="alamat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Alamat
          </label>
          <textarea
            id="alamat"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`${patientHomeAddress}`}
            defaultValue={""}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="provinsi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Provinsi
          </label>
          <select
            id="provinsi"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientProvince}</option>
            <option value="aceh">Aceh</option>
            <option value="bali">Bali</option>
            <option value="banten">Banten</option>
            <option value="Bengkulu">Bengkulu</option>
            <option value="jakarta">DKI Jakarta</option>
            <option value="jogjakarta">Daerah Istimewa Yogyakarta</option>
            <option value="gorontalo">Gorontalo</option>
            <option value="jambi">Jambi</option>
            <option value="jawa_barat">Jawa Barat</option>
            <option value="jawa_tengah">Jawa Tengah</option>
            <option value="jawa_timur">Jawa Timur</option>
            <option value="kalimantan_barat">Kalimantan Barat</option>
            <option value="kalimantan_selatan">Kalimantan Selatan</option>
            <option value="kalimantan_tengah">Kalimantan Tengah</option>
            <option value="kalimantan_timur">Kalimantan Timur</option>
            <option value="kalimantan_utara">Kalimantan Utara</option>
            <option value="kepulauan_bangka_belitung">
              Kepulauan Bangka Belitung
            </option>
            <option value="kepulauan_riau">Kepulauan Riau</option>
            <option value="lampung">Lampung</option>
            <option value="maluku">Maluku</option>
            <option value="maluku">Maluku Utara</option>
            <option value="nusa_tenggara_barat">NUsa Tenggara Barat</option>
            <option value="busa_tenggara_timur">Nusa Tenggara Timur</option>
            <option value="papu">Papua</option>
            <option value="papua_barat">Papua Barat</option>
            <option value="riau">Riau</option>
            <option value="sulawesi_barat">Sulawesi Barat</option>
            <option value="sulawesi_selatan">Sulawesi Selatan</option>
            <option value="sulawesi_tengah">Sulawesi Tengah</option>
            <option value="sulawesi_tenggara">Sulawesi Tenggara</option>
            <option value="sulawesi_utara">Sulawesi Utara</option>
            <option value="sumatera_barat">Sumatera Barat</option>
            <option value="sumatera_selatan">Sumatera Selatan</option>
            <option value="sumatera_utara">Sumatera Utara</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="kota"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kota/Kabupaten
          </label>
          <select
            id="okta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{patientCity}</option>
            <option value="jakarta_timur">Jakarta Timur</option>
            <option value="bekasi">Bekasi</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="kecamatan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kecamatan
          </label>
          <input
            type="text"
            id="kecamatan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientSubdistrict}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="kelurahan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kelurahan
          </label>
          <input
            type="text"
            id="kelurahan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientVillage}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="pos"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kode Pos
          </label>
          <input
            type="text"
            id="pos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${patientPostalCode}`}
            required
            disabled
          />
        </div>
        {/* DATA PENANGGUNG JAWAB */}
        <div className="col-span-2 text-gray-900 text-lg my-6">
          Data Kerabat/Penanggung Jawab
          <hr class="h-px bg-gray-700 border-0"></hr>
        </div>
        <div className="mb-6">
          <label
            htmlFor="nama_kerabat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama_kerabat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesName}`}
            required
            disable
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nomor_identitas_kerabat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nomor Identitas (E-KTP, SIM, atau Paspor)
          </label>
          <input
            type="text"
            id="nomor_identitas_kerabat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesIdNumber}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="jenis_kelamin"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jenis Kelamin
          </label>
          <select
            id="jenis_kelamin_kerabat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{relativesGender}</option>
            <option value="laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="tanggal_lahir_kerabat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tanggal Lahir
          </label>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder={`${relativesBirthDate}`}
              required
              disabled
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="nomor_telepon_kerabat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="nomor_telepon_kerabat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesPhone}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="kerabat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Hubungan dengan Pasien
          </label>
          <input
            type="text"
            id="kerabat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesRelation}`}
            required
            disabled
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            checked
            id="checkbox-alamat"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            disabled
          />
          <label
            htmlFor="checkbox-2"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Alamat sama dengan pasien.
          </label>
        </div>
        <div className="col-span-2 mb-6">
          <label
            htmlFor="alamat"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Alamat
          </label>
          <textarea
            id="alamat"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`${relativesHomeAddress}`}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="provinsi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Provinsi
          </label>
          <select
            id="provinsi"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{relativesProvince}</option>
            <option value="aceh">Aceh</option>
            <option value="bali">Bali</option>
            <option value="banten">Banten</option>
            <option value="Bengkulu">Bengkulu</option>
            <option value="jakarta">DKI Jakarta</option>
            <option value="jogjakarta">Daerah Istimewa Yogyakarta</option>
            <option value="gorontalo">Gorontalo</option>
            <option value="jambi">Jambi</option>
            <option value="jawa_barat">Jawa Barat</option>
            <option value="jawa_tengah">Jawa Tengah</option>
            <option value="jawa_timur">Jawa Timur</option>
            <option value="kalimantan_barat">Kalimantan Barat</option>
            <option value="kalimantan_selatan">Kalimantan Selatan</option>
            <option value="kalimantan_tengah">Kalimantan Tengah</option>
            <option value="kalimantan_timur">Kalimantan Timur</option>
            <option value="kalimantan_utara">Kalimantan Utara</option>
            <option value="kepulauan_bangka_belitung">
              Kepulauan Bangka Belitung
            </option>
            <option value="kepulauan_riau">Kepulauan Riau</option>
            <option value="lampung">Lampung</option>
            <option value="maluku">Maluku</option>
            <option value="maluku">Maluku Utara</option>
            <option value="nusa_tenggara_barat">NUsa Tenggara Barat</option>
            <option value="busa_tenggara_timur">Nusa Tenggara Timur</option>
            <option value="papu">Papua</option>
            <option value="papua_barat">Papua Barat</option>
            <option value="riau">Riau</option>
            <option value="sulawesi_barat">Sulawesi Barat</option>
            <option value="sulawesi_selatan">Sulawesi Selatan</option>
            <option value="sulawesi_tengah">Sulawesi Tengah</option>
            <option value="sulawesi_tenggara">Sulawesi Tenggara</option>
            <option value="sulawesi_utara">Sulawesi Utara</option>
            <option value="sumatera_barat">Sumatera Barat</option>
            <option value="sumatera_selatan">Sumatera Selatan</option>
            <option value="sumatera_utara">Sumatera Utara</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="kota"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kota/Kabupaten
          </label>
          <select
            id="okta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            disabled
          >
            <option selected>{relativesCity}</option>
            <option value="jakarta_timur">Jakarta Timur</option>
            <option value="bekasi">Bekasi</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="kecamatan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kecamatan
          </label>
          <input
            type="text"
            id="kecamatan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesSubdistrict}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="kelurahan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kelurahan
          </label>
          <input
            type="text"
            id="kelurahan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesVillage}`}
            required
            disabled
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="pos"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Kode Pos
          </label>
          <input
            type="text"
            id="pos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${relativesPostalCode}`}
            required
            disabled
          />
        </div>
      </div>

      {/* UBAH DATA */}
      <div className="col-span-2 text-center mt-8">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Ubah Data
        </button>
      </div>

      {/* SIMPAN ATAU BATAL */}
      <div className="hidden grid grid-cols-2 gap-x-4 text-center mt-8">
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center"
        >
          Batal
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center"
        >
          Simpan Perubahan
        </button>
      </div>
    </form>
  );
}

export { PatientIdentifier, PatientData };
