import React, { useEffect, useState } from "react";
import ScoreChart from "../components/ScoreChart";
import Star from "../components/Star";
import Rating from "../components/Rating";
import { useNavigate, useLocation } from "react-router-dom";

const Rate = (props) => {
  const data = props.data;
  

  const navigate = useNavigate();
  const navigateStudent = () => {
    navigate(`/Student`, { state: { data: data } });
  };

  const [communicationValue, setCommunicationValue] = useState(3);
  const [attendanceValue, setAttendanceValue] = useState(0);
  const [workmanshipValue, setWorkmanshipValue] = useState(0);
  const [focusValue, setFocusValue] = useState(0);
  const [organisationValue, setOrganisationValue] = useState(0);
  const [nicenessValue, setNicenessValue] = useState(0);

  
  useEffect(() => {
    //render
  }, []);

  useEffect(() => {
    //rerender
  }, [data]);

  return (
    <article className="relative z-10 mx-5">
      <div className="absolute top-0 mt-4 w-full">
        <div className="flex border-4 border-solid border-gray-400 my-2 px-5 py-6 rounded-md bg-slate-50 text-black max-w-5xl shadow-lg">
          <form className="flex flex-row w-full justify-around ">
            <div className="flex flex-col">
              <Rating title="Communication" name="Communication" value={communicationValue} setValue={setCommunicationValue}/>
              <Rating title="Attendance" name="Attendance" value={attendanceValue} setValue={setAttendanceValue}/>
              <Rating title="Workmanship" name="Wokmanship" value={workmanshipValue} setValue={setWorkmanshipValue}/>
            </div>

            <div className="flex flex-col">
              <Rating title="Focus" name="Focus" value={focusValue} setValue={setFocusValue}/>
              <Rating title="Organisation" name="Organisation" value={organisationValue} setValue={setOrganisationValue}/>
              <Rating title="Kindness" name="Kindness" value={nicenessValue} setValue={setNicenessValue}/>
            </div>
          </form>
          <div className="self-end">
            <button
              className="px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {}}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Rate;
