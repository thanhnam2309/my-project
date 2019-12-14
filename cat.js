function cat(name) {
	this.name = name;
	this.stomach = [];
}

cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}
module.exports = cat;