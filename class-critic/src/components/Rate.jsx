import React, { useEffect, useState } from "react";
import { addRating, updateRating } from "../data/apiCalls";
import Rating from "../components/Rating";
import { useNavigate, useLocation } from "react-router-dom";
import { getStudent } from "../data/apiCalls";

function setUserRatings(email, dataArray)
{  
  let ratings = [];  
  let index = null;
  if (dataArray !== undefined)
{
  for (let i = 0; i < dataArray.length; i++)
  {
    if (dataArray[i].owner === email)
    {
      ratings.push(dataArray[i]);           
      index = i;          
    }
  }
}
  if (ratings.length > 0)
  {            
    ratings[0].index = index;
    return ratings[0];
  }
  else
    return {communication: 0, attendance: 0, workmanship: 0, focus: 0, organization: 0, niceness: 0, index: 0, new: true};
}


const Rate = (props) => {    
  const data = props.data;
  const [errorMessage, setErrorMessage] = useState("");
  
  const previousRatings = setUserRatings(localStorage.getItem("email"), data.ratings);

  const [communicationValue, setCommunicationValue] = useState(previousRatings.communication);
  const [attendanceValue, setAttendanceValue] = useState(previousRatings.attendance);
  const [workmanshipValue, setWorkmanshipValue] = useState(previousRatings.workmanship);
  const [focusValue, setFocusValue] = useState(previousRatings.focus);
  const [organisationValue, setOrganisationValue] = useState(previousRatings.organization);
  const [nicenessValue, setNicenessValue] = useState(previousRatings.niceness);

  const navigate = useNavigate();
  const navigateStudent = () => {
    navigate(`/Student`, { state: { data: data } });
  };

  async function submitData() {
    let result = null;
    if (
      !(
        communicationValue === 0 ||
        attendanceValue === 0 ||
        workmanshipValue === 0 ||
        focusValue === 0 ||
        organisationValue === 0 ||
        nicenessValue === 0
      )
    ) {
      if(previousRatings.new){
      result = await addRating(
        data.lookupName,
        communicationValue,
        attendanceValue,
        workmanshipValue,
        focusValue,
        organisationValue,
        nicenessValue,
        localStorage.getItem("email")
      )}
      else{
        result = await updateRating(
          data.lookupName,
          communicationValue,
          attendanceValue,
          workmanshipValue,
          focusValue,
          organisationValue,
          nicenessValue,
          data.index,
          localStorage.getItem("email")
        )
        }
      setErrorMessage(result.message);
      return result;
    } else setErrorMessage("Fill out all the categories.");
    return;
  }

  
  



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
              <Rating
                title="Communication"
                name="Communication"
                value={communicationValue}
                setValue={setCommunicationValue}
              />
              <Rating
                title="Attendance"
                name="Attendance"
                value={attendanceValue}
                setValue={setAttendanceValue}
              />
              <Rating
                title="Workmanship"
                name="Wokmanship"
                value={workmanshipValue}
                setValue={setWorkmanshipValue}
              />
            </div>

            <div className="flex flex-col">
              <Rating
                title="Focus"
                name="Focus"
                value={focusValue}
                setValue={setFocusValue}
              />
              <Rating
                title="Organisation"
                name="Organisation"
                value={organisationValue}
                setValue={setOrganisationValue}
              />
              <Rating
                title="Kindness"
                name="Kindness"
                value={nicenessValue}
                setValue={setNicenessValue}
              />
            </div>
          </form>
          <div className="self-end">
            {errorMessage !== "" && (
              <div className="bg-red-600 text-white rounded-md mb-5 w-36 p-2 text-center">
                <h2 className="font-bold">Error:</h2>
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              className="px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                submitData().then((res) => {
                  if (res) {
                    if (res.status === 200) {
                      getStudent(data.lookupName).then((res) => {
                        props.setData(res.data);
                      });                      
                      props.setShowRateWindow(false);
                    }
                  }
                });
              }}
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
