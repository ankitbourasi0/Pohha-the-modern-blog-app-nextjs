import React from "react";
import moment from "moment";
const PostDetail = ({ post }) => {
  const mediaQueryStyle = {
    pre: {
      overflow: "auto", // Default value
      maxWidth: "100%", // Default value
    },
  };

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.code) {
        modifiedText = (
          <pre
            style={{
              overflow:
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? "unset"
                  : "auto",
              maxWidth:
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? "unset"
                  : "100%",
              padding: "10px",
              border: " 1px solid #ddd",
              borderRadius: "4px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              fontFamily: "Consolas, Monaco, monospace",
              fontSize: "14px",
              ...mediaQueryStyle.pre,
            }}
            key={index}
          >
            <code
              style={{
                display: "block",
              }}
              className="font-medium text-xl "
            >
              {text}
            </code>
          </pre>
        );
      }
    }

    switch (type) {
      case "heading-one":
        return (
          <h3 key={index} className="text-4xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-two":
        return (
          <h3 key={index} className="text-3xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );

      case "paragraph":
        return (
          <p key={index} className="mb-8 text-lg ">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case "heading-four":
        return (
          <h4 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-five":
        return (
          <h3 key={index} className="text-lg font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-six":
        return (
          <h3 key={index} className="text-base font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mb-8"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white dark:bg-transparent lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow mb-6 ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className=" px-0  ">
        <div className="lg:flex items-center mb-8 w-full">
          <div className="flex items-center  mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
            <img
              alt={post.author.name}
              className="align-middle w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] rounded-full "
              src={post.author.photo.url}
            />
            <p className="inline  align middle dark:bg-transparent ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-md flex item-center  dark:bg-transparent">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-fuchsia-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-4xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
