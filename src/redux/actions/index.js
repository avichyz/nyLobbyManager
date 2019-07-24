
import { getAnnouncements, getAnnouncementById } from '../../managers/announcementServiceManager';
import { ADD_ANNOUNCEMENT, EDIT_ANNOUNCEMENT, SELECT_ANNOUNCEMENT, FILTER_ANNOUNCEMENTS, LOAD_ANNOUNCEMENTS, LOAD_ANNOUNCEMENT_DATA, REMOVE_ANNOUNCEMENT } from './actionTypes';


export function loadAnnouncementsWithData() {
  return function (dispatch) {
    return getAnnouncements()
    .then(announcements => 
      {
        dispatch(loadAnnouncements(announcements))
        return announcements;
      })
  }
}

export function loadAnnouncements(announcements) {
  return { type: LOAD_ANNOUNCEMENTS, announcements }
}

export function loadAnnouncementData(announcement) {
  return { type: LOAD_ANNOUNCEMENT_DATA, announcement }
}

export function addAnnouncement(title, content, info, isHidden) {
  return { type: ADD_ANNOUNCEMENT, title: title, content: content, info: info, isHidden: isHidden }
}

export function editAnnouncement(id ,title, content, info, isHidden) {
  return { type: EDIT_ANNOUNCEMENT, id, title, content, info, isHidden }
}

export function deleteAnnouncement(id) {
  return { type: REMOVE_ANNOUNCEMENT, id }
}

export function selectAnnouncement(id) {
  return { type: SELECT_ANNOUNCEMENT, id }
}

export function filterAnnouncements(searchText) {
  return { type: FILTER_ANNOUNCEMENTS, searchText }
}

