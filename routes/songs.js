const router = require('express').Router();
const SongService = require('../services/songService');

router.post('/', (req, res) => {
	return SongService.create(req.body)      
		.then(song => {         
			res.status(201).send(song);      
		})      
		.catch(err => {         
			res.status(500).send(err);      
		})   
	;
});

router.get('/', (req, res) => {   
	SongService.find(req.query)       
		.then(songs => {           
			res.status(200).send(songs);       
		})   
	;
});

router.get('/:id', (req, res) => {   
	SongService.findById(req.params.id)       
		.then(songs => {           
			res.status(200).send(songs);       
		}) 
		.catch(err => {
			res.status(500).send(err);
		})  
	;
});

module.exports = router;