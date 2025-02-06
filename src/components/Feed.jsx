import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../utils/feedSlice";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const getfeed = async () => {
    const res = await axios.get(`${BASE_URL}/user/feed`, { withCredentials: true });
    console.log(res.data);
    dispatch(setFeed(res.data));
  };

  useEffect(() => {
    getfeed();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {feed && <Card feed={feed[0]} />}
      </div>
    </>
  );
};

export default Feed;
