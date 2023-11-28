import mongoose from "mongoose";

const Schema=mongoose.Schema

const Habitacion=new Schema({
    nombre:{
        type:String,
        require:true
    },
    foto:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precioNoche:{
        type:Number,
        require:true
    }
})

export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)