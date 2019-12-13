function cat(name) {
	this.name = name;
}

cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}
module.exports = Cat;