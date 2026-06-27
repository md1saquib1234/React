import { useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus =  useSelector(store => store.fetchStatus);
  console.log(fetchStatus);
  return <>
  <div>
    Fetch Done: {fetchStatus.fetchDone}
    Currently Fetching: {fetchStatus.currentlyFetching}
  </div>
  </>
}

export default  FetchItems;