export const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-red-500">
          エラーが発生しました
        </h1>
        <p className="text-gray-700">
          申し訳ございません、何らかの問題が発生したようです。ページをリフレッシュするか、後ほどお試し下さい。
        </p>
      </div>
    </div>
  );
};
