module.exports = app => {
    app.route('/')
        .get(app.api.tools.hello)

    app.route('/tools')
        .get(app.api.tools.get)
        .post(app.api.tools.save)

    app.route('/tools/:id')
        .get(app.api.tools.getById)
        .put(app.api.tools.save)
        .delete(app.api.tools.remove)
}