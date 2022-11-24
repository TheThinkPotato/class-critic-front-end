import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import ScoreChart from "../components/ScoreChart";
import Star from "../components/Star";
import Rate from "../components/Rate";
import { useNavigate } from "react-router-dom";


export default function Student() {
  const [showRateWindow, setShowRateWindow] = useState(false);  
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(location.state.data);

  useEffect(() => {
    //render    
  }, [showRateWindow]);



  return (
    <div className="bg-indigo-900 h-screen">
      <div className="bg-indigo-900 text-white h-screen flex flex-col">
        <Header />
        <div className="text-xl border-4 border-solid border-gray-400 my-auto py-5 w-2/3 lg:w-3/4 w rounded-md bg-slate-50 text-black mx-auto max-w-5xl">
          <h1 className="font-bold text-center mb-10 text-2xl">
            Student Details
          </h1>
          <div className="flex flex-row">
            {data.gender === "Male" && (
              <img
                src="/man.png"
                className="w-1/4 ml-5 rounded-lg border-4 border-solid border-gray-400  bg-gradient-to-b from-white to-gray-200"
                alt="student profile"
              />
            )}
            {data.gender === "Female" && (
              <img
                src="/lady.png"
                className="w-1/4 ml-5 rounded-lg border-4 border-solid border-gray-400 bg-gradient-to-b from-white to-gray-200"
                alt="student profile"
              />
            )}
            {data.gender === "Other" && (
              <img
                src="/user.png"
                className="w-1/4 ml-5 rounded-lg border-4 border-solid border-gray-400 bg-gradient-to-b from-white to-gray-200"
                alt="student profile"
              />
            )}
            <div className="grow my-auto">
              <table className="mx-auto">
                <div>
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
                    <tr>
                      <td className="font-bold">Gender:</td>
                      <td className="pl-5">{data.gender}</td>
                    </tr>
                    {data.overallRatings && (
                      <tr>
                        <td className="font-bold pt-5">Overall Score:</td>
                        <td className="pl-5 pt-5">
                          {data.overallRatings.totalRating.toFixed(2)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </div>
                {data.overallRatings && (
                  <div className="mt-1">
                    <Star score={data.overallRatings.totalRating.toFixed(1)} />
                  </div>
                )}
              </table>
            </div>
            <div className="mx-10 mt-10">
              {data.overallRatings && (
                <ScoreChart
                  score={data.overallRatings.totalRating.toFixed(3)}
                />
              )}
              
              { localStorage.getItem("email") && (
              <button
                className="ml-6 mt-44 px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  if (showRateWindow) {
                    setShowRateWindow(false);                    
                  } else {
                    setShowRateWindow(true);
                  }
                }}
              >
                Rate
              </button>
              )}
              

            </div>
          </div>
          {showRateWindow && (
            
              <Rate setShowRateWindow={setShowRateWindow} data={data} setData={setData}/>
            
          )}
          {data.overallRatings && (
            <div className="flex flex-row mt-5">
              <div className="flex flex-col m-auto ">
                <div className="flex flex-row space-x-3">
                  <h2 className="font-bold mb-1">Communication:</h2>
                  <p>{data.overallRatings.communication.toFixed(2)}</p>
                </div>
                <Star score={data.overallRatings.communication.toFixed(1)} />
                <div className="flex flex-row space-x-3 mt-4">
                  <h2 className="font-bold mb-1">Attendance:</h2>
                  <p>{data.overallRatings.attendance.toFixed(2)}</p>
                </div>
                <Star score={data.overallRatings.attendance.toFixed(1)} />
                <div className="flex flex-row space-x-3 mt-4">
                  <h2 className="font-bold mb-1">Workmanship:</h2>
                  <p>{data.overallRatings.workmanship.toFixed(2)}</p>
                </div>
                <Star score={data.overallRatings.workmanship.toFixed(1)} />
              </div>
              <div className="flex flex-col m-auto">
                <div className="flex flex-row space-x-3">
                  <h2 className="font-bold mb-1">Focus:</h2>
                  <p>{data.overallRatings.focus.toFixed(2)}</p>
                </div>
                <Star score={data.overallRatings.focus.toFixed(1)} />
                <div className="flex flex-row space-x-3 mt-4">
                  <h2 className="font-bold mb-1">Organisation:</h2>
                  <p>{data.overallRatings.organization.toFixed(2)}</p>
                </div>

                <Star score={data.overallRatings.organization.toFixed(1)} />
                <div className="flex flex-row space-x-3 mt-4">
                  <h2 className="font-bold mb-1">Kindness:</h2>
                  <p>{data.overallRatings.niceness.toFixed(2)}</p>
                </div>

                <Star score={data.overallRatings.niceness.toFixed(1)} />
              </div>
            </div>
          )}
          <div className="flex flex-row w-80 mx-auto ">
            <button
              className="mt-5 mx-auto px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
