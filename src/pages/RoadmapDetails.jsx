import React, { use, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RaodmapContext } from "../context/RaodmapContext";
import { toast} from "react-toastify";
import { fetchTopicResponse } from "../api/aiTopicResponse"

const RoadmapDetails = () => {
  const { id, dets } = useParams();
  const { setSaveRoadmap, saveRoadmap, preRoadmap, isDark } =
    useContext(RaodmapContext);
  const [getRoadmap, setGetRoadmap] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [savedBtn, setSavedBtn] = useState(false);
  const[isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    if (!preRoadmap.length && dets === "roadmap") return;
    if (!saveRoadmap.length && dets === "learning") return;

    if (dets === "roadmap") {
      const selected = preRoadmap.find(
        (elem) => elem[elem.length - 1].id == id
      );
      if (selected) {
        setGetRoadmap(selected);
      } else {
        navigate("/404");
      }
    } else if (dets === "learning") {
      const selected = saveRoadmap.find(
        (elem) => elem[elem.length - 1].id == id
      );
      if (selected) {
        setGetRoadmap(selected);
        setRoadmap(selected);
      } else {
        navigate("/404");
      }
    } else {
      navigate("/404");
    }
  }, [dets, id, preRoadmap, saveRoadmap]);

  const handleCheckboxChange = (skillIndex, topicIndex) => {
    const updatedRoadmap = [...roadmap];
    const topic = updatedRoadmap[skillIndex].topic[topicIndex];
    topic.isCompleted = !topic.isCompleted;

    const updated = updateProgress(updatedRoadmap);

    const updatedSaveRoadmap = saveRoadmap.map((rm) => {
      const lastItem = rm[rm.length - 1];
      const updatedLastItem = updated[updated.length - 1];

      if (lastItem?.id === updatedLastItem?.id) {
        return updated;
      }
      return rm;
    });

    setSaveRoadmap(updatedSaveRoadmap);
    setRoadmap(updated); // also update local state
  };

  const updateProgress = (data) => {
    let totalTopics = 0;
    let completedTopics = 0;

    for (let i = 1; i < data.length - 1; i++) {
      totalTopics += data[i]?.topic.length;
      completedTopics += data[i]?.topic.filter((t) => t.isCompleted).length;
    }

    const progressPercent =
      totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    const updatedData = [...data];
    const lastItem = data[data.length - 1];

    updatedData[updatedData.length - 1] = {
      ...lastItem,
      progress: progressPercent,
    };

    return updatedData;
  };

  const saveRoadmapHandler = () => {
    if (isRoadmapSaved()) {
      toast.error("Roadmap already exists!");
      return;
    }

    toast.success("Roadmap saved successfully!");
    setSaveRoadmap((prev) => [...prev, getRoadmap]);
  };

  useEffect(() => {
    setSavedBtn(isRoadmapSaved());
  }, [saveRoadmap, roadmap]);

  const isRoadmapSaved = () => {
    const alreadyExists = saveRoadmap.some(
      (e) => e[e.length - 1]?.id == getRoadmap[getRoadmap.length - 1]?.id
    );
    return alreadyExists;
  };

  const handleTopicDetails = async (skill, topic) => {
    try {
      setIsLoading(true)
      const res =  await fetchTopicResponse(skill, topic)
      navigate("/topic-details", {
        state: { data: res},
      });
      
    } catch (error) {
      console.error("Error fetching topic response:", error);
      toast.error("Failed to fetch topic details.");
      
    }
    finally{
      setIsLoading(false)
    }
    
  }

    
  if (isLoading) {
    return <div className='flex items-center justify-center h-screen bg-[#2d2d2d68]'>
            <div className="spin w-13 h-13 rounded-full border-r-3 border-l-3 border-t-3"></div>
    </div>;
  }
  
  return (
    <div className="py-20 px-4 md:flex md:items-center md:justify-center">
      <div className="md:p-5 md:w-fit">
        {getRoadmap.map(
          (el, idx) =>
            idx !== getRoadmap.length - 1 && (
              <div key={idx}>
                {idx === 0 ? (
                  <div>
                    <h2
                      className={`text-2xl mb-5 font-bold uppercase p-5 text-center rounded-md shadow-zinc-950 ${
                        isDark ? "bg-[#1d1d1f]" : "bg-zinc-300"
                      }`}
                    >
                      {el}
                    </h2>
                    {dets === "learning" && (
                      <div className="p-3 pb-5 mb-5 rounded-md shadow-sm border-1 border-zinc-500 flex flex-col justify-center items-end">
                        <h2 className="text-xl">
                          {getRoadmap[getRoadmap.length - 1].progress}%
                        </h2>
                        <div className="w-full h-1 relative bg-zinc-300">
                          <div
                            style={{
                              width: `${
                                getRoadmap[getRoadmap.length - 1].progress
                              }%`,
                            }}
                            className="absolute h-full top-0 left-0 bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <li className="text-xl py-2 font-semibold">{el.skill}</li>
                )}
                {el?.topic?.map((e, index) => (
                  <div key={index} className="flex gap-3 p-2 items-center">
                    {dets === "learning" ? (
                      <input
                        checked={e.isCompleted}
                        onChange={() => handleCheckboxChange(idx, index)}
                        className="appearance-none w-5 h-5 border border-gray-500 rounded-full bg-transparent checked:bg-blue-500  focus:outline-none"
                        type="checkbox"
                        name={e.name}
                      />
                    ) : (
                      <h4 className="text-sm font-semibold">{index + 1}.</h4>
                    )}
                    <label onClick={()=>{
                      if (dets === "learning") {
                        handleTopicDetails(el.skill, e.name);
                      }
                    }} className="text-sm tracking-tight active:bg-blue-200 p-2 w-full rounded-md" htmlFor={e.name}>
                      {e.name}
                    </label>
                  </div>
                ))}
                {idx > 0 && (
                  <p className="text-sm px-2 pb-3 border-b-1 border-zinc-500 uppercase text-end mt-[-10px]">
                    {el.duration}
                  </p>
                )}
              </div>
            )
        )}
        <div className="flex items-center justify-center mt-10">
          {dets === "roadmap" &&
            (savedBtn ? (
              <button
                className="py-2 px-8 rounded-md bg-[#3c6bb8] text-white"
                disabled
              >
                Saved
              </button>
            ) : (
              <button
                onClick={saveRoadmapHandler}
                className="py-2 px-8 rounded-md bg-[#3b82f6] text-white"
              >
                Save
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetails;
