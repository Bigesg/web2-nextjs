import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 p-6">
      
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-12 max-w-2xl text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Next.js Website
        </h1>

        <p className="text-indigo-600 font-medium mb-6">
          Informatics Student | Web Development Enthusiast
        </p>

        <div className="bg-gray-100 p-6 rounded-xl mb-6 text-gray-700">
          <p><strong>Nama:</strong> BIGES G</p>
          <p><strong>NIM:</strong> 33424005</p>
          <p><strong>Kelas:</strong> IK-2A</p>
        </div>

        <Link 
          href="/profile"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Profile
        </Link>

      </div>

    </main>
  )
}