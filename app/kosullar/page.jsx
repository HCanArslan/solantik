export default function KosullarPage() {
  return (
    <main className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl font-medium mb-6">Kullanım Koşulları</h1>
      <p className="text-sm text-[var(--muted)] leading-relaxed">
        Bu sayfa yakında güncellenecektir. Kullanım koşullarımız hakkında sorularınız için:{' '}
        <a href="mailto:hello@solantik.com" className="text-[var(--accent)] hover:underline">
          hello@solantik.com
        </a>
      </p>
    </main>
  )
}
