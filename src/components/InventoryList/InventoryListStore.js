export default {
    getDb : function () {
        let request = window.indexedDB.open('InventoryStore', 1);
        request.addEventListener('success', () => {
            console.log('db open');
        });
        request.addEventListener('upgradeneeded', () => {
            console.warn('DB upgrade needed');
        })
        request.onerror = () => {
            console.log('db open failed');
        };
        return request;
    },
    getItems : (page) => {

    },
    addItem : (item) => {

    }
}