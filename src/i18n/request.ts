import { cookies } from 'next/headers';
import { loadMessages } from '@/utils/loadMessages';
// import { store } from '@/store/store';
// import { setLocale } from '@/store/localeSlice';

export default async function getRequestConfig() {
  // cookies API-dən locale-ni alırıq
  const cookieStore = await cookies(); // await əlavə edirik

  const locale = cookieStore.get('sifarish-locale')?.value || 'az'; // locale cookie-sini alırıq, yoxsa default olaraq 'az'

  // Mesajları yükləyirik
  const messages = await loadMessages(locale);
  // store.dispatch(setLocale(locale));
  return {
    locale,
    messages,
  };
}

