export default function KaralicHomepage() {
  const categories = [
    "Yüzey Temizleyiciler",
    "Deterjanlar",
    "Kağıt Ürünleri",
    "Endüstriyel Temizlik",
    "Hijyen Ürünleri",
  ];

  const advantages = [
    {
      title: "Hızlı Teslimat",
      text: "Siparişleriniz güvenli ve hızlı şekilde adresinize ulaştırılır.",
    },
    {
      title: "Kaliteli Ürün",
      text: "Profesyonel kullanım için dayanıklı ve etkili ürünler.",
    },
    {
      title: "Uygun Fiyat",
      text: "Bütçenize uygun ekonomik çözümler sunuyoruz.",
    },
    {
      title: "Müşteri Memnuniyeti",
      text: "Her zaman çözüm odaklı hizmet anlayışı.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="/logo.Png"
                alt="KARALİÇ Logo"
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                KARALİÇ
              </h1>
              <p className="text-sm text-slate-500 font-medium tracking-wide">
                Profesyonel Temizlik Ürünleri
              </p>
            </div>
          </div>

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-200/20 blur-3xl rounded-full" />

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-emerald-600 transition">
              Ana Sayfa
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Hakkımızda
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Ürünler
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Kategoriler
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              İletişim
            </a>
          </nav>

          <button className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-5 py-2 rounded-xl shadow-md">
            Teklif Al
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Profesyonel Temizlik Çözümleri
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
              Hijyenin
              <span className="text-emerald-500"> Güvenilir </span>
              Adresi
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              KARALİÇ olarak evsel ve endüstriyel temizlik ürünlerinde
              kaliteli, ekonomik ve profesyonel çözümler sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-slate-900 to-emerald-600 text-white px-7 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition duration-300">
                Ürünleri İncele
              </button>

              <button className="border border-slate-300 bg-white/70 backdrop-blur px-7 py-4 rounded-2xl font-semibold hover:bg-white transition duration-300 shadow-sm">
                İletişime Geç
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/90 backdrop-blur-xl rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-10 border border-white/40 hover:scale-[1.02] transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                alt="Temizlik Ürünleri"
                className="rounded-3xl object-cover w-full h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-900">
            Ürün Kategorileri
          </h3>
          <p className="mt-4 text-slate-600 text-lg">
            İhtiyacınıza uygun profesyonel temizlik ürünleri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 mb-6" />
              <h4 className="font-bold text-lg text-slate-900">{item}</h4>
              <p className="mt-3 text-slate-500 text-sm leading-6">
                Kaliteli ve etkili temizlik çözümleri.
              </p>
            </div>
          ))}
        </div>
      </section>
{/* Products */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold text-slate-900">
        Öne Çıkan Ürünler
      </h3>

      <p className="mt-4 text-slate-600 text-lg">
        Profesyonel temizlik için en çok tercih edilen ürünlerimiz.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Product 1 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop"
          alt="Çamaşır Suyu"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-xl font-bold text-slate-900">
            Çamaşır Suyu
          </h4>

          <p className="mt-3 text-slate-600 leading-7 text-sm">
            Güçlü hijyen sağlayan profesyonel temizlik çözümü.
          </p>

          <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
            İncele
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop"
          alt="Sıvı Sabun"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-xl font-bold text-slate-900">
            Sıvı Sabun
          </h4>

          <p className="mt-3 text-slate-600 leading-7 text-sm">
            Ferah kokulu ve etkili hijyen sağlayan sıvı sabun.
          </p>

          <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
            İncele
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop"
          alt="Yüzey Temizleyici"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-xl font-bold text-slate-900">
            Yüzey Temizleyici
          </h4>

          <p className="mt-3 text-slate-600 leading-7 text-sm">
            Tüm yüzeylerde etkili ve parlak temizlik sağlar.
          </p>

          <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
            İncele
          </button>
        </div>
      </div>

      {/* Product 4 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop"
          alt="Endüstriyel Deterjan"
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h4 className="text-xl font-bold text-slate-900">
            Endüstriyel Deterjan
          </h4>

          <p className="mt-3 text-slate-600 leading-7 text-sm">
            Profesyonel kullanım için güçlü temizlik performansı.
          </p>

          <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
            İncele
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Advantages */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900">
              Neden KARALİÇ?
            </h3>
            <p className="mt-4 text-slate-600 text-lg">
              Güvenilir hizmet anlayışımızla yanınızdayız.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 mb-6" />
                <h4 className="text-xl font-bold text-slate-900">
                  {advantage.title}
                </h4>
                <p className="mt-4 text-slate-600 leading-7">
                  {advantage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-slate-900 to-emerald-700 rounded-[40px] p-14 text-center text-white shadow-2xl">
            <h3 className="text-4xl font-bold leading-tight">
              Profesyonel Temizlik Ürünleri İçin
              <br />
              Bizimle İletişime Geçin
            </h3>

            <p className="mt-6 text-slate-200 text-lg max-w-2xl mx-auto leading-8">
              İşletmeniz veya eviniz için en uygun temizlik çözümlerini
              birlikte belirleyelim.
            </p>

            <button className="mt-10 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Hemen Teklif Al
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <a
  href="https://wa.me/905XXXXXXXXX"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.601 2.326A7.854 7.854 0 0 0 8.015 0C3.603 0 .015 3.588.015 8c0 1.409.369 2.783 1.07 3.995L0 16l4.147-1.086A7.963 7.963 0 0 0 8.015 16c4.411 0 8-3.588 8-8a7.95 7.95 0 0 0-2.414-5.674zM8.015 14.5a6.48 6.48 0 0 1-3.301-.9l-.236-.141-2.461.645.657-2.4-.154-.246A6.47 6.47 0 0 1 1.515 8c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm3.582-4.832c-.196-.098-1.159-.572-1.338-.637-.18-.066-.311-.098-.442.098-.131.197-.507.637-.622.768-.114.131-.229.147-.425.05-.196-.098-.827-.304-1.576-.97-.583-.52-.977-1.161-1.091-1.358-.114-.196-.012-.302.086-.4.088-.087.196-.229.294-.343.098-.114.131-.196.196-.327.065-.131.033-.245-.016-.343-.049-.098-.442-1.066-.605-1.46-.159-.382-.32-.33-.442-.337l-.376-.007c-.131 0-.343.05-.523.245-.18.196-.687.67-.687 1.635 0 .964.703 1.896.801 2.027.098.131 1.384 2.113 3.354 2.962.469.202.835.323 1.12.414.47.149.898.128 1.236.078.377-.056 1.159-.474 1.322-.932.163-.458.163-.85.114-.932-.049-.081-.18-.131-.376-.229z"/>
  </svg>
</a>
      <footer className="bg-slate-900 text-slate-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white">KARALİÇ</h4>
            <p className="mt-4 leading-7 text-slate-400">
              Temizlik ürünlerinde kaliteli, güvenilir ve profesyonel çözümler.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              Menü
            </h5>
            <ul className="space-y-3 text-slate-400">
              <li>Ana Sayfa</li>
              <li>Ürünler</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">
              İletişim
            </h5>
            <ul className="space-y-3 text-slate-400">
              <li>+90 554 732 31 31</li>
              <li>info@karalic.com</li>
              <li>Aydın / Söke / Türkiye</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

