import type { NextPage } from "next";
import Head from "next/head";
import { StoreData } from "../@types/data";
import { Main } from "../styles/components/main.style";
import { useGet } from "../utils/hermes";

const Home: NextPage = () => {
    const [res, loading, err] = useGet(
        "https://run.mocky.io/v3/5194b007-b9b9-4748-a63f-f5db0ee4cd47"
    );
    const shopData: StoreData = res?.data;

    console.log(res.data);

    return (
        <div>
            <Head>
                <title>
                    {shopData?.hustle?.name || "Hustle Shop"}
                </title>
                <meta
                    name="description"
                    content={
                        shopData
                            ? `Hustle shop for ${shopData.hustle?.name}`
                            : "Hustle shop"
                    }
                />
                <link
                    rel="icon"
                    href={shopData?.hustle?.shop_logo ||  "/favicon.ico"}
                />
            </Head>
            
            <Main>
                Hello
            </Main>
        </div>
    );
};

export default Home;
