import * as Actions from "./reducers";

/** Fetch Questions **/
export const fetchQuestion = (id) => async (dispatch) => {
  try {
    const req = await fetch(`/api/questions/${id}`);
    const { quiz, questions, answers } = await req.json();
    dispatch(
      Actions.startExam({ questions: questions, answers: answers, quiz: quiz })
    );
  } catch (error) {
    console.log({ error });
  }
};

/** MoveNext() **/
export const moveNext = () => async (dispatch) => {
  try {
    dispatch(Actions.moveNext());
  } catch (error) {
    console.log(error);
  }
};

/** MovePrev() **/
export const movePrev = () => async (dispatch) => {
  try {
    dispatch(Actions.movePrev());
  } catch (error) {
    console.log(error);
  }
};

/** Push Answers **/
export const pushAnswer = (result) => async (dispatch) => {
  try {
    dispatch(Actions.pushResult(result));
  } catch (error) {
    console.log(error);
  }
};

/** UpdateResult **/
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Actions.updateResult(index));
  } catch (error) {
    console.log(error);
  }
};
