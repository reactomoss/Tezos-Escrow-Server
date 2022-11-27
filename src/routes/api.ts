import { Router } from 'express';
import { createHandler as handler } from '../utils/validator';
import * as contractService from '../services/contract.service';

const router: Router = Router();

router.get(
  '/reward/:address',
  handler(({ params }) => contractService.reward(params.address))
);

export const ApiRoutes: Router = router;
