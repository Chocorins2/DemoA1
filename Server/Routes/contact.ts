import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type Contact controller
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact';

// import Util Functions
import { AuthGuard } from '../Util/index';

/* GET /Contact-list page. */
router.get('/', AuthGuard, DisplayContactListPage);

// /* GET - display /Contact-list/add page. */
// router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /Contact-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

// /* POST - process /Contact-list/add page */
// router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /Contact-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /Contact-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);