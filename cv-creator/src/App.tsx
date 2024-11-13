
function App() {


  return (
    <>
      <div className="bg-blue-400 h-screen w-screen grid grid-cols-1 grid-rows-12 lg:grid-cols-12 lg:grid-rows-12">
        <div className="bg-red-400 lg:col-span-7 lg:row-span-1"></div> {/* Navigation */}
        <div className="bg-orange-400 lg:col-span-5 lg:row-span-1"></div> {/* Empty Section */}
        <div className="bg-purple-400 row-span-6 lg:col-span-7 lg:row-span-11 lg:col-start-1"></div> {/* Caption */}
        <div className="bg-green-400 row-start-3 row-span-4 lg:col-span-5 lg:row-span-11 lg:col-start-1"></div> {/* Hero Image */}
      </div>
    </>
  )
}

export default App
