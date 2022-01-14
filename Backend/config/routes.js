const ErrorsEngine = require('../engine/errors');
const Comuni = require('../engine/comuni');

module.exports = (app) => {

    const ComuniEntry = '/comuni';

    /********** DISPOSITIVI REST APIs **********/
    app.get(ComuniEntry, Comuni.getEntry);
    app.post(ComuniEntry, Comuni.createEntry);
    app.get(`${ComuniEntry}/:id`, Comuni.getEntryById);
    app.put(`${ComuniEntry}/:id`, Comuni.editOrders);
    app.delete(`${ComuniEntry}/:id`, Comuni.deleteEntry);

    /********** ERROR HANDLER **********/
    app.use(ErrorsEngine.page404);
    app.use(ErrorsEngine.pageError);
};