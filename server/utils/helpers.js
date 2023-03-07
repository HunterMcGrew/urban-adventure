export function format_date(date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toUTCString();
};
