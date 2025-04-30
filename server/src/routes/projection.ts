import express from 'express';
import { getProjection, getSpecificProjection } from '../controllers/projectionController';

const router = express.Router();

router.get('/projection', getProjection);
router.get('/specific-projection', getSpecificProjection);

export default router;
