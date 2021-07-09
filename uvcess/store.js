import { compose, combineReducers, applyMiddleware, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage"
import thunk from "redux-thunk";
import { adminDeleteReducer, adminListReducer, crsReducer, loginReducer, materialReducer, materialSyllabusReducer, materialUploadReducer, memberAddReducer, membersReducer, problemsListReducer, problemsReducer, signupReducer, syllabusUploadReducer, viewReducer } from "./Frontend/Reducers"


async function getStorageData () {
    try {
        const value = await AsyncStorage.getItem('studentInfo');
        console.log(value);
        if (value !== null) {
            return await JSON.parse(value);
        }
    } catch (error) { console.log(error);}
};
//let studentInfo = localStorage.getItem("studentInfo") ? JSON.parse(localStorage.getItem("studentInfo")) : null


console.log(getStorageData());

const initialState = {
    studentLogin: { studentInfo:  getStorageData() }
};


const reducer = combineReducers({
    studentLogin: loginReducer,
    studentRegister: signupReducer,
    material: materialReducer,
    syllabusMaterial: materialSyllabusReducer,
    crs: crsReducer,
    members: membersReducer,
    problems: problemsReducer,
    materialUpload: materialUploadReducer,
    syllabusUpload: syllabusUploadReducer,
    view: viewReducer,
    memberAdd: memberAddReducer,
    problemsList: problemsListReducer,
    adminList: adminListReducer,
    adminDelete: adminDeleteReducer,
})


const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, ComposeEnhancers(applyMiddleware(thunk)))

export default store