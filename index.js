router.get('/prox', function(req, res){
  res.sendFile(path.join(__dirname, '/prox.html'));
});
app.use('/prox', router);
