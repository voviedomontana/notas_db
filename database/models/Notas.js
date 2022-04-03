module.exports = function(sequelize,dataTypes){
    let alias = "Notes"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        texto: {
            type: dataTypes.STRING
        },
        estado: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "notes",
        timestamps: false
    }
    let notas = sequelize.define(alias, cols, config);

    return notas; 


}