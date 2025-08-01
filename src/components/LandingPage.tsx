"use client";

import React from "react";
import {
  BookOpen,
  Users,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Award,
  Mail,
  Hash,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ngaji from "../../public/img/ngaji.jpg";

const TPQLandingPage = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
            TPQ Al Karomah
          </h1>

          <p className="text-xl md:text-2xl mb-2 text-emerald-100 max-w-2xl mx-auto">
            Pusat Pendidikan Al-Qur&apos;an untuk Anak-anak
          </p>

          <div className="flex items-center justify-center gap-2 mb-6 text-emerald-200">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Mluweh, Ungaran Timur</span>
          </div>
          <section className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Berdiri sejak 2004</span>
            </div>
            <button
              onClick={() => scrollToSection("kontak")}
              className="group relative overflow-hidden bg-white text-emerald-600 py-4 px-8 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">Hubungi Kami</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </section>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">46</h3>
              <p className="text-gray-600">Santri Aktif</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-teal-600 mb-2">4</h3>
              <p className="text-gray-600">Hari per Minggu</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">5</h3>
              <p className="text-gray-600">Tahun Berpengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beranda Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-700 mb-4">
                Beranda
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* About Text */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700">
                      Tentang TPQ Al Karomah
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Taman Pendidikan al-Qur&apos;an (TPQ) Al Karomah yang
                    bernaung pada lembaga Pendidikan Al Karomah Kabupaten
                    Semarang didirikan dalam rangka membantu menunaikan tugas
                    utama orang tua yaitu menjaga kefitrahan anak dengan
                    memberikan Pendidikan al-Qur&apos;an dan as-Sunnah.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    TPQ Al Karomah telah berdiri sejak tahun 2004 yang beralamat
                    di Jalan Ngori Gunung Tugel RT.03 RW.01 Dusun Karanggawang
                    Desa Mluweh Kecamatan Ungaran Timur Kabupaten Semarang
                    Provinsi Jawa Tengah dan telah terdaftar di Kantor
                    Kementerian Agama Kabupaten Semarang, Tanggal 21 Juni 2021
                    dengan nomor : 893 Tahun 2021.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Kemampuan membaca al-Qur&apos;an merupakan dasar bagi umat
                    Islam guna memahami, menghayati, dan mengamalkan
                    syari&apos;at Islam. Maka upaya peningkatan kemampuan baca
                    tulis al-Qur&apos;an dan kemampuan bersikap akhlakul karimah
                    serta berakidah mantap merupakan tuntutan yang mendasar
                    untuk segera diaplikasikan terhadap anak.
                  </p>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="space-y-6">
                {/* Vision */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal-700">Visi</h3>
                  </div>

                  <div className="bg-white/60 rounded-lg p-6">
                    <p className="text-gray-700 font-medium text-center leading-relaxed">
                      &quot;Menjadikan generasi Qur&apos;ani yang berilmu,
                      bertaqwa, berakhlakul karimah dan berprestasi.&quot;
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">Misi</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Mampu membaca Al-Qur'an dengan baik dan benar",
                      "Mampu memahami makna ayat-ayat dalam Al-Qur'an",
                      "Membentuk karakter santri yang berakhlakul karimah",
                      "Mengamalkan nilai-nilai mulia yang terkandung dalam Al-Qur'an",
                    ].map((misi, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {misi}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-700 mb-4">
                Profil TPQ
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-700 mb-1">
                        Alamat
                      </h3>
                      <p className="text-gray-600">
                        Karanggawang RT5 RW1, Mluweh, Ungaran Timur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-700 mb-1">
                        Tahun Berdiri
                      </h3>
                      <p className="text-gray-600">2004</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Hash className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-1">NIS</h3>
                      <p className="text-gray-600">411233221401</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-700 mb-1">
                        Jumlah Santri
                      </h3>
                      <p className="text-gray-600">46 Santri Aktif</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-1">
                        Jadwal
                      </h3>
                      <p className="text-gray-600">
                        Senin - Kamis, Sore ( 16.00 – 17.00 WIB ) dan ba&apos;da
                        Maghrib ( 18.00 – 19.00 WIB )
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-700 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:tpqalkaromah828@gmail.com"
                        className="text-gray-600 hover:underline"
                      >
                        tpqalkaromah828@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-screen pt-12 lg:mb-44 mb-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Lokasi TPQ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1752504527141!5m2!1sid!2sid!6m8!1m7!1sdprnPUiC1pJ-LfWQ-_AImA!2m2!1d-7.096018627649024!2d110.446546495317!3f160.44568136846!4f-14.011694236796004!5f0.7820865974627469"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.3670152607194!2d110.4465457437708!3d-7.096005327730966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f3a16ac1fa1%3A0xf7320e2b4a22768f!2sMASJID%20BAITUS%20SOLICHIN!5e0!3m2!1sid!2sid!4v1752504736253!5m2!1sid!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Kegiatan TPQ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Regular Activities */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">
                  Kegiatan Rutin
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Mengaji Iqra/ Turutan",
                  "Membaca Al-Qur'an",
                  "Hafalan Surat-Surat Pendek",
                  "Hafalan Doa-Doa Harian",
                  "Hafalan Bacaan Salat",
                  "Barzanji/ Dziba'an",
                  "Ziarah Kubur",
                  "Lomba-Lomba",
                  "Dan Lainnya",
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Activities */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-teal-700">
                  Kegiatan Khusus
                </h3>
              </div>

              <div className="space-y-4">
                {["Hari Santri", "Zarkasi", "Akhirusanah"].map(
                  (activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        {activity}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Pengurus TPQ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sujarman", role: "Pelindung" },
              { name: "Supriyono, S.Ag", role: "Penasehat" },
              { name: "Istajib", role: "Ketua" },
              { name: "Naely Miftahul Ulumi, S.Pd", role: "Sekretaris" },
              { name: "Mifrohah, S.Pd.I", role: "Bendahara" },
            ].map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  {teacher.name}
                </h3>
                <p className="text-gray-600">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Fasilitas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🥁", name: "Alat Rebana" },
              { icon: "🕌", name: "Masjid" },
              { icon: "📖", name: "Al-Qur'an" },
              { icon: "🏫", name: "Ruangan Belajar" },
              { icon: "📶", name: "Wifi" },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-emerald-700">
                  {facility.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* Documentation Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Dokumentasi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lihat kegiatan dan suasana pembelajaran di TPQ Al Karomah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Photo Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-emerald-700 font-medium">Kegiatan Ngaji</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700 mb-1">
                  Pembelajaran Iqra
                </h3>
                <p className="text-gray-600 text-sm">
                  Santri sedang belajar membaca Iqra dengan penuh konsentrasi
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Photo Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-teal-200 to-green-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-teal-700 font-medium">Kegiatan Bersama</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-teal-700 mb-1">
                  Berjanji Bersama
                </h3>
                <p className="text-gray-600 text-sm">
                  Santri melakukan kegiatan berjanji dengan penuh khidmat
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Photo Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-700 font-medium">Kegiatan Khusus</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-green-700 mb-1">
                  Perayaan Hari Santri
                </h3>
                <p className="text-gray-600 text-sm">
                  Suasana perayaan Hari Santri dengan berbagai kegiatan menarik
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Photo Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-emerald-700 font-medium">Kebersamaan</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700 mb-1">
                  Foto Bersama
                </h3>
                <p className="text-gray-600 text-sm">
                  Kebersamaan ustadz dan santri dalam satu frame
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Photo Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-teal-200 to-green-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-teal-700 font-medium">Prestasi</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-teal-700 mb-1">
                  Pemberian Reward
                </h3>
                <p className="text-gray-600 text-sm">
                  Santri berprestasi mendapat apresiasi dari ustadz
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Photo Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center overflow-hidden">
                <Image src={ngaji} alt="Kegiatan Ngaji" />
                {/* <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-700 font-medium">Ziarah</p>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-green-700 mb-1">
                  Kegiatan Ziarah
                </h3>
                <p className="text-gray-600 text-sm">
                  Santri mengikuti kegiatan ziarah untuk pembelajaran spiritual
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="/dokumentasi"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Lihat Dokumentasi Lainnya</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-sm">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="kontak"
        className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Ingin tahu lebih lanjut atau ingin bergabung sebagai
              santri/relawan?
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-6 h-6" />
                <span className="text-2xl font-bold">0895-2224-6622</span>
              </div>
              <p className="text-emerald-100">Istajib</p>
            </div>

            <a
              href="https://wa.me/6289522246622"
              className="group inline-flex items-center gap-3 bg-white text-emerald-600 py-4 px-8 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chat di WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TPQLandingPage;
