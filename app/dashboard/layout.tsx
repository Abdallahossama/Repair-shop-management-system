import TopNavBar from "@/components/top-nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <TopNavBar />
      <div className="px-5 ">{children}</div>
    </div>
  );
};

export default Layout;
