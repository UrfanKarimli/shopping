import { cookies } from 'next/headers';
import { loadMessages } from '@/utils/loadMessages';

export default async function getRequestConfig() {
  // cookies API-dən locale-ni alırıq
  const cookieStore = await cookies(); // await əlavə edirik

  const locale = cookieStore.get('locale')?.value || 'az'; // locale cookie-sini alırıq, yoxsa default olaraq 'az'

  // Mesajları yükləyirik
  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
  };
}
