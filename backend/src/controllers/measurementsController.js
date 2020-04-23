const connection = require ('../database/connection');
//const knex = require ('knex');

module.exports = {
    async indexAll (request,response){
        const measurements = await connection ('measurements').select('*');
        if (measurements !== null){
            return response.json(measurements);
        }else{
            return response.json({error:"NO DATA FOUND"});
        }

    },

    async store (request, response){
        const { systolic, diastolic } = request.body;
        const id_patientuser = request.headers.authorization;
        const id_medic = await connection ('patientusers').where('id', id_patientuser).select('id_medicuser').first();

        const id_medicuser = id_medic.id_medicuser;
        //const measurementday = knex.now();

        await connection('measurements').insert({
            systolic,
            diastolic,
            id_patientuser,
            id_medicuser,
        })
    },

    async delete (request, response){
        const { id } = request.params;
        const id_patientuser = request.headers.authorization;

        const measurements = await connection('measurements').where('id',id).select('id_patientuser').first();

        if (measurements.id_patientuser != id_patientuser){
            return response.status(401).json({erro: 'Operation not permited'});
        }

        await connection('measurements').where('id',id).delete();

        return response.status(204).send();
    }
}