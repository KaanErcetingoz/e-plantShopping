
# Paradise Nursery Shopping Application - Final Project

Bu proje, **React** ve **Redux Toolkit** kullanarak bir çevrim içi bitki alışveriş sepeti uygulaması geliştirme projesidir.

## 🚀 Özellikler
- Açılış sayfası (Landing Page) - Ürün listesine yönlendiren bir buton.
- Ürün listeleme sayfası - Bitkiler kart formatında listelenir.
- Her ürün kartında: Görsel, isim, açıklama, fiyat ve **Add to Cart** butonu.
- Ürünler kategorilere ayrılabilir (örn. Aromatik, Tıbbi Bitkiler).
- Sepet sayfası:
  - Ürün görseli, adet, birim fiyat, toplam fiyat.
  - Adet artırma/azaltma, silme.
  - **Continue Shopping** ve **Checkout** butonları.
- Navbar’da sepet ikonu ve toplam ürün sayısı.

---

## 📌 Görevler

### 1️⃣ Task 1: ProductList Component
- `plantsArray` içerisindeki bitkileri `map()` ile listele.
- Her bitki için `Add to Cart` butonu ekle.
- `useState` ile `addedToCart` state’i oluştur.
- `handleAddToCart()` fonksiyonuyla ürünü Redux `addItem()` ile sepete ekle.
- Ürün eklendiğinde buton “Added to Cart” olmalı ve devre dışı kalmalı.

### 2️⃣ Task 2: Redux State Yönetimi (`CartSlice.jsx`)
- `addItem()`: Ürün sepete ekleme.
- `removeItem()`: Ürünü sepetten çıkarma.
- `updateQuantity()`: Ürün adedini güncelleme.
- Action’ları export et, reducer’ı default export yap.

### 3️⃣ Task 3: CartItems Component
- Sepetteki tüm ürünlerin toplam tutarını hesapla.
- Her ürünün alt toplamını (adet × birim fiyat) göster.
- `+` ve `-` butonları ile adet artır/azalt.
  - Adet `0` olursa ürün sepetten silinir.
- **Continue Shopping** butonu ile ürün listesine dön.
- **Checkout** butonunda şimdilik `alert()` göster.

### 4️⃣ Task 4: Redux Entegrasyonu
- `ProductList` → `addItem()` ile ürün ekleme.
- `CartItems` → `updateQuantity()` ve `removeItem()` ile sepet yönetimi.

### 5️⃣ Task 5: `store.js` Konfigürasyonu
- `configureStore()` ile store oluştur.
- `cart` reducer’ını ekle ve export et.

### 6️⃣ Task 6: Global Store Sağlama
- `main.jsx` içinde `<Provider store={store}>` ile tüm uygulamaya Redux erişimi sağla.

---

## 🔧 Kurulum ve Çalıştırma (macOS)
```bash
# Repo’yu klonla
git clone <forked-repo-link>
cd e-plantShopping

# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm run preview
```

Uygulama varsayılan olarak **http://localhost:4173** adresinde çalışır.

---

## 🌐 Yayına Alma (GitHub Pages)
`package.json` içine şu satırı ekle:
```json
"homepage": "https://<github-kullanici-adi>.github.io/e-plantShopping"
```
Ardından:
```bash
npm install gh-pages --save-dev
npm run deploy
```
GitHub Pages linkinden uygulamayı erişime açabilirsin.

---

## 📄 Lisans
© IBM Corporation. All rights reserved.
