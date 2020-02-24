
import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const recordStore={
    recordList: [] as recordItem[],
    createRecord(record: recordItem) {
        const record2: recordItem = clone(record);
        record2.createAt = new Date();
        this.recordList.push(record2);
        this.saveRecord();
    },
    fetchRecord() {
        this.recordList =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as recordItem[];
        return this.recordList;
    },
    saveRecord() {
        window.localStorage.setItem(localStorageKeyName,
            JSON.stringify(this.recordList));
    }
};

recordStore.fetchRecord();

export default recordStore;