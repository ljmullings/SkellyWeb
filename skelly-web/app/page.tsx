export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 flex flex-col items-center gap-16">
      {/* Title and Subtitle */}
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to SkellyWeb</h1>
        <p className="text-lg sm:text-xl text-gray-600">Your one-stop solution for learning and building web apps</p>
      </header>

      {/* Widgets Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Widget 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Widget 1</h2>
          <p className="text-gray-600">Description of what Widget 1 does or represents.</p>
        </div>

        {/* Widget 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Widget 2</h2>
          <p className="text-gray-600">Description of what Widget 2 does or represents.</p>
        </div>

        {/* Widget 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Widget 3</h2>
          <p className="text-gray-600">Description of what Widget 3 does or represents.</p>
        </div>

        {/* Widget 4 */}
        <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Widget 4</h2>
          <p className="text-gray-600">Description of what Widget 4 does or represents.</p>
        </div>
      </section>
    </div>
  );
}
