import { Router } from 'express';
const router = Router();
import * as control from './controllers.js'

/**  *** USER ROUTES *** */
router.route('/signup')
    .post(control.signUp)
    .delete(control.deleteAcc)
router.route('/login')
    .post(control.login)

/**  *** QUESTIONS ROUTES *** */
router.route('/questions/:id')
    .get(control.getQuestions) /** Get Request */
    .delete(control.deleteQuestions) /** Delete Request */
router.route('/questions')
    .get(control.getAllData)
    .post(control.insertQuestion) /** Post Request */


/** Result Routes */
router.route('/results')
    .get(control.getResults)
    .post(control.setResults)
    .delete(control.deleteResult)



export default router;
