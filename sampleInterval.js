//random utility (from MDN docs) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var getRandomInterval = function(intervalWidth){
	if (!intervalWidth){ return undefined; };
	if (intervalWidth > this.length){
		throw new Error('Interval Width wider than array');
	}

	var randomIndex = getRandomInt(0, this.length - intervalWidth);
	return [this[randomIndex], this[randomIndex+intervalWidth-1]];
}

module.exports = function(numberOfSamples, intervalWidth){
	if (this.length < 1){
		return undefined
	}

	if (!intervalWidth){
		return getRandomInterval.call(this, numberOfSamples);
	}
	if (numberOfSamples == 1){
		return getRandomInterval.call(this, intervalWidth);
	}

	var samples = new Array();
	for (var i = 0; i < numberOfSamples; i++){
		samples.push(getRandomInterval.call(this, intervalWidth));
	}
	return samples;
}