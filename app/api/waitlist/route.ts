export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || !email.includes('@')) {
    return Response.json(
      { success: false, message: 'Geçersiz e-posta adresi.' },
      { status: 400 }
    )
  }

  // TODO: Veritabanı veya e-posta servisi entegrasyonu
  console.log('Waitlist signup:', email)

  return Response.json({
    success: true,
    message: 'Erken erişim listemize kaydoldunuz! Yakında haber vereceğiz.'
  })
}
