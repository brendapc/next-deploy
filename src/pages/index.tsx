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
          resources={resources.slice(0, 2)}
        />
        <Newsletter />
        <ResourceList resources={resources.slice(2)} />
        <Footer />
      </>
    )
  }
  
  
  export default Home;