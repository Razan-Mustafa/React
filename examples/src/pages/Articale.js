import React from "react";
import '../App.css';


const Article = () => {
  return (
    <article>
      <h2>Title of the Article</h2>
      <p>
        Published on <time dateTime="2023-09-23">September 23, 2023</time> by
        Author Name
      </p>
      <img
        src="img1.jpg"
        alt="Article Illustration"
        className="article-image"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,
        quam eget convallis tincidunt, arcu risus luctus ex, ut cursus ligula
        ex eget arcu. Sed interdum odio ac vestibulum. Nulla facilisi. Cras
        eget bibendum risus. In venenatis euismod leo, nec cursus justo
        interdum nec.
      </p>
      <p>
        Nulla facilisi. Duis a nunc eget odio eleifend malesuada. Sed
        dignissim, erat a finibus fringilla, purus purus porttitor libero, non
        bibendum odio dui vel eros.
      </p>
      <p>
        Fusce eleifend euismod quam, ac interdum odio facilisis nec. In
        hendrerit, justo ut dictum consequat, ante elit tristique ex, non
        sollicitudin nunc purus eu dui.
      </p>
    </article>
  );
};
export default Article;