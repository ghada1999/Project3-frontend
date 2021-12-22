// import React from "react";
// import Head from "next/head";
// import NavBar from "../components/NavBar";

// import styles from "../styles/Home.module.css";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Head>
//         <title>Ghada HW</title>
       
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
//           crossorigin="anonymous"
//         ></link>
//       </Head>
//       <NavBar />
//       <main className={styles.main}>{children}</main>
      
//     </>
//   );
// };

// export default Layout;

// import Header from "./Header";
import NavBar from "./NavBar"
export default function Layout({ children }) {
  return (
    <div>
      <NavBar/>
      <div>{children}</div>
    </div>
  );
}