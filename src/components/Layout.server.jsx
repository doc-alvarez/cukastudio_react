import {
    useShopQuery,
    CacheLong,
    gql,
    useUrl,
    Link,
    Seo,
  } from "@shopify/hydrogen";
  import { Suspense } from "react";
  import cartIcon from '../cartIcon.png'
  /**
   * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
   */

  export function Layout({ children }) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";
  
    const {
      data: { shop },
    } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
    });
    
  
    return (
      <>
        <Suspense>
          <Seo
            type="defaultSeo"
            data={{
              title: shop.name,
              description: shop.description,
            }}
          />
        </Suspense>
        <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
          <main role="main" id="mainContent" className="flex-grow">
            <Suspense>{children}</Suspense>
          </main>
          <footer>
          <Link to="/">
            <h1>
                CUKA ESTUDIO
            </h1>
          </Link>
               <div>
            <Link to="/cart">
                <img width="35" src={cartIcon}></img>
            </Link>
            </div>
          </footer>
        </div>
      </>
    );
  }
  
  const SHOP_QUERY = gql`
    query ShopInfo {
      shop {
        name
        description
      }
    }
  `;
  