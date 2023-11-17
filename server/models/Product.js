// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const productSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
        precio: {
            type: Number,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

// 3. MODELO
const Product = mongoose.model('Product', productSchema)

// 4. EXPORTACIÓN
module.exports = Product