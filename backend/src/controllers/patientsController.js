const connection = require ('../database/connection');
const generateUniqueKey = require ('../utils/generateUniqueKey');


module.exports = {
    async index (request, response){
        const patients = await connection('patientusers').select('*');
        if (patients !== null){
            return response.json(patients);
        }else{
            return response.json({error:"NO DATA FOUND"});
        }
        

    },

    async logonuser (request, response){

    },


    async delete (request,response){
        const { id } = request.body;
        const {id_patientuser} = request.headers.authorization

        await connection('patientusers').where('id',id).delete();
        return response.status(204).send();
    },

    async store (request,response){
        const { name, cpf, password, whatsapp, birthday, city, uf, id_medicuser } = request.body;
        const id = generateUniqueKey();

        await connection('patientusers').insert({
            id,
            name,
            cpf,
            password,
            whatsapp,
            birthday,
            city,
            uf,
            id_medicuser,
        })

        return response.json({
            id,
        });

    },
}