describe('clinical:active-layout-reset', function () {
  var server = meteor();
  var client = browser(server);

  it('CSS body elements should be normalized to a standard default', function () {
    return client.execute(function () {
      expect($('body').css('background-size')).to.equal('cover');
      expect($('body').css('-webkit-user-select')).to.equal('none');
    });
  });

});
