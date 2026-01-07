import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Management
          </h1>
          <p className="text-xl text gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your inventory tracking with this powerful, easy-to-use management system. Track products, stock levels, and gain valuable insignts.
          </p>
        </div>
      </div>
    </div>
  );
}
