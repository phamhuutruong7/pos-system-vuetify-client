import { createI18n } from "vue-i18n"

import en from "./locales/en.json"
import fr from "./locales/fr.json"
import de from "./locales/de.json"
import vi from "./locales/vi.json"
// const messages = {
//   en: {
//     nav: {
//       home: "Home",
//       about: "About"
//     },
//     home: {
//       header: "Welcome to the Vue 3 I18n tutorial!",
//       created_by: "This tutorial was brought to you by {company}.",
//       num_visits: "This page hasn't been visited :( | This page has been visited {n} time | This page has been visited {n} times"
//     },
//     about: {
//       header: "About us",
//       donations: "Donations raised:"
//     }
//   },
//   ru: {
//     nav: {
//       home: "Главная",
//       about: "О нас"
//     },
//     home: {
//       header: "Добро пожаловать в руководство Vue 3 I18n!",
//       created_by: "Это руководство создано для вас компанией {company}.",
//       num_visits: "Страницу не посещали :( | Страницу посетили {n} раз | Страницу посетили {n} раза | Страницу посетили {n} раз"
//     },
//     about: {
//       header: "О нас",
//       donations: "Пожертвований собрано:"
//     }
//   }
// }

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || "en",
  legacy: false,
  globalInjection: true,
  messages: { en,fr, de, vi },
  runtimeOnly: false,
})

export default i18n
