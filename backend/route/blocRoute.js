import {getBloc,getOneBloc,createBloc,deleteBloc,updateBloc} from '../controllers/blocController.js';
import {Router} from "express";

const router = Router()


router.route('/').get(getBloc).post(createBloc)
router.route('/:id').get(getOneBloc).delete(deleteBloc).put(updateBloc)


export default router
