import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema,
model = Mongoose.model.bind(Mongoose),
ObjectID = Mongoose.Schema.Types.ObjectID;

const slotSchema = new Schema ({
    slot_time: String,
    slot_date: String,
    created_at: Date
});

const Slot = model('Slot', slotSchema);

const appointmentSchema = new Schema ({
    id: ObjectID,
    name: String,
    email: String,
    phone: Number,
    slots: {type: ObjectID, ref: 'Slot'},
    created_at: Date
});

const Appointment = model('Appointment', appointmentSchema);