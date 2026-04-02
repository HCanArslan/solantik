export async function POST(request: Request) {
  const body = await request.json()

  const { name, email, company, message } = body
  if (!name || !email || !company || !message) {
    return Response.json(
      { success: false, message: 'Tüm zorunlu alanları doldurun.' },
      { status: 400 }
    )
  }
  if (!email.includes('@')) {
    return Response.json(
      { success: false, message: 'Geçersiz e-posta adresi.' },
      { status: 400 }
    )
  }

  // TODO: nodemailer veya Resend ile e-posta entegrasyonu
  console.log('Contact form submission:', body)

  return Response.json({ success: true, message: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.' })
}
