import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <Toaster />
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "MSN India | Breaking News,Entertainment,...",
  discription: "",
  keywords: "",
  author: "Aman_Chandra",
};

export default Layout;
