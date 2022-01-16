import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ({ children }) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="relative sm:overflow-hidden bg-white dark:bg-primary-cobalt-blue-700 flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
