import { takeLatest, /* put */ } from 'redux-saga/effects';
import axios from 'axios';

function* postFeedback(action) {
    try {
    console.log(`HIT editEntries`);
    console.log(`PAYLOAD: `, action.payload);
    
    // const id = action.payload.entryId
    
    // yield axios.put(`/entry/edit/${id}`, action.payload);
    // yield window.location.reload();
    // put({ type: 'GET_ENTRIES' , payload: {id: action.payload.id}})
    }
    catch (error) {
      console.log(`Couldn't edit user's entries`);
    }
}

function* feedbackSaga() {
    yield takeLatest('POST_FEEDBACK', postFeedback);
  }

export default feedbackSaga;