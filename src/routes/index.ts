import { Router } from 'express';
import { ApiRoutes } from './v1';

const router: Router = Router();

router.use('/escrow', ApiRoutes);

export const MainRouter: Router = router;
