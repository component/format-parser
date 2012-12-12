
var parse = require('..');

describe('parse(str)', function(){
	it('should support "foo"', function(){
		var ret = parse('foo');
		ret.should.eql([
			{ name: 'foo' }
		]);
	})
})