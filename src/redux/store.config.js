import { createStore, combineReducers } from "redux";
import { quanLySinhVienReducer } from "./ReactForm/FormQLSV.reducer.js";


const rootReducer = combineReducers({
  quanLySinhVienReducer,
});

// redux store. tập trung tất cả state của ứng dụng.

export const store = createStore(
  rootReducer,
  // extension cho redux.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);