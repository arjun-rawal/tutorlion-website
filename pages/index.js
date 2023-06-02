import Head from "next/head";
import HomePage from "./homePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tutor Lion | Home</title>
        <meta
          name="description"
          content="Welcome to Tutor Lion - your local tutoring solution!"
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
