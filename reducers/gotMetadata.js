import { metadataActions } from '../actions';

const initialState = {
  loading: true,
  error: false,
  links: [],
  donations: {},
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case metadataActions.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case metadataActions.OK:
      return {
        state,
        ...action.payload,
        loading: false,
        donations: action.payload.cheese,
      };
    case metadataActions.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const metadata = {
  getMetadata: state => state.app.gotMetadata,
  getUserId: state => state.app.gotMetadata.user.account_id,
};
