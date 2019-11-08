const {Appointment, Slot} = Model;
const Nexmo = require('nexmo');

const appointmentController = {
    all(req,res) {
        Appointment.find({}).exec((err, appointments) =>
        res.json(appointments));
    },
    create(req, res) {
        var requestBody = req.body;

        var newSlot = new Slot ({
            slot_time: requestBody.slot_time,
            slot_date: requestBody.slot_date,
            created_at: Date.now()
        });
        newSlot.save();

        var newAppointment = new Appointment ({
            name: requestBody.name,
            email: requestBody.email,
            phone: requestBody.phone,
            slots: newSlot._id
        });

        const nexmo = new Nexmo ({
            apiKey: "9fe69d48",
            apiSecret: "vsf1lIj9iUAF71DX"
        });

        let msg = requestBody.name + " " + "this message is to confirm your appointment with" + " " + requestBody.Appointment;

        newAppointment.save((err, saved) => {
            Appointment.find({ _id: saved._id })
            .populate("slots")
            .exec((err, Appointment) => res.json(Appointment));

            const from = VIRTUAL_NUMBER;
            const to = RECIPIENT_NUMBER;

            nexmo.message.sendSms (from, to, msg, (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(responseData);
                }
            });
        });
    }
};

module.exports = appointmentController;