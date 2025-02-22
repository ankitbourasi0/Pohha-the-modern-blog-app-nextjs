import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../Components/index";
import { getPosts } from "../services";
import {FeaturedPosts} from "../sections"
// //dummy posts for fetching data with graphql
// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
// ];




const Home = ({ posts }) => {
  return (
    <div className="container mx-auto lg:px-10 px-6 mb-8">
      <Head>
        <title>Pohaa</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4782798272247151"
     crossOrigin="anonymous"></script>
     
     
      </Head>
      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post,index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
