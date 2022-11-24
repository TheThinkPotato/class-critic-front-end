import React, { useEffect, useState } from "react";
import { addRating } from "../data/apiCalls";
import Rating from "../components/Rating";
import { useNavigate, useLocation } from "react-router-dom";
import { getStudent } from "../data/apiCalls";

const Rate = (props) => {
  const data = props.data;
  const [errorMessage, setErrorMessage] = useState("");

  async function submitData() {
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
      const result = await addRating(
        data.lookupName,
        communicationValue,
        attendanceValue,
        workmanshipValue,
        focusValue,
        organisationValue,
        nicenessValue,
        localStorage.getItem("email")
      );
      setErrorMessage(result.message);
      return result;
    } else setErrorMessage("Fill out all the categories.");
    return;
  }

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
                      console.log("-->>", props.data);
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
