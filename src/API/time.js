//Get Full Year
export const YYYY = () => {
    return new Date().getFullYear();
} 

//published Time for bots
export const metaPublishedTime = () => {
    const currentDate = new Date();
    const offset = 5.5 * 60 * 60 * 1000; // Offset for IST in milliseconds
    currentDate.setTime(currentDate.getTime() + offset - 5000); // Adjust for 5 seconds backward

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
    return formattedDate;
}

//Updated Time for bots
export const metaUpdatedTime = () => {

    const currentDate = new Date();
    // Calculate the offset for IST (+5:30) in milliseconds
    const offset = 5.5 * 60 * 60 * 1000;

    // Adjust the date object by the offset
    currentDate.setTime(currentDate.getTime() + offset);

    // Go back one hour
    currentDate.setTime(currentDate.getTime() - 3600000);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
    return formattedDate;
}

// Updated Time for Readers
export const postUpdatedTime = () => {
    const now = new Date();
    now.setTime(now.getTime() + 5.5 * 60 * 60 * 1000 - 3600000);

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(now);
    return formattedDate;
}

//get today date in "2024-12-01" format
export const TodayYYYYMMDD = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Pad month with leading zero if needed
    const day = today.getDate().toString().padStart(2, '0'); // Pad day with leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

//30 Days back date in "2024-12-01" format
export const ThirtyDayAgoYYYYMMDD = () => {
    const today = new Date();
    const sixtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    const year = sixtyDaysAgo.getFullYear();
    const month = (sixtyDaysAgo.getMonth() + 1).toString().padStart(2, '0');
    const day = sixtyDaysAgo.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate); // Output: 2024-10-18
    return formattedDate;
}