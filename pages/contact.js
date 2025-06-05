import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Contact() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('پیام شما ارسال شد!')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>{t('contact.title')} - StudyPay</title>
        <meta name="description" content={t('contact.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  StudyPay
                </Link>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    {t('nav.home')}
                  </Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    {t('nav.about')}
                  </Link>
                  <Link href="/contact" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    {t('nav.contact')}
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => changeLanguage(locale === 'fa' ? 'en' : 'fa')}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                >
                  {locale === 'fa' ? 'English' : 'فارسی'}
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  اطلاعات تماس
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ایمیل</p>
                      <p className="text-gray-600">{t('contact.info.email')}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169-.446-.77-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.169-.446-.769-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228-.172-.446-.77-.446-.942 0-.172.445-.547 1.228-1.005 1.228-.458 0-.833-.783-1.005-1.228z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">تلگرام</p>
                      <p className="text-gray-600">{t('contact.info.telegram')}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">پشتیبانی</p>
                      <p className="text-gray-600">{t('contact.info.phone')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">پاسخگویی سریع</h3>
                <p className="mb-4">
                  تیم پشتیبانی ما آماده پاسخگویی به سوالات شما در کمترین زمان ممکن است.
                </p>
                <p className="text-sm opacity-90">
                  زمان پاسخگویی: ۹ صبح تا ۱۲ شب
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link href="/" className="text-2xl font-bold text-white">
                  StudyPay
                </Link>
                <p className="text-gray-300 mt-4">
                  {t('footer.description')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                      {t('footer.links.about')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                      {t('footer.links.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('contact.info.telegram')}</h3>
                <p className="text-gray-300">{t('contact.info.email')}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                © 2024 StudyPay. {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
