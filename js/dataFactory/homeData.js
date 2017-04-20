app.factory('pageData', ['$http', function(ajax){
	var navlist = ['特价','零食','乳品','速食','水果','饮品','粮油'];
	var footlist = [{
		className : 'iconfont icon-shouye-copy',
		name : '首页',
		loca : '#/home'
	},{
		className : 'iconfont icon-xing',
		name : '品牌团',
		loca : '#/brand'
	},{
		className : 'iconfont icon-liwu',
		name : '红包',
		loca : '#/gift'
	},{
		className : 'iconfont icon-gouwuche',
		name : '购物车',
		loca : '#/cart'
	},{
		className : 'iconfont icon-wode',
		name : '我的',
		loca : '#/login'
	}];

	// core product data
	var products = [];
	// core cart data
	var cartData = null;

	// login data

	function store (name, data){
		if (data) {
			localStorage.setItem(name, JSON.stringify(data));
		} else {
			return JSON.parse(localStorage.getItem(name));
		}
	};

	function randomString(len) {
        len = len || 32;
        for (var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", maxPos = $chars.length, pwd = "", i = 0; i < len; i++)
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        return pwd
    };

	function getMd5(nonce, phoneNum) {
        var token = "gDclCjcZ#89EIJio(7"
          , phone = phoneNum;
        return createHash(nonce + phone + token).toUpperCase()
    };

    function createHash (str) {
        if (null === str)
            return null;
        var xl, k, AA, BB, CC, DD, a, b, c, d, rotateLeft = function(lValue, iShiftBits) {
            return lValue << iShiftBits | lValue >>> 32 - iShiftBits
        }, addUnsigned = function(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            return lX8 = 2147483648 & lX,
            lY8 = 2147483648 & lY,
            lX4 = 1073741824 & lX,
            lY4 = 1073741824 & lY,
            lResult = (1073741823 & lX) + (1073741823 & lY),
            lX4 & lY4 ? 2147483648 ^ lResult ^ lX8 ^ lY8 : lX4 | lY4 ? 1073741824 & lResult ? 3221225472 ^ lResult ^ lX8 ^ lY8 : 1073741824 ^ lResult ^ lX8 ^ lY8 : lResult ^ lX8 ^ lY8
        }, _F = function(x, y, z) {
            return x & y | ~x & z
        }, _G = function(x, y, z) {
            return x & z | y & ~z
        }, _H = function(x, y, z) {
            return x ^ y ^ z
        }, _I = function(x, y, z) {
            return y ^ (x | ~z)
        }, _FF = function(a, b, c, d, x, s, ac) {
            return a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac)),
            addUnsigned(rotateLeft(a, s), b)
        }, _GG = function(a, b, c, d, x, s, ac) {
            return a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac)),
            addUnsigned(rotateLeft(a, s), b)
        }, _HH = function(a, b, c, d, x, s, ac) {
            return a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac)),
            addUnsigned(rotateLeft(a, s), b)
        }, _II = function(a, b, c, d, x, s, ac) {
            return a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac)),
            addUnsigned(rotateLeft(a, s), b)
        }, convertToWordArray = function(str) {
            for (var lWordCount, lMessageLength = str.length, lNumberOfWords_temp1 = lMessageLength + 8, lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64, lNumberOfWords = 16 * (lNumberOfWords_temp2 + 1), lWordArray = new Array(lNumberOfWords - 1), lBytePosition = 0, lByteCount = 0; lByteCount < lMessageLength; )
                lWordCount = (lByteCount - lByteCount % 4) / 4,
                lBytePosition = lByteCount % 4 * 8,
                lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition,
                lByteCount++;
            return lWordCount = (lByteCount - lByteCount % 4) / 4,
            lBytePosition = lByteCount % 4 * 8,
            lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition,
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3,
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29,
            lWordArray
        }, wordToHex = function(lValue) {
            var lByte, lCount, wordToHexValue = "", wordToHexValue_temp = "";
            for (lCount = 0; lCount <= 3; lCount++)
                lByte = lValue >>> 8 * lCount & 255,
                wordToHexValue_temp = "0" + lByte.toString(16),
                wordToHexValue += wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
            return wordToHexValue
        }, x = [], S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        for (x = convertToWordArray(str),
        a = 1732584193,
        b = 4023233417,
        c = 2562383102,
        d = 271733878,
        xl = x.length,
        k = 0; k < xl; k += 16)
            AA = a,
            BB = b,
            CC = c,
            DD = d,
            a = _FF(a, b, c, d, x[k + 0], S11, 3614090360),
            d = _FF(d, a, b, c, x[k + 1], S12, 3905402710),
            c = _FF(c, d, a, b, x[k + 2], S13, 606105819),
            b = _FF(b, c, d, a, x[k + 3], S14, 3250441966),
            a = _FF(a, b, c, d, x[k + 4], S11, 4118548399),
            d = _FF(d, a, b, c, x[k + 5], S12, 1200080426),
            c = _FF(c, d, a, b, x[k + 6], S13, 2821735955),
            b = _FF(b, c, d, a, x[k + 7], S14, 4249261313),
            a = _FF(a, b, c, d, x[k + 8], S11, 1770035416),
            d = _FF(d, a, b, c, x[k + 9], S12, 2336552879),
            c = _FF(c, d, a, b, x[k + 10], S13, 4294925233),
            b = _FF(b, c, d, a, x[k + 11], S14, 2304563134),
            a = _FF(a, b, c, d, x[k + 12], S11, 1804603682),
            d = _FF(d, a, b, c, x[k + 13], S12, 4254626195),
            c = _FF(c, d, a, b, x[k + 14], S13, 2792965006),
            b = _FF(b, c, d, a, x[k + 15], S14, 1236535329),
            a = _GG(a, b, c, d, x[k + 1], S21, 4129170786),
            d = _GG(d, a, b, c, x[k + 6], S22, 3225465664),
            c = _GG(c, d, a, b, x[k + 11], S23, 643717713),
            b = _GG(b, c, d, a, x[k + 0], S24, 3921069994),
            a = _GG(a, b, c, d, x[k + 5], S21, 3593408605),
            d = _GG(d, a, b, c, x[k + 10], S22, 38016083),
            c = _GG(c, d, a, b, x[k + 15], S23, 3634488961),
            b = _GG(b, c, d, a, x[k + 4], S24, 3889429448),
            a = _GG(a, b, c, d, x[k + 9], S21, 568446438),
            d = _GG(d, a, b, c, x[k + 14], S22, 3275163606),
            c = _GG(c, d, a, b, x[k + 3], S23, 4107603335),
            b = _GG(b, c, d, a, x[k + 8], S24, 1163531501),
            a = _GG(a, b, c, d, x[k + 13], S21, 2850285829),
            d = _GG(d, a, b, c, x[k + 2], S22, 4243563512),
            c = _GG(c, d, a, b, x[k + 7], S23, 1735328473),
            b = _GG(b, c, d, a, x[k + 12], S24, 2368359562),
            a = _HH(a, b, c, d, x[k + 5], S31, 4294588738),
            d = _HH(d, a, b, c, x[k + 8], S32, 2272392833),
            c = _HH(c, d, a, b, x[k + 11], S33, 1839030562),
            b = _HH(b, c, d, a, x[k + 14], S34, 4259657740),
            a = _HH(a, b, c, d, x[k + 1], S31, 2763975236),
            d = _HH(d, a, b, c, x[k + 4], S32, 1272893353),
            c = _HH(c, d, a, b, x[k + 7], S33, 4139469664),
            b = _HH(b, c, d, a, x[k + 10], S34, 3200236656),
            a = _HH(a, b, c, d, x[k + 13], S31, 681279174),
            d = _HH(d, a, b, c, x[k + 0], S32, 3936430074),
            c = _HH(c, d, a, b, x[k + 3], S33, 3572445317),
            b = _HH(b, c, d, a, x[k + 6], S34, 76029189),
            a = _HH(a, b, c, d, x[k + 9], S31, 3654602809),
            d = _HH(d, a, b, c, x[k + 12], S32, 3873151461),
            c = _HH(c, d, a, b, x[k + 15], S33, 530742520),
            b = _HH(b, c, d, a, x[k + 2], S34, 3299628645),
            a = _II(a, b, c, d, x[k + 0], S41, 4096336452),
            d = _II(d, a, b, c, x[k + 7], S42, 1126891415),
            c = _II(c, d, a, b, x[k + 14], S43, 2878612391),
            b = _II(b, c, d, a, x[k + 5], S44, 4237533241),
            a = _II(a, b, c, d, x[k + 12], S41, 1700485571),
            d = _II(d, a, b, c, x[k + 3], S42, 2399980690),
            c = _II(c, d, a, b, x[k + 10], S43, 4293915773),
            b = _II(b, c, d, a, x[k + 1], S44, 2240044497),
            a = _II(a, b, c, d, x[k + 8], S41, 1873313359),
            d = _II(d, a, b, c, x[k + 15], S42, 4264355552),
            c = _II(c, d, a, b, x[k + 6], S43, 2734768916),
            b = _II(b, c, d, a, x[k + 13], S44, 1309151649),
            a = _II(a, b, c, d, x[k + 4], S41, 4149444226),
            d = _II(d, a, b, c, x[k + 11], S42, 3174756917),
            c = _II(c, d, a, b, x[k + 2], S43, 718787259),
            b = _II(b, c, d, a, x[k + 9], S44, 3951481745),
            a = addUnsigned(a, AA),
            b = addUnsigned(b, BB),
            c = addUnsigned(c, CC),
            d = addUnsigned(d, DD);
        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase()
    };

	return {
		sendRequest : function(scope){
			ajax({
				url: "http://as-vip.missfresh.cn/v2/product/home/index?device_id=ce933659ec7d3cdbaf141271045db18e&env=web&platform=web&tdk=149265664288788121375&uuid=ce933659ec7d3cdbaf141271045db18e&version=2.3.7",
				method : 'post',
				data : {

				}
			}).success(function(response){
				cartData = store('cart') || {};
				products = response.product_list;
				for (var i = 0; i < products.length; i++) {
					products[i].num = 0;
					for (key in cartData){
						if (products[i].name === key) {
							products[i].num = cartData[key].num;
						}
					}
				}
				scope.products = products;
			}).error(function(){
				console.log('error');
			})
		},
		getProductData : function(scope){
			for (var i = 0; i < products.length; i++) {
				for (key in cartData){
					if (products[i].name === key) {
						products[i].num = cartData[key].num;
					}
				}
			}
			return products;
		},
		sendSingUpData : function(phone){
			var nonce = randomString();
			var signature = getMd5(nonce, phone);
			ajax({
				//url: 'http://as-vip.missfresh.cn/v1/auth/login-register?device_id=ce933659ec7d3cdbaf141271045db18e&env=web&nonce=SRB88DRbH7srcJhBQaJdfQrrfjE6QQTd&platform=web&signature=6E4A7833F151AADA13802155AFB7DF57&tdk=149265664288788121375&uuid=ce933659ec7d3cdbaf141271045db18e&version=2.3.7',
				url : 'http://as-vip.missfresh.cn/v1/auth/login-register?device_id=ba109558faa3da231c9dbfb9bf96c6a6&env=web&nonce='+ nonce +'&platform=web&signature='+ signature +'&tdk=149267942484154715588&uuid=ba109558faa3da231c9dbfb9bf96c6a6&version=2.3.7',
				method : 'post',
				data : {
					phone_number: ""+phone,
					send_type:"SMS"
				}
			}).success(function(response){
				console.log(response);
			}).error(function(){
				console.log('error');
			})
		},
		setCartData : function(pro){
			cartData[pro.name] = pro;
			if (cartData[pro.name].num === 0) {
				delete cartData[pro.name];
			}
			store('cart', cartData);
		},
		getCartData : function(){
			if (cartData) {
				return cartData;
			}
			return store('cart');
		},
		getFootData : function(){
			return footlist;
		},
		getNavData : function(){
			return navlist;
		},
		getCurPage : function(){
			for (var i = 0; i < footlist.length; i++) {
				if (location.hash === footlist[i].loca) {
					return i;
				}
			}
		}
	}
}])