import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordListModel = {
    data: [] as recordItem[],
    create(record: recordItem) {
        const record2: recordItem = clone(record);
        record2.createAt = new Date();
        this.data.push(record2);
        this.save();
    },
    fetch() {
        this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as recordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName,
            JSON.stringify(this.data));
    }
};

export default recordListModel;

