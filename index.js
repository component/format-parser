
/**
 * Parse the given format `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api public
 */

module.exports = function(str){
	return str.split(/ *\| */).map(function(call){
		var parts = call.split(':');
		var name = parts.shift();
		var args = parts.join(':');
		
		return {
			name: name,
			args: parseArgs(args)
		};
	});
};

function parseArgs(str) {
	console.log(str);
}