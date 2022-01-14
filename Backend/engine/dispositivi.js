const tabellaComuniEntry = require('../models/index').tabellaComuniEntry;

const getEntry = (req, res) => {
    tabellaComuniEntry.findAll({})
        .then(entry => {
            return res.status(200).send(entry)
        })
        .catch(err => {
            return res.status(500).send(err)
        });
};

const getEntryById = (req, res) => {
    const entryId = req.params.id;

    tabellaComuniEntry.findOne({
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
        id_surface,
        sn_surface,
        sn_tastiera,
        sn_pen,
        sn_ssd,
        data_consegna,
        scadenza_office,
        nome_ass,
        cognome_ass,
        matricola_ass,
        ruolo_ass,
        email_ass,
        telefono,
        luogo,
        note,
        disponibile,
        edizione
    } = req.body;

    tabellaComuniEntry.findOne({
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

            tabellaComuniEntry.update({
                    id: id,
                    id_surface: id_surface,
                    sn_surface: sn_surface,
                    sn_tastiera: sn_tastiera,
                    sn_pen: sn_pen,
                    sn_ssd: sn_ssd,
                    data_consegna: data_consegna,
                    scadenza_office: scadenza_office,
                    nome_ass: nome_ass,
                    cognome_ass: cognome_ass,
                    matricola_ass: matricola_ass,
                    ruolo_ass: ruolo_ass,
                    email_ass: email_ass,
                    telefono: telefono,
                    luogo: luogo,
                    note: note,
                    disponibile: disponibile,
                    edizione: edizione
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
        sn_surface,
        sn_tastiera,
        sn_pen,
        sn_ssd,
        data_consegna,
        scadenza_office,
        nome_ass,
        cognome_ass,
        matricola_ass,
        ruolo_ass,
        email_ass,
        telefono,
        luogo,
        note,
        disponibile,
        edizione
    } = req.body;


    tabellaComuniEntry.create({
            id_surface: id_surface,
            sn_surface: sn_surface,
            sn_tastiera: sn_tastiera,
            sn_pen: sn_pen,
            sn_ssd: sn_ssd,
            data_consegna: data_consegna,
            scadenza_office: scadenza_office,
            nome_ass: nome_ass,
            cognome_ass: cognome_ass,
            matricola_ass: matricola_ass,
            ruolo_ass: ruolo_ass,
            email_ass: email_ass,
            telefono: telefono,
            luogo: luogo,
            note: note,
            disponibile: disponibile,
            edizione: edizione
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

    tabellaComuniEntry.destroy({
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