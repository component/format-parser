/**
 * Parse the given format `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api public
 */

module.exports = function(str){
  var arr = str.split(/ *\| */);
  
  for (var i = 0; i < arr.length; i++) {
    var call = arr[i];
    var parts = call.split(':');
    var name = parts.shift();
    var args = parseArgs(parts.join(':'));
    
    arr[i] = {
      name: name,
      args: args
    };
  }
  
  return arr;
};

/**
 * Parse args `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api private
 */

function parseArgs(str) {
  var args = [];
  var re = /"([^"]*)"|'([^']*)'|([^ \t,]+)/g;
  var m;
  
  while (m = re.exec(str)) {
    args.push(m[2] || m[1] || m[0]);
  }
  
  return args;
}
