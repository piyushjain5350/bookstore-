import React, { useState, useEffect } from "react";
import Card from "./Card";

const Display = ({ fetchedData }) => {
  const [displayContent, setDisplayContent] = useState(null);
  const [index,setIndex]=useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
    //   let index=0;
      const content = (
        <div className="display p-4">
          <div className="display-main flex justify-center flex-wrap j=">
                <div className="desc flex bg-[#71C5F461] w-[70vw] rounded">
                    <div className="maincard-image rotate-[-10deg]  ">
                    <img src={fetchedData[index].volumeInfo.imageLinks.thumbnail} alt="img" className='rounded translate-x-[-18px]' />
                </div>
                <div className="desc-data w-[100%] p-2">
                    <h1 className="text-[30px]  uppercase">{fetchedData[index].volumeInfo.title}</h1>
                    <div className="author  flex justify-between w-[100%]">
                        <p>{fetchedData[index].volumeInfo.authors[0]}</p>
                        <p>Publish Date:- {fetchedData[index].volumeInfo.publishedDate}</p>
                    </div>
                    <div className="desc flex flex-wrap">
                        <p>{fetchedData[index].volumeInfo.description}</p>
                    </div>
                    <div className="exte-desc">
                        <p>Avg Rating: {fetchedData[index].volumeInfo.averageRating}   |   Rating Count: {fetchedData[index].volumeInfo.ratingsCount}   |   Publisher: {fetchedData[index].volumeInfo.publisher}   |   Language: {fetchedData[index].volumeInfo.language}</p>
                    </div>
                    <div className="buttons-main flex justify-end ml-1 gap-4">
                        <button className="px-4 py-1 rounded border">
                            <a href={fetchedData[index].volumeInfo.previewLink} target="_blank" rel="noreferrer">Now Read</a>
                        </button>
                        <button className="px-4 py-1 rounded border">
                            <a href={fetchedData[index].volumeInfo.infoLink} target="_blank" rel="noreferrer">More Info</a>
                        </button>
                    </div>
                </div>
            </div>
          </div>
          <h2 className="font-bold">More Books</h2>
          <div className="more-books grid grid-cols-6 gap-y-6 my-4">
            {fetchedData &&
              fetchedData.map((item, index) => (
                <Card key={index} link={item.volumeInfo.imageLinks.thumbnail}  setIndex={setIndex}/>
              ))}
          </div>
        </div>
      );

      setDisplayContent(content);
    }, 200);

    return () => clearTimeout(timeout); // Clear the timeout on unmount

  }, [fetchedData,index]);

  return displayContent;
};

export default Display;
