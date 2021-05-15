# 17-Fitness-Tracker-NoSQL

## Description
This application is a simple fitness tracking app. You can visit it [HERE](https://salty-stream-24641.herokuapp.com/). 

## Usage
No login or account is required to use. Just access the sight to begin tracking your workouts. 

## Technologies Used
* HTML5
* CSS
* Javascript
    * express
    * nodemon (for development)
    * morgan (for development)
* MongoDB
    * Mongoose ODM
* Insomnia Core (for API testing)

The following code is the route that serves data for the data visualization:
```javascript
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
```
This fetch request uses a mongoose function to aggregate data from the Mongo database.

---

## Contact
For any questions contact GitHub user [markkhoo](https://github.com/markkhoo) or at this email: markkhoo95@gmail.com