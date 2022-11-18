const sqlite3 = require('sqlite3');


const allPlans = [
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "09:00",
        endtime: "10:15",
    },
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "10:00",
        endtime: "13:47",
    },
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "11:00",
        endtime: "12:00",
    },
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "12:00",
        endtime: "13:00",
    },
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "13:00",
        endtime: "14:00",
    },
    {
        from: "Frankfurt(Main)Hbf",
        to: "Berlin Hbf",
        starttime: "14:00",
        endtime: "15:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "09:00",
        endtime: "10:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "10:00",
        endtime: "11:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "11:00",
        endtime: "12:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "12:00",
        endtime: "13:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "13:00",
        endtime: "14:00",
    },
    {
        from: "Berlin Hbf",
        to: "Frankfurt(Main)Hbf",
        starttime: "14:00",
        endtime: "15:00",
    },
]

const db = new sqlite3.Database('./fahrplans.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {        

        db.run('CREATE TABLE fahrplans( \
            origin NVARCHAR(30)  NOT NULL,\
            destination NVARCHAR(30)  NOT NULL,\
            starttime NVARCHAR(5) NOT NULL,\
            endtime NVARCHAR(5) NOT NULL\
        )', (err) => {
            if (err) {
                console.log(err);
            }
            let insert = 'INSERT INTO fahrplans (origin, destination, starttime, endtime) VALUES (?,?,?,?)';
            allPlans.forEach((plan) => {
                const {from, to, starttime, endtime} = plan;
                db.run(insert,[from, to, starttime, endtime ], (err) => { if (err) {
                    console.log(err);
                }});
            });
        });
    }
});