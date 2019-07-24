import { ADD_ANNOUNCEMENT, EDIT_ANNOUNCEMENT, REMOVE_ANNOUNCEMENT,SELECT_ANNOUNCEMENT, FILTER_ANNOUNCEMENTS, LOAD_ANNOUNCEMENTS,LOAD_ANNOUNCEMENT_DATA } from '../actions/actionTypes';

let initialState = [];

function announcementApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_ANNOUNCEMENTS :
    return {
      announcements: action.announcements
    }

    case LOAD_ANNOUNCEMENT_DATA: 
      return {
        announcements: state.announcements.map(announcement => (announcement.id == action.announcement.id) ? action.announcement : announcement)
      }

    case SELECT_ANNOUNCEMENT:
      return Object.assign({}, state, {
        selectedId: action.id
      })

    case FILTER_ANNOUNCEMENTS:
      return Object.assign({}, state, {
        searchText: action.searchText
      })

    case ADD_ANNOUNCEMENT:
      return Object.assign({}, state, {
        announcements: [
          ...state.announcements,
          {
            // id: new Date().getUTCMilliseconds(), // getting a unique id based on a timestamp
            title: action.title,
            content: action.content,
            info: action.info
          }
        ].sort(mov => mov.id)
      })

    case EDIT_ANNOUNCEMENT:
      return Object.assign({}, state, {
        announcements: [
          Object.assign({}, {
            id:action.id,
            title:action.title,
            content: action.content, 
            info: action.info
          }),
          ...state.announcements.filter(announcement => announcement.id !== action.id)
        ]
      })
    case REMOVE_ANNOUNCEMENT:
      return Object.assign({}, state, {
        announcements: [
          ...state.announcements.filter(announcement => announcement.id !== action.id)
        ]
      })
    default:
      return state
  }
}

export default announcementApp;