import {
    ADMIN_DELETE_FAIL,
    ADMIN_DELETE_REQUEST,
    ADMIN_DELETE_SUCCESS,
    ADMIN_LIST_FAIL,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    CRS_FAIL,
    CRS_REQUEST,
    CRS_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    MATERIAL_FAIL,
    MATERIAL_REQUEST,
    MATERIAL_SUCCESS,
    MATERIAL_SYLLABUS_FAIL,
    MATERIAL_SYLLABUS_REQUEST,
    MATERIAL_SYLLABUS_SUCCESS,
    MATERIAL_UPLOAD_FAIL,
    MATERIAL_UPLOAD_REQUEST,
    MATERIAL_UPLOAD_SUCCESS,
    MEMBERS_FAIL,
    MEMBERS_REQUEST,
    MEMBERS_SUCCESS,
    MEMBER_ADD_FAIL,
    MEMBER_ADD_REQUEST,
    MEMBER_ADD_SUCCESS,
    PROBLEMS_FAIL,
    PROBLEMS_LIST_FAIL,
    PROBLEMS_LIST_REQUEST,
    PROBLEMS_LIST_SUCCESS,
    PROBLEMS_REQUEST,
    PROBLEMS_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SYLLABUS_UPLOAD_FAIL,
    SYLLABUS_UPLOAD_REQUEST,
    SYLLABUS_UPLOAD_SUCCESS,
    VIEW_FAIL,
    VIEW_REQUEST,
    VIEW_SUCCESS
} from "./Constants";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            return { loading: false, success: true, studentInfo: action.payload }
        case LOGIN_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const signupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { loading: true };
        case SIGNUP_SUCCESS:
            return { loading: false, success: true, studentInfo: action.payload };
        case SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const materialReducer = (state = { materialInfo: [] }, action) => {
    switch (action.type) {
        case MATERIAL_REQUEST:
            return { loading: true };
        case MATERIAL_SUCCESS:
            return { loading: false, success: true, materialInfo: action.payload };
        case MATERIAL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const materialSyllabusReducer = (state = { materialSyllabusInfo: [] }, action) => {
    switch (action.type) {
        case MATERIAL_SYLLABUS_REQUEST:
            return { loading: true };
        case MATERIAL_SYLLABUS_SUCCESS:
            return { loading: false, success: true, materialSyllabusInfo: action.payload };
        case MATERIAL_SYLLABUS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const crsReducer = (state = { crsList: [] }, action) => {
    switch (action.type) {
        case CRS_REQUEST:
            return { loading: true };
        case CRS_SUCCESS:
            return { loading: false, success: true, crsList: action.payload };
        case CRS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const membersReducer = (state = { membersList: [] }, action) => {
    switch (action.type) {
        case MEMBERS_REQUEST:
            return { loading: true };
        case MEMBERS_SUCCESS:
            return { loading: false, success: true, membersList: action.payload };
        case MEMBERS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const problemsReducer = (state = { problemInfo: {} }, action) => {
    switch (action.type) {
        case PROBLEMS_REQUEST:
            return { loading: true };
        case PROBLEMS_SUCCESS:
            return { loading: false, success: true, problemInfo: action.payload };
        case PROBLEMS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const materialUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case MATERIAL_UPLOAD_REQUEST:
            return { loading: true };
        case MATERIAL_UPLOAD_SUCCESS:
            return { loading: false, success: "Done " };
        case MATERIAL_UPLOAD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export const syllabusUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case SYLLABUS_UPLOAD_REQUEST:
            return { loading: true };
        case SYLLABUS_UPLOAD_SUCCESS:
            return { loading: false, success: action.payload };
        case SYLLABUS_UPLOAD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const viewReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_REQUEST:
            return { loading: true };
        case VIEW_SUCCESS:
            return { loading: false, viewInfo: action.payload };
        case VIEW_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const memberAddReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_ADD_REQUEST:
            return { loading: true };
        case MEMBER_ADD_SUCCESS:
            return { loading: false, success: true };
        case MEMBER_ADD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export const problemsListReducer = (state = { problems: [] }, action) => {
    switch (action.type) {
        case PROBLEMS_LIST_REQUEST:
            return { loading: true };
        case PROBLEMS_LIST_SUCCESS:
            return { loading: false, problems: action.payload };
        case PROBLEMS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const adminListReducer = (state = { membersList: [] }, action) => {
    switch (action.type) {
        case ADMIN_LIST_REQUEST:
            return { loading: true };
        case ADMIN_LIST_SUCCESS:
            return { loading: false, success: true, membersList: action.payload };
        case ADMIN_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const adminDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_DELETE_REQUEST:
            return { loading: true };
        case ADMIN_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ADMIN_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

