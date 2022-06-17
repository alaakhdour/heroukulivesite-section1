import express from 'express';
const router = express.Router();

/* display home page. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'Home',page: 'home' });
});

/* display home page. */
router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'Home',page: 'home' });
});

/* display about page. */
router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'About Us',page: 'about' });
});

/* display projects page. */
router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'My Projects',page: 'projects' });
});

/* display services page. */
router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'My services',page: 'services' });
});

/* display contact page. */
router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) 
{
  res.render('index', { title: 'contact us',page: 'contact' });
});

export default router;
