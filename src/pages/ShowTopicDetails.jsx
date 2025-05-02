import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css'; 


const ShowTopicDetails = () => {
   const {state} = useLocation();
    const { data } = state || {};

  return (
    <div className="max-w-full py-20 px-4 ">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} children={data} />
    </div>
  );
};

export default ShowTopicDetails;
