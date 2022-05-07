//require knex
const knex = require('knex');
//require config
const config = require('../../knexfile');
//create knex instance
const db = knex(config.production);

class ProductosMySql {

    async listar(id) {
       try {
              const prod = await db('products').where('id', id)
                return prod[0] || { error: 'producto no encontrado' }
         } catch (error) {
                return { error: 'producto no encontrado' }
         }
    }

    async listarAll() {
        try {
            const prod = await db('products')
            return prod
        } catch (error) {
            return { error: 'producto no encontrado' }
        }
    }

    async guardar(prod) {
        try {
            await db('products').insert({...prod})
            return { message: 'producto guardado' }
        } catch (error) {
            return { error: 'producto no guardado' }
        }
    }

    async actualizar(prod, id) {
        try {
            await db('products').where('id', id).update({...prod})
            return {message: 'producto actualizado'}
        } catch (error) {
            return { error: 'producto no actualizado' }
        }
    }

   async borrar(id) {
        try {
            await db('products').where('id', id).del()
            return { message: 'producto eliminado' }
        } catch (error) {
            return { error: 'producto no borrado' }
        }
    }
}

module.exports = ProductosMySql
