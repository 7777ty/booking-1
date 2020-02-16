const localStorageKeyName = 'recordList';

const recordListModel = {
    clone(data: recordItem | recordItem[]) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as recordItem[];
    },
    save(data: recordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};

export default recordListModel;

