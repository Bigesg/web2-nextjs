import Link from "next/link"

export default function Profile() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6">

      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-12 max-w-3xl w-full">

        <div className="text-center">

          <div className="w-28 h-28 mx-auto rounded-full bg-indigo-500 flex items-center justify-center text-white text-4xl shadow-lg mb-6">
            👨‍💻
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            BIGES G
          </h1>

          <p className="text-indigo-600 font-medium mb-6">
            Informatics Student | Web Developer
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="font-semibold text-lg mb-2 text-indigo-600">
              Personal Info
            </h2>
            <p><strong>Nama:</strong> BIGES G</p>
            <p><strong>NIM:</strong> 33424005</p>
            <p><strong>Kelas:</strong> IK-2A</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="font-semibold text-lg mb-2 text-indigo-600">
              Interests
            </h2>
            <p>• Web Development</p>
            <p>• Cloud Computing</p>
            <p>• Software Engineering</p>
          </div>

        </div>

        <div className="mt-8 text-center">

          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  )
}