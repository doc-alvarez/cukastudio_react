import { Suspense } from "react";
import cuka1 from '../cuka1.jpeg'
import cukahome from '../cukahome.jpeg'
import { Link } from "@shopify/hydrogen";

import { Layout } from "../components/Layout.server";



export default function Home() {
  return (
    <Layout>
      <Suspense>
      <div id="home_container">
        <Link to="/kids">
          <div>
            <img src={cuka1}/>
            <h1>Kids</h1>
          </div>
        </Link>
        <Link to="/home">
          <div>
            <img src={cukahome}/>
            <h1>Home</h1>
          </div>
        </Link>
      </div>
      </Suspense>
    </Layout>
  );
}


