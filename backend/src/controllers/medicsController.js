const connection = require ('../database/connection');
const generateUniqueKey = require ('../utils/generateUniqueKey');

module.exports = ({
    async index (request, response){
        const medics = await connection('medicusers').select('*');
        if (medics != null ){
            return response.json(medics);
        }else{
            return response.json({error:"NO DATA FOUND"});
        }
    },

    async store (request, response){
        const { name, crm, password, whatsapp, city, uf} = request.body
        const id = generateUniqueKey();

        await connection ('medicusers').insert({
            id,
            name,
            crm,
            password,
            whatsapp,
            city,
            uf,
        })

        return response.json({
            id,
        });
    }

})