
var parse = require('..');

describe('parse(str)', function(){
	it('should support "foo"', function(){
		var ret = parse('foo');
		ret.should.eql([
			{ name: 'foo' }
		]);
	})
	
	it('should support "foo | bar | baz"', function(){
		var ret = parse('foo | bar | baz');
		ret.should.eql([
			{ name: 'foo' },
			{ name: 'bar' },
			{ name: 'baz' }
		]);
	})
})