import React from "react";
import Layout from "@components/layout/Layout";
import Content from "@pages/favorites/content";

const Favorites = () => {
    return (
        <>
            <Layout>
                {
                    <Content />
                }
            </Layout>
        </>
    )
}

export default Favorites;