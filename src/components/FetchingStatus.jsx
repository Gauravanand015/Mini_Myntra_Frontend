import { useDispatch, useSelector } from "react-redux";
import {
  markFetchingDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../store/slice/fetching-status-slice";
import { showInitialItems } from "../store/slice/home-slice";
import { useEffect } from "react";

const FetchingStatus = () => {
  const fetching = useSelector((state) => state.fetchingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching.fetchingDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(markFetchingStarted());

    fetch("https://mini-myntra.onrender.com/items", { signal })
      .then((response) => response.json())
      .then(({ items }) => {
        dispatch(markFetchingDone());
        dispatch(markFetchingFinished());
        dispatch(showInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetching]);

  return <></>;
};

export default FetchingStatus;
