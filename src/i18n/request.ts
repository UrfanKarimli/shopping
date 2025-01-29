import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { loadMessages } from '@/utils/loadMessages';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale artıq Promise olaraq gəlir, ona görə await istifadə etmək lazımdır
  const locale: string = (await requestLocale) || routing.defaultLocale;

  // Mesajları yüklə
  const messages = await loadMessages(locale);

  return {
    locale,  // 'locale' artıq string tipində olacaq
    messages,
  };
});
