
var parse = require('..');

describe('parse(str)', function(){
	it('should support "foo"', function(){
		var ret = parse('foo');
		ret.should.eql([
			{ name: 'foo', args: [] }
		]);
	})
	
	it('should support "foo | bar | baz"', function(){
		var ret = parse('foo | bar | baz');
		ret.should.eql([
			{ name: 'foo', args: [] },
			{ name: 'bar', args: [] },
			{ name: 'baz', args: [] }
		]);
	})
	
	it('should support args', function(){
		var ret = parse('foo:bar');
		ret.should.eql([
			{ name: 'foo', args: ['bar'] }
		]);
	})
	
	it('should support quoted args', function(){
		var ret = parse('date:"%Y %d %m:%s"');
		ret.should.eql([
			{ name: 'date', args: ['%Y %d %m:%s'] }
		]);
	})
	
	it('should support multiple args', function(){
		var ret = parse('foo:bar,baz,raz');
		ret.should.eql([
			{ name: 'foo', args: ['bar', 'baz', 'raz'] }
		]);
	})
	
	it('should support multiple args with whitespace', function(){
		var ret = parse('foo:bar, baz, raz');
		ret.should.eql([
			{ name: 'foo', args: ['bar', 'baz', 'raz'] }
		]);
	})
})