import React from 'react';


//Components
import BlogReview from '../units/blogReview';
import TopBlogReview from '../units/topBlogReview';



function homeBlog() {
  return (
      <div className="w-full">
            <h1 className="w-110 mt-48 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                A lot is happening and we're blogging about it.
            </h1>

            <div className="flex mt-10 h-120">
                <div className="flex-3">
                  <TopBlogReview/>
                </div>
                <div className="ml-18 flex-7">
                  <div className="flex-wrap flex">
                    <BlogReview/>
                    <BlogReview/>
                    <BlogReview/>
                    <BlogReview/>
                  </div>
                </div>
            </div>
      </div>
  );
}

export default homeBlog;
