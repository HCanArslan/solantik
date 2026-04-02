import './globals.css'

export const metadata = {
  title: 'Solantik — Siber Güvenlik Danışmanlığı & AI Destekli Pentest',
  description:
    'Solantik, işletmelere sızma testi, red team operasyonları ve tehdit modellemesi sunan butik siber güvenlik firmasıdır. AI destekli pentest platformumuz yakında.',
  keywords:
    'siber güvenlik danışmanlığı, pentest, sızma testi türkiye, red team, vulnerability assessment, KVKK güvenlik denetimi',
  authors: [{ name: 'Solantik' }],
  creator: 'Solantik',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://solantik.com',
    title: 'Solantik | Siber Güvenlik',
    description: 'İşletmenizin dijital savunmasını güçlendirin. Uzman ekibimizle tanışın.',
    siteName: 'Solantik',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solantik | Siber Güvenlik',
    description: 'İşletmenizin dijital savunmasını güçlendirin.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
