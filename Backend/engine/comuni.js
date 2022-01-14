const ComuniEntry = require('../models/index').ComuniEntry;

const getEntry = (req, res) => {
    ComuniEntry.findAll({})
        .then(entry => {
            return res.status(200).send(entry)
        })
        .catch(err => {
            return res.status(500).send(err)
        });
};

const getEntryById = (req, res) => {
    const entryId = req.params.id;

    ComuniEntry.findOne({
            where: {
                id: entryId
            }
        })
        .then(entry => {
            if (!entry) {
                return res.status(404).send({
                    error: true,
                    message: 'The requested data does not exist.',
                    entryId
                })
            }

            return res.status(200).send(entry);
        })
        .catch(err => {
            return res.status(500).send(err);
        })
};

const editOrders = (req, res) => {
    const entryId = req.params.id;
    const {
        id,
        id_surface
    } = req.body;

    ComuniEntry.findOne({
            where: {
                id: entryId
            }
        })
        .then(entry => {
            if (!entry) {
                return res.status(404).send({
                    error: true,
                    message: 'Cannot update a entry that does not exist.',
                    entryId
                })
            }

            ComuniEntry.update({
                    id: id,
                    id_surface: id_surface
                }, {
                    where: {
                        id: entryId
                    }
                })
                .then(updated => {
                    if (updated.pop() === 1) {
                        return res.status(201).send({
                            updated: true,
                            entryId
                        });
                    } else {
                        return res.status(400).send({
                            updated: false,
                            entryId
                        })
                    }
                })
                .catch(error => {
                    return res.status(500).send(error);
                });
        })
        .catch(error => {
            return res.status(500).send(error);
        })
};

const createEntry = (req, res) => {
    const {
        id_surface,
        area_intervento,
        comune,
        abitanti,
        n_sedi,
        fascia,
        codice_tratta_bul,
        stato_doc,
        data_presentazione,
        rif,
        note,
        disp_pdf,
        disp_pdf_string
    } = req.body;


    ComuniEntry.create({
            id_surface: id_surface,
            area_intervento: area_intervento,
            comune: comune,
            abitanti: abitanti,
            n_sedi: n_sedi,
            fascia: fascia,
            codice_tratta_bul: codice_tratta_bul,
            stato_doc: stato_doc,
            data_presentazione: data_presentazione,
            rif: rif,
            note: note,
            disp_pdf: disp_pdf,
            disp_pdf_string: disp_pdf_string
        })
        .then(entry => {
            return res.status(201).send(entry);
        })
        .catch(error => {
            return res.status(500).send(error);
        });
};
const deleteEntry = (req, res) => {
    const entryId = req.params.id;

    ComuniEntry.destroy({
            where: {
                id: entryId
            }
        })
        .then(res => {
            return res.status(204).send({});
        })
        .catch(error => {
            return res.status(500).send(error);
        })
};

module.exports = {
    createEntry,
    getEntry,
    getEntryById,
    deleteEntry,
    editOrders,
};