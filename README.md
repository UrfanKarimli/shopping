# Next.js Project

Bu layihə Next.js öyrənmə məqsədi ilə yaradılıb və inkşaf etdirilib. Layihədə modern frontend texnologiyalarından istifadə olunmuşdur.

This project was created and developed for learning Next.js. It utilizes modern frontend technologies.

## 🌟 Texnologiyalar | Technologies

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit & RTK Query**
- **Ant Design**
- **next-intl** (İçində beynəlxalqlaşdırma | Internationalization)
- **react-icons**

## 📚 Layihə Strukturu | Project Structure

```plaintext
public/            # Şəkillər və statik fayllar | Images and static files

src/
  app/             # Next.js app router strukturunda səhifələr | Pages in Next.js App Router
  components/      # Yenidən istifadə olunan komponentlər | Reusable components
  i18n/            # Beynəlxalqlaşdırma üçün tərtibatlar | Internationalization setup
  services/        # API ilə əlaqə və digər xidmətlər | API calls and other services
  store/           # Global state managment (Redux Toolkit)
  utils/           # Yardımçı funksiyalar | Utility functions
```

## 🚀 Quraşdırma və İşə Salma | Installation & Running

1. **Depoyu klonlayın | Clone the repository:**

   ```sh
   git clone https://github.com/sizin-layihe.git
   cd sizin-layihe
   ```

2. **Lazımi asılılıqları quraşdırın | Install dependencies:**

   ```sh
   pnpm install  # və ya npm install / yarn install
   ```

3. **İnkişaf rejimində işə salın | Start in development mode:**

   ```sh
   pnpm dev  # və ya npm run dev / yarn dev
   ```

4. **Proqramı brauzerdə açın | Open in browser:**

   ```sh
   http://localhost:3000
   ```

## 🌐 Beynəlxalqlaşdırma | Internationalization (i18n)

Layihədə `next-intl` istifadə edilərək çoxdilli dəstək təmin edilmişdir. Dil seçimlərini `i18n/` qovluğunda tapa bilərsiniz.

The project supports multiple languages using `next-intl`. Language configurations are located in the `i18n/` folder.

## ⚡ State Management

Redux Toolkit və RTK Query istifadə edərək, global state idarə olunur və API sorğuları optimallaşdırılır.

State management is handled using Redux Toolkit & RTK Query for optimized API requests and state management.

## ✨ UI Kitabxanası | UI Library

Layihədə **Ant Design** istifadəyə verilmişdir. UI komponentlərini sürətli və effektiv şəkildə yaratmaq üçün istifadə olunur.

Ant Design is used as the UI library to create efficient and beautiful components.

