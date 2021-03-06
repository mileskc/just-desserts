const express = require('express');
const router = express.Router();
const Dessert = require('../models/desserts.js')

//main page
router.get('/justdesserts', (req, res) => {
    Dessert.find({}, (error, allDesserts) => {
        res.render('index.ejs', {
            desserts: allDesserts,
            currentUser: req.session.currentUser
        })
    })
})

//dessert index page
router.get('/justdesserts/alldesserts', (req, res) => {
    Dessert.find({}, (error, allDesserts) => {
        res.render('desserts/index.ejs', {
            desserts: allDesserts,
            currentUser: req.session.currentUser
        })
    })
})

//new
router.get('/justdesserts/alldesserts/new', (req, res) => {
    res.render('desserts/new.ejs', {
        currentUser: req.session.currentUser
    })
})


//edit
router.get('/justdesserts/alldesserts/:id/edit', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) =>{
        res.render('desserts/edit.ejs', {
            dessert: foundDessert,
            currentUser: req.session.currentUser
        })
    })
})

//show route
router.get('/justdesserts/alldesserts/:id', (req, res) => {
    Dessert.findById(req.params.id, (error, foundDessert) => {
        res.render('desserts/show.ejs', {
            dessert: foundDessert,
            currentUser: req.session.currentUser
        })
    })
})

//Create
router.post('/justdesserts/alldesserts', (req, res) => {
    Dessert.create(req.body, (err, createdUser)=>{
        res.redirect('/justdesserts/alldesserts');
    });
})

//Delete
router.delete('/justdesserts/alldesserts/:id', (req, res) => {
    Dessert.findByIdAndRemove(req.params.id, (error, deletedDessert) => {
        res.redirect('/justdesserts/alldesserts')
    })
})

//Update
router.put('/justdesserts/alldesserts/:id', (req, res) => {
    Dessert.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedDessert) => {
        res.redirect(`/justdesserts/alldesserts/${req.params.id}`)
    })
})


// EXPORT
module.exports = router;