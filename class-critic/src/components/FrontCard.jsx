import React, { useEffect } from "react";

const FrontCard = (props) => {
  let data = null;
  console.log(props);
    // if props empty


    if (Object.keys(props).length === 0) {
    console.log("props is empty");
    data = { fName: "No", lName: "Name" };
  } else {
     data  = props;
  }

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
          <tr>
            <td className="font-bold">Name:</td>
            <td>
              {data.fName} {data.lName}
            </td>
          </tr>
          <tr>
            <td className="font-bold">Major:</td>
            <td>Computer Science</td>
          </tr>
        </table>
        <div className="m-auto">
          <p>score</p>
        </div>
      </div>
    </article>
  );
};

export default FrontCard;
