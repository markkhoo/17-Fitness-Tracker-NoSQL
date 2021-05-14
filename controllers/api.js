const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .then(e => {
        res.json(e);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        {_id: req.params.id}, 
        {$push: {exercises: req.body}}
    )
    .then(e => {
        res.json(e);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(e => {
        res.json(e);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .limit(7)
    .then(e => {
        console.log(e);
        res.json(e);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;