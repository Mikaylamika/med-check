import { createSlice } from '@reduxjs/toolkit';

/** Quesiotns Reducers **/
const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    quiz: {},
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExam: (state, action) => {
      const { quiz, questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers: answers,
        quiz: quiz,
      };
    },
    moveNext: (state) => ({
      ...state,
      answers: state.answers,
      trace: state.trace + 1,
    }),
    movePrev: (state) => ({
      ...state,
      trace: state.trace - 1,
    }),
    resetQuest: (state) => ({
      ...state,
      trace: 0,
    }),
  },
});

/** Resul Reducers **/
const resultReducers = createSlice({
  name: 'results',
  initialState: { result: [undefined] },
  reducers: {
    pushResult: (state, action) => {
      const { trace, answer } = action.payload;
      state.result[trace] = answer;
    },
    resetResult: () => ({ result: [undefined] }),
    updateResult: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
  },
});

export const { pushResult, resetResult, updateResult } = resultReducers.actions;
export const { startExam, moveNext, movePrev, resetQuest } =
  questionReducer.actions;
export const ResultReducer = resultReducers.reducer;
export const QuestionReducer = questionReducer.reducer;
