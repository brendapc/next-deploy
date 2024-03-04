import Navbar from "./Navbar";

const Layout = ({children}: any) =>
  <>
    <Navbar />
    { children }
  </>

export default Layout;