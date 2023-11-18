import Sidebar from "@/components/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex justify-between'>
      <Sidebar />
      {children}
    </main>
  );
};

export default DashBoardLayout;
