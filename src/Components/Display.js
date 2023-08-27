import React, { useState, useEffect } from "react";
import Card from "./Card";

const Display = ({ fetchedData }) => {
  const [displayContent, setDisplayContent] = useState(null);
  const [val,setVal]=useState(0);

  useEffect(() => {
    // const timeout = setTimeout(() => {
      const content = (
        <div className="display p-4">
          <div className="display-main flex justify-center flex-wrap ">
                <div className="desc flex flex-col sm:flex-row bg-[#71C5F461] w-[80vw] rounded p-2 sm:w-[70vw] mb-6">
                  {/* image container */}
                  <div className="maincard-image flex justify-center sm:rotate-[-10deg] sm:block ">
                    {fetchedData[val]&&<img src={fetchedData[val].volumeInfo.imageLinks.thumbnail} alt="img" className='rounded sm:translate-x-[-18px]' />}
                  </div>
                  {/* description container */}
                  <div className="desc-data w-[100%] p-2 flex flex-col gap-4 mr-3">

                    {fetchedData[val]&&<h1 className="text-[30px]  uppercase">{fetchedData[val].volumeInfo.title}</h1>}

                    <div className="author  flex justify-between w-[100%]">
                        {fetchedData[val]&&<p className="text-lime-200 hover:text-sky-400 underline">{fetchedData[val].volumeInfo.authors[0]}</p>}
                        {fetchedData[val]&&<p>Publish Date:- {fetchedData[val].volumeInfo.publishedDate}</p>}
                    </div>

                    <div className="description text-justify flex flex-wrap">
                        {fetchedData[val]&&<p>{fetchedData[val].volumeInfo.description}</p>}
                    </div>
                    <div className="exte-desc">
                       {fetchedData[val]&& <p>Avg Rating: {fetchedData[val].volumeInfo.averageRating}   |   Rating Count: {fetchedData[val].volumeInfo.ratingsCount}   |   Publisher: {fetchedData[val].volumeInfo.publisher}   |   Language: {fetchedData[val].volumeInfo.language}</p>}
                    </div>
                    <div className="buttons-main flex justify-end ml-1 gap-4">
                        <button className="px-4 py-1 rounded border">
                            {fetchedData[val]&&<a href={fetchedData[val].volumeInfo.previewLink} target="_blank" rel="noreferrer">Now Read</a>}
                        </button>
                        <button className="px-4 py-1 rounded border">
                            {fetchedData[val]&&<a href={fetchedData[val].volumeInfo.infoLink} target="_blank" rel="noreferrer">More Info</a>}
                        </button>
                    </div>
                </div>
            </div>
          </div>
          <h2 className="font-bold ml-6 text-[20px] sm:text-[24px] underline">More Books</h2>
          <div className="more-books grid grid-cols-1 gap-y-6 my-4  lg:grid-cols-6 sm:grid-cols-3 ">
          {fetchedData && fetchedData.map((item, index) => (
            <Card key={index} link={item.volumeInfo.imageLinks.thumbnail} setVal={setVal} indexProp={index} />
          ))}

          </div>
        </div>
      );

      setDisplayContent(content);
    // }, 0);

    // return () => clearTimeout(timeout); // Clear the timeout on unmount

  }, [fetchedData,val]);

  return displayContent;
};

export default Display;
