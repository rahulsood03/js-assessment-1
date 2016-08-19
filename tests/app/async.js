if ( typeof window === 'undefined' ) {
  require('../../app/async');
  var expect = require('chai').expect;
}

describe('async behavior', function() {
  it('you should understand how to use promises to handle asynchronicity', function() {
    var flag = false;
    var finished = 0;
    var total = 2;

    function finish(_done) {
      if (++finished === total) { _done(); }
    }
      
    var dfd = $.Deferred();
    var timeoutID = window.setTimeout(function(){
        dfd.resolve(true);
    }, 1000);
    return dfd.promise();

    asyncAnswers.async(true).then(function(result) {
      flag = result;
      expect(flag).to.eql(true);
      finish(done);
    });

    asyncAnswers.async('success').then(function(result) {
      flag = result;
      expect(flag).to.eql('success');
      finish(done);
    });
      
    expect(flag).to.eql(false);
  });

  it('you should be able to retrieve data from the server and return a sorted array of names', function() {
    var url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then(function(result) {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});
