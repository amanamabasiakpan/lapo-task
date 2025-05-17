import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import QuickActions from "../components/QuickActions";
import Analytics from "../components/Analytics";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 px-8 py-6 bg-[#f9fafc] min-h-screen overflow-auto">
        <Header />
        <QuickActions />
        <Analytics />
      </main>
    </>
  );
}