import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Newsletter from "~/components/Newsletter";
import ResourceHighlight from "~/components/ResourceHighlight";
import ResourceList from "~/components/ResourceList";
import Resource from "~/types/Resource";


function Home({ resources }: {resources: Resource[]}) {
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
  
// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}

export default Home;