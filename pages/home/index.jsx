import React from "react";
import Layout from "@components/layout/Layout";
import Content from "@pages/home/content";

const Home = () => {

    return(
        <>
            <Layout >
                {
                    <Content />
                }
            </Layout>
        </>
    )
}

export default Home;