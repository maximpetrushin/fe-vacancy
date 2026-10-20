import {fetchVacancy} from "./store/vacancySlice.ts";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./store/hooks.ts";
import AppLayout from "./layouts/AppLayout.tsx";


function App() {

    const filters = useAppSelector(state => state.vacancy.filters);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchVacancy(filters))
    }, [filters, dispatch]);


  return (
      <AppLayout />
  )
}

export default App
