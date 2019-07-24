
//const apiKey = '98dc9cb7';
// const baseAddress = "https://infinite-springs-68482.herokuapp.com/carts";
const baseAddress = "https://ny-lobby.herokuapp.com/announcement";
// const baseAddress = "http://localhost:8081/announcements";

export async function getAnnouncements() {
    let announcements = await fetch(`${baseAddress}`);
    announcements = await announcements.json();
    return announcements.map(announcement => ({
        id: announcement._id,
        title: announcement.title,
        content: announcement.content,
        info: announcement.info
    }))
}


export async function deleteAnnouncement(_id) {
    const rawResponse = await fetch(`${baseAddress}/${_id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return rawResponse;
}

export async function getAnnouncementById(id) {
    let announcementData = await fetch(`${baseAddress}/${id}`);
    announcementData = await announcementData.json();
    return ({
        id: announcementData._id,
        title: announcementData.title,
        content: announcementData.content,
        info: announcementData.info
    })
}

export async function updateAnnouncement(announcement, _id) {
    const rawResponse = await fetch(`${baseAddress}/${_id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(announcement)
    });

    const updatedData =  await rawResponse.json();
    return updatedData;
}

export async function saveNewAnnouncement(announcement) {
    const rawResponse = await fetch(`${baseAddress}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(announcement)
    });

    const newAnnouncement = await rawResponse.json();
    return newAnnouncement;
}

