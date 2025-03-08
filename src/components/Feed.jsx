import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../utils/feedSlice";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  // console.log("Current Feed:", feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/feed`, { withCredentials: true });
      console.log("API Response:", res.data);
      dispatch(setFeed(res.data));
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || feed.length === 0) {
    return <div>Loading feed... or no users available</div>;
  }

  return (
    <div className="flex justify-center">
      <Card user={feed[0]} />
    </div>
  );
};

export default Feed;