import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your inventory tracking with this powerful, easy-to-use management system. Track products, stock levels, and gain valuable insignts.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-in" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Sign In
            </Link>
            <Link href="/sign-in" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors hover:text-white">
            Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
