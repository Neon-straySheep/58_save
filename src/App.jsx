export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* 背景画像 */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeHotoke.png')" }}
      />

      {/* コンテンツ */}
      <div className="max-w-3xl mx-auto py-20 px-6 text-brack">
        <h1 className="text-4xl font-bold mb-8">固定背景とスクロール可能な内容</h1>
        {[...Array(30)].map((_, i) => (
          <p key={i} className="mb-4">
            スクロールテキスト #{i + 1}
          </p>
        ))}
      </div>
    </div>
  );
}
