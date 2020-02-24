import recordListModel from '@/models/recordListModel';

export default{
//record store
    recordList: recordListModel.fetch(),
    createRecord: (record: recordItem) => recordListModel.create(record),
}