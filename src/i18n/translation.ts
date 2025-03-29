import i18n from "@/i18n"
import { nextTick } from "vue"

const Trans = {
  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
  },

  get currentLocale() {
    return i18n.global.locale
  },

  set currentLocale(newLocale) {
    i18n.global.locale = newLocale
  },

  async switchLanguage(newLocale: string) {
    await Trans.loadLocaleMessages(newLocale)
    Trans.currentLocale.value = newLocale
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("lang", newLocale);
    }
    localStorage.setItem("user-locale", newLocale)
  },

  async loadLocaleMessages(locale: string) {
    if(!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick()
  },

  isLocaleSupported(locale: string) {
    return Trans.supportedLocales.includes(locale)
  },

  getUserLocale() {
    const locale = window.navigator.language || Trans.defaultLocale

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale")

    if(persistedLocale && Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale()
    if(userPersistedLocale) {
      return userPersistedLocale
    }

    const userPreferredLocale = Trans.getUserLocale()

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  async routeMiddleware(to: import("vue-router").RouteLocationNormalized & { params: { locale?: string } }, _from: import("vue-router").RouteLocationNormalized, next: import("vue-router").NavigationGuardNext) {
    const paramLocale = to.params.locale

    if(!paramLocale || !Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale())
    }

    await Trans.switchLanguage(paramLocale)

    return next()
  },

  i18nRoute(to: import("vue-router").RouteLocationRaw = {}) {
    return {
      ...(to as Record<string, unknown>),
      params: {
        locale: Trans.currentLocale,
        ...(typeof to === 'object' && 'params' in to ? to.params : {})
      }
    }
  }
}

export default Trans
