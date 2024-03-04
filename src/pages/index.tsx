import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Newsletter from "~/components/Newsletter";
import ResourceHighlight from "~/components/ResourceHighlight";
import ResourceList from "~/components/ResourceList";

import { resources } from "~/api/data";

function Home() {
    return (
      <>
        <Navbar/>
        <ResourceHighlight
          resources={resources}
        />
        <Newsletter />
        <ResourceList />
        <Footer />
      </>
    )
  }
  
  
  export default Home;