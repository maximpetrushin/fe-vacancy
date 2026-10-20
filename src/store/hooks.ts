import {useDispatch, useSelector} from "react-redux";
import type {RootState, RootDispatch} from "./store.ts";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<RootDispatch>();