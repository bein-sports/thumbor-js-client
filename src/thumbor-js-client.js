ThumborJsClient = (function() {

	/**
	 * Main client for ThumborJs : requires host and secret thumbor key
	 *
	 * @param host
	 * @param secret
	 * @constructor
	 */
	var Client = function (host, secret) {
		this.host = host;
		this.secret = secret;
		this.command = [];
	};

	/**
	 * Adds /full-fit-in/{width}*{height}. (requires width and height)
	 *
	 * @param width
	 * @param height
	 * @returns {Client}
	 */
	Client.prototype.fullFitIn = function(width, height) {
		this.command.push('full-fit-in/' + width + 'x' + height);
		return this;
	};

	/**
	 * Adds /fit-in/{width}*{height}. (requires width and height)
	 *
	 * @param width
	 * @param height
	 * @returns {Client}
	 */
	Client.prototype.fitIn = function(width, height) {
		this.command.push('fit-in/' + width + 'x' + height);
		return this;
	};

	/**
	 * Generates the url part composed of filename and commands
	 *
	 * @param filename
	 * @returns {string}
	 */
	Client.prototype.urlPart = function(filename) {
		var urlPart = "";

		if(this.command.length > 0) {
			urlPart += this.command.join('/');
			urlPart += '/';
		}

		return urlPart + filename;
	};

	/**
	 * Generates Hmac key, mandatory for url generation
	 *
	 * @param urlPart
	 * @returns {string}
	 */
	Client.prototype.sign = function(urlPart) {

		var hmacTextType = "TEXT";
		var hmacKeyInput = this.secret;
		var hmacKeyInputType = "TEXT";
		var hmacVariant = "SHA-1";
		var hmacOutputType = "B64";
		var hmacObj = new jsSHA(urlPart, hmacTextType);

		//Generates hMac key
		var hash = hmacObj.getHMAC(
			hmacKeyInput,
			hmacKeyInputType,
			hmacVariant,
			hmacOutputType
		);

		// Replaces / by _ and + by - , to avoid url issues
		return hash.replace(/\//g, "_").replace(/\+/g, "-");

	};

	/**
	 * Generates full URL
	 *
	 * @param filename
	 * @returns {string}
	 */
	Client.prototype.url = function(filename) {
		var urlPart = this.urlPart(filename);

		return this.host + '/' + this.sign(urlPart) + '/' + urlPart;
	};

	return {
		create: function (host, secret) {
			return new Client(host, secret);
		}
	}

})();