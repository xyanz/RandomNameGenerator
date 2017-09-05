module.exports = {

  //Render generated name index page
  handleCreate(req, res) {
    res.render('names/generate-index', {
      data: res.locals.gen,
    });
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
//////////////////////////////////////////////////////
  //////////////////NAMESSSSS///////////////////
  showNames(req, res) {
    res.render('names/name-index', {
      data: res.locals.names,
    });
  },
  showOneName(req, res) {
    res.render('names/name-single', {
      data: res.locals.name,
    });
  },
  showAddNameForm(req, res) {
    res.render('names/name-add');
  },
  showEditNameForm(req, res) {
    res.render('names/name-edit', {
      data: res.locals.name,
    });
  },
  handleCreateName(req, res) {
    res.redirect('/names');
  },
  handleUpdateName(req, res) {
    res.redirect(`/names/${req.params.id}`);
  },
  handleDeleteName(req, res) {
    res.redirect('/names');
  },
//////////////////////////////////////////////////////
  ///////////////////MONTHS//////////////////////
  showMonths(req, res) {
    res.render('months/month-index', {
    data: res.locals.months,
  });
  },
    showOneMonth(req, res) {
    res.render('months/month-single', {
      data: res.locals.month,
    });
  },
  showAddMonthForm(req, res) {
    res.render('months/month-add');
  },
  showEditMonthForm(req, res) {
    res.render('months/month-edit', {
      data: res.locals.month,
    });
  },
  handleCreateMonth(req, res) {
    res.redirect('/months');
  },
  handleUpdateMonth(req, res) {
    res.redirect(`/months/${req.params.id}`);
  },
  handleDeleteMonth(req, res) {
    res.redirect('/months');
  },
};
