import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import QuickActions from "../components/QuickActions";
import Analytics from "../components/Analytics";
import { useSelector } from 'react-redux';
import { selectSidebarIsOpen } from '../store/sidebarSlice';

export default function Dashboard() {
  const isOpen = useSelector(selectSidebarIsOpen);

  return (
    <>
      <Sidebar />
      <main className={`transition-all duration-300 px-8 py-6 bg-[#f9fafc] min-h-screen overflow-auto ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <Header />
        <QuickActions />
        <Analytics />
      </main>
    </>
  );
}