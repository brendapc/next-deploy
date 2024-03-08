import { resources } from "~/api/data";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Newsletter from "~/components/Newsletter";
import ResourceHighlight from "~/components/ResourceHighlight";
import ResourceList from "~/components/ResourceList";


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