import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { MdDashboard, MdSettings } from "react-icons/md";
import { BsChatTextFill, BsFillPersonFill, BsFillCalendarEventFill, BsSearch, BsFillPieChartFill, BsFolderFill } from "react-icons/bs";


function App() {

  const [open, setOpen] = useState(true)

  const Menus = [
    {title: "Dashboard", src: <MdDashboard />},
    {title: "Inbox", src: <BsChatTextFill />},
    {title: "Accounts", src: <BsFillPersonFill />, gap: true},
    {title: "Schedule", src: <BsFillCalendarEventFill />},
    {title: "Search", src: <BsSearch />},
    {title: "Analytics", src: <BsFillPieChartFill />},
    {title: "Files", src: <BsFolderFill />, gap: true},
    {title: "Settings", src: <MdSettings />}
  ]

  return (
    <aside className="flex">
        <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 h-screen bg-dark-blue relative duration-300`}>

          <AiFillCaretLeft onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-[2rem] h-7 w-7 rounded-full bg-white border-2 border-dark-blue ${!open && 'rotate-180'}`} />

          <div className="flex gap-x-4 items-center">
            <div className={`text-white text-2xl cursor-pointer duration-500`}>
              <RiAdminFill />
            </div>
            <h2 className={`text-white origin-left uppercase font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Dela Ricch</h2>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li key={index} className={`text-sm text-zinc-200 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}`}>
                <div className="text-xl">{menu.src}</div>
                <span className={`origin-left duration-300 ${!open && 'scale-0'}`}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 font-semibold text-2xl flex-1 h-screen">
          <h1>Home Page</h1>
        </div>
    </aside>
  );
}

export default App;
