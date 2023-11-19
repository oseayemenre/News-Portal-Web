import DashboardFooter from "@/components/dashboard_footer";
import DashboardNav from "@/components/dashboard_nav";
import Sidebar from "@/components/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='w-full relative'>
        <DashboardNav />
        {children}
        <DashboardFooter />
      </div>
    </main>
  );
};

export default DashBoardLayout;
