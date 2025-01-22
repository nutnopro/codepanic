const express = require('express');
const { getAllDatasets, createDataset, updateDataset, deleteDataset } = require('./datasetController'); // อ้างอิง datasetController

const router = express.Router();

// Define CRUD routes
router.get('/', getAllDatasets); // Fetch all datasets
router.post('/', createDataset); // Add a new dataset
router.put('/:id', updateDataset); // Update dataset
router.delete('/:id', deleteDataset); // Delete dataset

module.exports = router;
