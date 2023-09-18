import { Logo } from "./Logo";
import { LifeBuoy, Search, Settings } from "lucide-react";
import { NavItem } from "./MainNavigation/NavItem";
import { Home, BarChart2, SquareStack, CheckSquare, Flag, Users } from 'lucide-react'
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export function Sidebar() {
  return (
      <aside className=' flex flex-col gap-6 border-r border-zinc-300 px-5 py-8'>
        <Logo/>

        <div className=" mx-1 flex items-center gap-2 w-full rounded border border-zinc-300 px-3 py-2 shadow-sm">
          <Search className="w-5 h-5 text-zinc-500"/>
          <input className="flex-1 borde-0 text-zinc-900 placeholder-zinc-600" placeholder="Search"/>
        </div>

        <nav className='space-y-2'>
          <NavItem title="Home" icon={Home}/>
          <NavItem title="Dashboard" icon={BarChart2} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <nav className=" flex flex-col gap-6 mt-auto ">
          <NavItem title="Suport" icon={LifeBuoy}/>
          <NavItem title="Settings" icon={Settings} /> 
        </nav>
      
        <UsedSpaceWidget/>
    </aside>
  )
}