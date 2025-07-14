"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Users,
  MapPin,
  Star,
  ArrowLeft,
  Calendar,
  Camera,
  Filter,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import ngaji from "../../../public/img/ngaji.jpg";
import Image, { StaticImageData } from "next/image";

interface DocumentationItem {
  id: number;
  title: string;
  description: string;
  category: "learning" | "activities" | "events" | "facilities";
  date: string;
  image: StaticImageData; // Assuming ngaji is imported as StaticImageData from next/image
}

const DocumentationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<DocumentationItem | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Semua", icon: Camera },
    { id: "learning", name: "Pembelajaran", icon: BookOpen },
    { id: "activities", name: "Kegiatan", icon: Users },
    { id: "events", name: "Acara Khusus", icon: Star },
    { id: "facilities", name: "Fasilitas", icon: MapPin },
  ];

  const documentationData: DocumentationItem[] = [
    {
      id: 1,
      title: "Pembelajaran Iqra Jilid 1",
      description:
        "Santri sedang belajar membaca Iqra jilid 1 dengan bimbingan ustadzah",
      category: "learning",
      date: "2024-01-15",
      image: ngaji,
    },
    {
      id: 2,
      title: "Kegiatan Berjanji Pagi",
      description:
        "Santri melakukan kegiatan berjanji sebelum memulai pembelajaran",
      category: "activities",
      date: "2024-01-20",
      image: ngaji,
    },
    {
      id: 3,
      title: "Perayaan Hari Santri 2024",
      description:
        "Suasana meriah perayaan Hari Santri dengan berbagai lomba dan kegiatan",
      category: "events",
      date: "2024-10-22",
      image: ngaji,
    },
    {
      id: 4,
      title: "Ruang Belajar TPQ",
      description:
        "Suasana ruang belajar yang nyaman dan kondusif untuk pembelajaran",
      category: "facilities",
      date: "2024-01-10",
      image: ngaji,
    },
    {
      id: 5,
      title: "Pembelajaran Al-Qur'an",
      description:
        "Santri senior sedang belajar membaca Al-Qur'an dengan tartil",
      category: "learning",
      date: "2024-02-01",
      image: ngaji,
    },
    {
      id: 6,
      title: "Kegiatan Maulid",
      description:
        "Santri berpartisipasi dalam kegiatan maulid dengan penuh khidmat",
      category: "activities",
      date: "2024-03-15",
      image: ngaji,
    },
    {
      id: 7,
      title: "Ziarah Makam Wali",
      description: "Kegiatan ziarah untuk pembelajaran sejarah dan spiritual",
      category: "events",
      date: "2024-04-20",
      image: ngaji,
    },
    {
      id: 8,
      title: "Alat Rebana TPQ",
      description:
        "Koleksi alat rebana yang digunakan untuk kegiatan seni dan budaya",
      category: "facilities",
      date: "2024-01-12",
      image: ngaji,
    },
    {
      id: 9,
      title: "Ujian Kenaikan Jilid",
      description:
        "Santri mengikuti ujian kenaikan jilid dengan penuh semangat",
      category: "learning",
      date: "2024-06-15",
      image: ngaji,
    },
    {
      id: 10,
      title: "Kegiatan Gotong Royong",
      description:
        "Santri dan ustadz bergotong royong membersihkan lingkungan TPQ",
      category: "activities",
      date: "2024-05-01",
      image: ngaji,
    },
    {
      id: 11,
      title: "Pembagian Hadiah",
      description:
        "Pembagian hadiah untuk santri berprestasi dan rajin mengaji",
      category: "events",
      date: "2024-07-10",
      image: ngaji,
    },
    {
      id: 12,
      title: "Masjid TPQ Al Karamah",
      description: "Masjid yang digunakan untuk kegiatan shalat berjamaah",
      category: "facilities",
      date: "2024-01-08",
      image: ngaji,
    },
  ];

  const filteredData = documentationData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const PhotoPlaceholder = ({ item }: { item: { title: string } }) => (
    <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center">
      <div className="text-center">
        <Image src={ngaji} alt="ngaji" className="w-full h-full" />
        {/* <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
          {item.category === "learning" && (
            <BookOpen className="w-8 h-8 text-white" />
          )}
          {item.category === "activities" && (
            <Users className="w-8 h-8 text-white" />
          )}
          {item.category === "events" && (
            <Star className="w-8 h-8 text-white" />
          )}
          {item.category === "facilities" && (
            <MapPin className="w-8 h-8 text-white" />
          )}
        </div> */}
        <p className="text-emerald-700 font-medium text-sm">{item.title}</p>
      </div>
    </div>
  );

  const Modal = ({
    image,
    onClose,
  }: {
    image: { title: string; date: string; description: string };
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="bg-white rounded-2xl overflow-hidden">
          <PhotoPlaceholder item={image} />
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-600 font-medium">
                {formatDate(image.date)}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-3">
              {image.title}
            </h3>
            <p className="text-gray-600 text-lg">{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Dokumentasi</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto">
              Koleksi foto kegiatan dan suasana pembelajaran di TPQ Al Karamah
            </p>
          </div>
        </div>
      </header>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <Filter className="w-5 h-5" />
                <span>Kategori:</span>
              </div>
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-emerald-600 text-white shadow-lg"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari dokumentasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-emerald-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Menampilkan {filteredData.length} dokumentasi
              {selectedCategory !== "all" && (
                <span className="text-emerald-600 font-medium">
                  {" "}
                  dalam kategori
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((item: DocumentationItem) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <PhotoPlaceholder item={item} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find((c) => c.id === item.category)?.name}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600 text-sm font-medium">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="font-bold text-emerald-700 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description.length > 80
                      ? item.description.substring(0, 80) + "..."
                      : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Tidak ada dokumentasi ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kategori atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back to Top */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">TPQ Al Karamah</h2>
          <p className="text-emerald-100 mb-6">
            Pusat Pendidikan Al-Qur&apos;an untuk Anak-anak
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-200">
            <MapPin className="w-5 h-5" />
            <span>Karanggawang RT5 RW1, Mluweh, Ungaran Timur</span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </main>
  );
};

export default DocumentationPage;
