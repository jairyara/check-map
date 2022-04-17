import React from "react";
import Layout from "@components/layout/Layout";
import Content from "@pages/search/content";
import {useRouter} from "next/router";

const Search = () => {

    return(
        <>
            <Layout>
                {
                    <Content />
                }
            </Layout>
        </>
    )
}

export default Search;