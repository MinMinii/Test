import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function About() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  const changeLanguage = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <>
      <Head>
        <title>{t('about.title')} - StudyPay</title>
        <meta name="description" content={t('about.description')} />
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
                  <Link href="/about" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                    {t('nav.about')}
                  </Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {t('about.mission.title')}
                </h2>
                <p className="text-blue-800 leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  {t('about.vision.title')}
                </h2>
                <p className="text-green-800 leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
              >
                {t('nav.contact')}
              </Link>
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
