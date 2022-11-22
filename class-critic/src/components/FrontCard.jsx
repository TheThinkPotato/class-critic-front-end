import React, { useEffect } from "react";

const FrontCard = (props) => {
  const data = props.data;
  console.log("FrontCard====>", data);
  
  const totalRating = data.overallRatings ? data.overallRatings.totalRating : 0;



  useEffect(() => {
    //render
  }, []);

  useEffect(() => {
    //rerender
  }, [data]);

  return (
    <article>
      <div className="flex border-4 border-solid border-gray-400 m-5 p-5 max-w-xlg rounded-md bg-slate-50 text-black max-w-5xl mx-auto">
        <img src="lady.png" className="w-1/12"></img>
        <table className="ml-10">
          <tbody>
            <tr>
              <td className="font-bold">Name:</td>
              <td className="pl-5">
                {data.fName} {data.lName}
              </td>
            </tr>
            <tr>
              <td className="font-bold">College:</td>
              <td className="pl-5">{data.uni}</td>
            </tr>
            <tr>
              <td className="font-bold">Major:</td>
              <td className="pl-5">{data.major}</td>
            </tr>
          </tbody>
        </table>
        <div className="m-auto">
          <div className="flex flex-col">
            <h2 className="font-bold">Score:</h2>
            <div className="pl-5">{totalRating.toFixed(3)}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FrontCard;
