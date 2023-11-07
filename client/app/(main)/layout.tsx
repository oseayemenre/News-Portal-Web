import Footer from "@/components/footer";
import NavLayout from "@/components/nav-layout";

type RootLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className={`w-full`}>
      <NavLayout />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
