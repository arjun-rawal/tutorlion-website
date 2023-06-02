import Head from "next/head";
import HomePage from "./homePage";
import Testimonials from "@/components/testimonials";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tutor Lion | Home</title>
        <meta
          name="description"
          content="For Students, By Students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <HomePage />

      {/* <footer>
        <p>&copy; {new Date().getFullYear()} Tutor Lion. All rights reserved.</p>
      </footer> */}
    </>
  );
};

export default Home;
