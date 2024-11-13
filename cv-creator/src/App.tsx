//Components
import Navigation from "./components/Navigation"


function App() {


  return (
    <>
      <div className="px-16 py-10 h-screen w-screen grid grid-cols-1 grid-rows-12 lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-7 lg:row-span-1">
          <Navigation />  
        </div> {/* Navigation */}
        <div className="lg:col-span-5 lg:row-span-1"></div> {/* Empty Section */}
        <div className="row-span-6 lg:col-span-7 lg:row-span-11 lg:col-start-1"></div> {/* Caption */}
        <div className="row-start-3 row-span-4 lg:col-span-5 lg:row-span-11 lg:col-start-1"></div> {/* Hero Image */}
      </div>
    </>
  )
}

export default App
