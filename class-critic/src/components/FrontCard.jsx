import React, { useEffect } from "react";
import ScoreChart from "./ScoreChart";

let guid = 0;

const FrontCard = (props) => {
  const data = props.data;

  const totalRating = data.overallRatings ? data.overallRatings.totalRating : 0;

  guid++;

  useEffect(() => {
    //render
  }, []);

  useEffect(() => {
    //rerender
  }, [data]);

  return (
    <article>
      <div className="flex border-4 border-solid border-gray-400 my-2 p-5 max-w-xlg rounded-md bg-slate-50 text-black max-w-5xl mx-auto">
        <img src="lady.png" className="w-16"></img>
        <div className="grow flex-col">
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
        </div>

        <ScoreChart score={totalRating.toFixed(3)} guid={guid} />        
      </div>
    </article>
  );
};

export default FrontCard;
