import Movies from '../Movies.json'
//var Movies = require("../Movies.json")

export const getMovies = async (req, res) => {
    const password = req.body.akelab

    try {

        password === 123456789
        ? res.status(201).json(Movies)
        : res.status(201).json({message: 'wrong password'})

    } catch(error) {
        res.status(404).json({message: error.message})
    }
}