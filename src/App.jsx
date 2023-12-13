import "./App.css"
import Sidebar from "./Components/sidebar/sidebar"
import Feed from "./Components/Feed/Feed"
import Widgets from "./Components/widgets/widgets"
const App=()=>{
  return (
    <>
      <div className="MainApp">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </>
  )
}
export default App