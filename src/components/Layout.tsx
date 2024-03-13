import Navbar from "./Navbar";

const Layout = ({children}: React.PropsWithChildren) =>
  <>
    <Navbar />
    { children }
  </>

export default Layout;