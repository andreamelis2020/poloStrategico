'use strict';

module.exports = (sequelize, DataType) => {
    let ComuniEntry = sequelize.define('ComuniEntry', {
        // id missing because Sequelize adds it by default
        area_intervento: DataType.STRING(255),
        comune: DataType.STRING(255),
        abitanti: DataType.INTEGER(11),
        n_sedi: DataType.INTEGER(11),
        fascia: DataType.STRING(255),
        codice_tratta_bul: DataType.STRING(255),
        stato_doc: DataType.STRING(255),
        data_presentazione: DataType.STRING(255),
        rif: DataType.STRING(255),
        note: DataType.STRING(255),
        disp_pdf: DataType.INTEGER(11),
        disp_pdf_string: DataType.STRING(255)
    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'comuni'
    });

    // Association to other models (foreign keys)
    ComuniEntry.associate = function(models) {

    };

    return ComuniEntry;
};