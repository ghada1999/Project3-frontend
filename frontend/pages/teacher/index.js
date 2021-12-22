import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const teacher = ({ posts }) => {
  return (
    <div className="container pt-4">
      <div className="row">
        <h1>teacher</h1>
        <hr />
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col-12 col-md-4" key={post.id}>
            <div className="card mb-4">
              <img
                src={`https://source.unsplash.com/720x400/?${post.id}`}
                className="card-img-top"
                alt="dd"
              />
              <div className="card-body">
                <h5 className="card-title"> {post.title} </h5>
                <Link href={`/ghada/${post.id}`}>
                  <a className="btn btn-primary">Contact </a>
                </Link>
              </div>
            </div>
          </div> // it will  show as pbject  , or as compailer mybe it will come agen 
        ))}
      </div>
    </div>
  );
};

export default teacher;