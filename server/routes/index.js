var express = require('express');
var router = express.Router();
var conn = require('../db/sql.js')
var user = require('../db/userSQL.js')
var QcloudSms = require("qcloudsms_js");	//短信验证码
let jwt = require('jsonwebtoken');		//token
 

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});


// 判断token是否过期   30秒
function getTimeToken( exp ){
    
    let getTime = parseInt(  new Date().getTime() / 1000 );
    
    if(  getTime - exp  >  30 ){
        return true;
    }
    
} 

// 首页
router.get('/api/index_list/0/data/1', function (req, res, next) {
	res.send({
		code: 200,
		data: {
			topBar: [
				{ id: 0, label: '推荐' },
				{ id: 1, label: '大红袍' },
				{ id: 2, label: '铁观音' },
				{ id: 3, label: '绿茶' },
				{ id: 4, label: '普洱' },
				{ id: 5, label: '茶具' },
				{ id: 6, label: '花茶' },
			],
			data: [
				//这是swiper
				{
					id: 0,
					type: 'swiperList',
					data: [
						{ id: 0, imgUrl: './images/swiper1.jpeg' },
						{ id: 1, imgUrl: './images/swiper2.jpeg' },
						{ id: 3, imgUrl: './images/swiper3.jpeg' }
					]
				},
				//这是icons
				{
					id: 1,
					type: 'iconsList',
					data: [
						{
							id: 1,
							title: '自饮茶',
							imgUrl: './images/icons1.png'
						},
						{
							id: 2,
							title: '茶具',
							imgUrl: './images/icons2.png'
						},
						{
							id: 3,
							title: '茶礼盒',
							imgUrl: './images/icons3.png'
						},
						{
							id: 4,
							title: '领福利',
							imgUrl: './images/icons4.png'
						},
						{
							id: 5,
							title: '官方验证',
							imgUrl: './images/icons5.png'
						}
					]
				},
				//爆款推荐
				{
					id: 3,
					type: 'recommendList',
					data: [
						{
							id: 1,
							name: '赛事茶-第三届武夷茶',
							content: '一杯好茶放心好物',
							price: '68',
							imgUrl: './images/recommend.jpeg'
						},
						{
							id: 2,
							name: '茶具-中式陶瓷茶叶',
							content: '鲜爽甘醇 口粮首选',
							price: '68',
							imgUrl: './images/recommend.jpeg'
						}
					]
				},
				//猜你喜欢
				{
					id: 4,
					type: 'likeList',
					data: [
						{
							id: 1,
							imgUrl: './images/like.jpeg',
							name: '赛事茶-第三届武夷山茶叶交易会暨仙店杯-优质奖肉桂160g',
							price: 238
						},
						{
							id: 2,
							imgUrl: './images/like2.jpeg',
							name: '茶具-中式陶瓷茶叶罐 2色可选',
							price: 26
						},
						{
							id: 3,
							imgUrl: './images/goods3.jpg',
							name: '绿茶  远致龙井3号 150g 清爽甘醇',
							price: 118
						},
						{
							id: 4,
							imgUrl: './images/goods4.jpg',
							name: '明前春茶 绿茶 龙井破春系列80g罐装',
							price: 98
						},
						{
							id: 5,
							imgUrl: './images/like3.jpeg',
							name: '明前春茶 绿茶龙井',
							price: 299
						},
						{
							id: 6,
							imgUrl: './images/like.jpeg',
							name: '神奇的糊涂魔药 茶叶 茶具 红茶',
							price: 299
						},
						{
							id: 7,
							imgUrl: './images/like2.jpeg',
							name: '清新茉莉花茶 茶具',
							price: 299
						},
					]
				}
			]
		}
	})
});

// 大红袍
router.get('/api/index_list/1/data/1', function (req, res, next) {
	res.send({
		code: 200,
		data: {
			data: [
				// AdList
				{
					id: 1,
					type: 'adList',
					data: [
						{
							id: 1,
							imgUrl: './images/dhp.jpeg'
						},
						{
							id: 2,
							imgUrl: './images/dhp.jpeg'
						}
					]
				},
				//猜你喜欢
				{
					id: 4,
					type: 'likeList',
					data: [
						{
							id: 1,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						},
						{
							id: 2,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						},
						{
							id: 3,
							imgUrl: './images/like.jpeg',
							name: '建盏茶具套装 红色芝麻毫 12件套',
							price: 299
						}
					]
				}
			]
		}
	})


});

// 铁观音
router.get('/api/index_list/2/data/1', function (req, res, next) {
	res.send({
		code: 200,
		data: {
			data: [
				// AdList
				{
					id: 1,
					type: 'adList',
					data: [
						{
							id: 1,
							imgUrl: './images/tgy.jpeg'
						},
						{
							id: 2,
							imgUrl: './images/tgy.jpeg'
						}
					]
				},
				//猜你喜欢
				{
					id: 1,
					type: 'iconsList',
					data: [
						{
							id: 1,
							title: '自饮茶',
							imgUrl: './images/icons1.png'
						},
						{
							id: 2,
							title: '茶具',
							imgUrl: './images/icons2.png'
						},
						{
							id: 3,
							title: '茶礼盒',
							imgUrl: './images/icons3.png'
						},
						{
							id: 4,
							title: '领福利',
							imgUrl: './images/icons4.png'
						},
						{
							id: 5,
							title: '官方验证',
							imgUrl: './images/icons5.png'
						}
					]
				}
			]
		}
	})
})

// 查询商品     模糊查询
router.get('/api/goods/shopList', function (req, res, next) {
	//前端给后端的数据
	let [searchName, orderName] = Object.keys(req.query);
	let [name, order] = Object.values(req.query);
	// let name = req.query.searchName
	console.log(searchName, orderName, name, order);
	let sql = 'select * from goods_list where name like "%' + name + '%" order by ' + orderName + ' ' + order + ''
	conn.query(sql, function (error, results) {
		// console.log(results);
		res.send({
			code: 0,
			data: results
		})
	})
})

// category获取数据
router.get('/api/category', function (req, res, next) {
	res.send({
		code: 200,
		data: [
			{
				bannerUrl: './images/swiper3.jpeg'
			},
			{
				//一级
				id: 0,
				name: '推荐',
				data: [
					{
						//二级
						id: 0,
						name: '推荐',
						list: [
							//三级
							{
								id: 0,
								name: '铁观音',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '功夫茶具',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 3,
								name: '茶具电器',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 4,
								name: '紫砂壶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 5,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 6,
								name: '武夷岩茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 73,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 54,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
						]
					}
				]
			},
			{
				//一级
				id: 1,
				name: '绿茶',
				data: [
					{
						//二级
						id: 0,
						name: '绿茶',
						list: [
							//三级
							{
								id: 0,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '碧螺春',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 3,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 4,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 5,
								name: '六安瓜片',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 9,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 8,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 7,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 475,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 42,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 41,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 73,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 54,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
						]
					}
				]
			},
			{
				//一级
				id: 2,
				name: '乌龙',
				data: [
					{
						//二级
						id: 0,
						name: '乌龙',
						list: [
							//三级
							{
								id: 0,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '碧螺春',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 3,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 4,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 5,
								name: '六安瓜片',
								imgUrl: './images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id: 3,
				name: '红茶',
				data: [
					{
						//二级
						id: 0,
						name: '红茶',
						list: [
							//三级
							{
								id: 0,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '碧螺春',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 5,
								name: '六安瓜片',
								imgUrl: './images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id: 4,
				name: '白茶',
				data: [
					{
						//二级
						id: 0,
						name: '白茶',
						list: [
							//三级
							{
								id: 0,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '碧螺春',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 3,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 4,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 5,
								name: '六安瓜片',
								imgUrl: './images/list1.jpeg'
							}
						]
					}
				]
			},
			{
				//一级
				id: 5,
				name: '普洱',
				data: [
					{
						//二级
						id: 0,
						name: '普洱',
						list: [
							//三级
							{
								id: 0,
								name: '龙井',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1,
								name: '碧螺春',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 9,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 8,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 7,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 475,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 42,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 41,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 73,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 54,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 911,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 842,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 137,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 47425,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 4142,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 1141,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 473,
								name: '雀舌',
								imgUrl: './images/list1.jpeg'
							},
							{
								id: 524,
								name: '安吉白茶',
								imgUrl: './images/list1.jpeg'
							},
						]
					}
				]
			}
		]
	})
})

// 查询商品详情  id
router.get('/api/goods/detail', (req, res, next) => {
	let id = req.query.id
	let sql = 'select * from goods_list where id =' + id + ''
	conn.query(sql, function (error, result) {
		// console.log(result);
		res.send({
			code: 200,
			data: result
		})
	})
})

// 登陆by密码   				13763334852				121212
router.post('/api/loginByPwd', function (req, res, next) {
	//后端要接收前端传递过来的值
	let params = {
		userTel: req.body.userTel,
		userPwd: req.body.userPwd
	};

	// 登录的时候重新生成一个token
	// 用户信息
	let payload = {tel:params.userTel}
	// 密钥
	let secret = 'liangchaoyan'
	// 生成token
	let newToken = jwt.sign(payload,secret,{
		expiresIn:'2 days'
	})
	console.log(newToken);

	//查询用户手机号是否存在
	conn.query(user.queryUserTel(params), function (error, results) {
		console.log(results);
		//手机号存在 
		if (results.length > 0) {
			conn.query(user.queryUserPwd(params), function (err, result) {
				let id = result[0].id
				console.log(result[0].token);
				if (result.length > 0) {
					//手机号和密码都对
					conn.query(`update user set token = ${newToken} where uId = ${id}`,()=>{
						res.send({
							code: 200,
							data: {
								code: 200,
								success: true,
								msg: '登录成功',
								data: result[0]
							}
						})
					})					
				} else {
					//密码不对
					res.send({
						code: 203,
						data: {
							code: 203,
							success: false,
							msg: '密码不正确'
						}
					})
				}
			})

		} else {
			//不存在
			res.send({
				code: 205,
				data: {
					code: 205,
					success: false,
					msg: '登陆失败,没有该手机用户,请先注册!',
					data: {}
				}
			})
		}
	})
})

// 登陆by 验证码   		13763334852	
router.post('/api/loginByTel', function (req, res, next) {
	//后端要接收前端传递过来的值
	let params = {
		userTel: req.body.userTel
	};

	// 用户信息
	let payload = {tel:params.userTel}
	// 密钥
	let secret = 'liangchaoyan'
	// 生成token
	let newToken = jwt.sign(payload,secret,{
		expiresIn:'2 days'
	})
	console.log(newToken);

	//查询用户手机号是否存在
	conn.query(user.queryUserTel(params), function (error, results) {
		// console.log(results);
		//手机号存在 
		if (results.length > 0) {
			let id = results[0].id;
			let token = results[0].token;
			console.log('!!',token);
			
			conn.query(`update user set token = '${newToken}' where id = ${id}`,function(){
				// 要返回用户信息
				conn.query(`select * from user where id = ${id}`,(e,r)=>{
					//手机号和密码都对
					res.send({
						code:200,
						data:{
							success:true,
							msg:'登录成功',
							data:r[0]
						}
					})
				})				
			})
		} else {
			res.send({
				code: 203,
				data: {
					code: 203,
					success: false,
					msg: '登陆失败,没有该手机用户,请先注册!',
					data: {}
				}
			})
		}
	})
})

// 获取验证码 
router.post('/api/code', (req, res, next) => {
	let tel = req.body.phone;
	// 短信应用SDK AppID
	var appid = 1400187558;  // SDK AppID是1400开头	
	// 短信应用SDK AppKey
	var appkey = "dc9dc3391896235ddc2325685047edc7";
	// 需要发送短信的手机号码
	var phoneNumbers = [tel];
	// 短信模板ID，需要在短信应用中申请
	var templateId = 285590;  // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请	// 签名
	var smsSign = "三人行慕课";  // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`
	// 实例化QcloudSms
	var qcloudsms = QcloudSms(appid, appkey);
	// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
	function callback(err, ress, resData) {
		if (err) {
			console.log("err: ", err);
		} else {
			res.send({
				code: 200,
				data: {
					code: 200,
					success: true,
					data: ress.req.body.params[0],
					msg: '获取短信验证码成功'
				}
			})
		}
	}
	var ssender = qcloudsms.SmsSingleSender();
	//这个变量：params 就是往手机上，发送的短信
	var params = [Math.floor(Math.random() * (9999 - 1000)) + 1000];
	ssender.sendWithParam(86, phoneNumbers[0], templateId,
		params, smsSign, "", "", callback);  // 签名参数不能为空串
})

// 增加一个用户
router.post('/api/addUser', (req, res, next) => {
	let params = {
		userTel: req.body.userTel
	}
	console.log(params.userTel);
	// 先查询有无该手机号的用户
	conn.query(user.queryUserTel(params), function (error, results) {
		// 有，返回
		if (results.length > 0) {
			res.send({
				code: 200,
				data: {
					code: 200,
					success: true,
					data: results[0],
					msg: '登陆成功'
				}
			})
		}
		// 无，增加一条用户信息进数据库
		else {
			conn.query(user.insertData(params), function (error, r) {
				// 再次查询有没有
				conn.query(user.queryUserTel(params), function (error, rr) {
					if (rr.length > 0) {
						res.send({
							code: 200,
							data: {
								code: 200,
								success: true,
								data: rr[0],
								msg: '登陆成功'
							}
						})
					} else {
						res.send({
							data: {
								code: 205,
								fail: true,
								msg: '登陆失败',
								data: []
							}
						})
					}
				})
			})
		}
	})
})

// 注册
router.post('/api/register', (req, res, next) => {
	let params = {
		userTel: req.body.userTel,
		userPwd: req.body.userPwd
	}
	// console.log(params.userTel);

	
	// 登录的时候重新生成一个token
	// 用户信息
	let payload = {tel:params.userTel}
	// 密钥
	let secret = 'liangchaoyan'
	// 生成token
	let newToken = jwt.sign(payload,secret,{
		expiresIn:'2 days'
	})
	console.log(newToken);

	// 先查询有无该手机号的用户
	conn.query(user.queryUserTel(params), function (error, results) {
		// 有，返回
		if (results.length > 0) {
			let id = results[0].id
			console.log(results[0].token);
			conn.query(`update user set token = ${newToken} where uId = ${id}`,()=>{
				res.send({
					code: 200,
					data: {
						code: 200,
						success: true,
						msg: '该手机号已注册',
						data: results[0]
					}
				})
			})	
		}
		// 无，增加一条用户信息进数据库
		else {
			console.log(user.insertData(params));
			conn.query(user.insertData(params), function (error, r) {
				// 再次查询有没有
				conn.query(user.queryUserTel(params), function (error, rr) {
					if (rr.length > 0) {
						res.send({
							code: 200,
							data: {
								code: 200,
								success: true,
								data: rr[0],
								msg: '注册成功'
							}
						})
					} else {
						res.send({
							data: {
								code: 205,
								fail: true,
								msg: '注册成功',
								data: []
							}
						})
					}
				})
			})
		}
	})
})

//添加购物车数据
router.post('/api/addToCart', function (req, res, next) {
	//后端接收前端的参数
	let goodsId = req.body.id;
	//token
	let token = req.headers.token; 
	let tokenObj = jwt.decode(token);
	console.log(tokenObj);

	console.log(getTimeToken(tokenObj.iat))

	// if(getTimeToken(tokenObj.iat)){
	// 	res.send({
	// 		code:1000,
	// 		msg:'token过期，请重新登录' ,
	// 		success:'failed',
	// 		data:{
	// 			code:1000,
	// 		}
	// 	})
	// }else{
		//查询用户
		conn.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
			//用户id
			let uId = results[0].id;
			//查询商品
			conn.query(`select * from goods_list where id=${goodsId}`, function (err, result) {
				console.log(result);
				let goodsName = result[0].name;
				let goodsPrice = result[0].price;
				let goodsImgUrl = result[0].imgUrl;
				//查询当前用户在之前是否添加过本商品
				conn.query(`select * from goods_cart where uId=${uId} and goods_id=${goodsId}`, function (e, r) {
					//用户之前是添加过商品到购物车
					if (r.length > 0) {
						let num = r[0].goods_num;
						conn.query(`update goods_cart set goods_num = replace(goods_num,${num},${parseInt(num) + 1}) where id = ${r[0].id}`, function (e, datas) {
							res.send({
								data: {
									code: 200,
									success: true,
									msg: '添加成功'
								}
							})
						})
					} else {
						//没有
						conn.query(`insert into goods_cart (uId,goods_id,goods_name,goods_price,goods_num,goods_imgUrl) values ("${uId}","${goodsId}","${goodsName}","${goodsPrice}","1","${goodsImgUrl}")`, function () {
							res.send({
								data: {
									code: 200,
									success: true,
									msg: '添加成功'
								}
							})
						})
					}
				})
			})
		})
	// }

	
})

//查询购物车数据
router.get('/api/getCart', function (req, res, next) {
	//token
	let token = req.headers.token;
	let tokenObj = jwt.decode(token);
	console.log(tokenObj);

	// iat是创建时间	exp是帮你算好的过期时间
	let expire = getTimeToken(tokenObj.exp)
	console.log(expire);
	if(expire){
		res.send({
			code:1000
		})
	}else{
		//查询用户
		conn.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
			//用户id
			console.log(results);
			let uId = results[0].id;
			//查询购物车
			conn.query(`select * from goods_cart where uId = ${uId}`, function (err, result) {
				res.send({
					data: {
						code: 200,
						success: true,
						data: result
					}
				})
			})
		})
	}
})


// 删除商品 
router.post('/api/deleteGoods', function (req, res, next) {
	let idArray = req.body.idArray
	// console.log(idArray);
	idArray.forEach(id => {
		conn.query(`delete from goods_cart where id  = ${id}`, (result, error) => {
			console.log(result);
		})
	})
	res.send({
		data: {
			code: 200,
			success: true,
			msg: '删除成功'
		}
	})
})


// 修改商品数量
router.post('/api/updateGoods', (req, res, next) => {
	let { num, id } = req.body
	// console.log(num,id);
	conn.query(`update goods_cart set goods_num = ${num} where id = ${id}`, (result, err) => {
		// console.log(result);
		res.send({
			data: {
				code: 200,
				success: true,
				msg: '修改商品数量成功'
			}
		})
	})
})

// 新增地址
router.post('/api/addAddress', (req, res, next) => {
	//token
	let token = req.headers.token;
	let tokenObj = jwt.decode(token);

	let { name, tel, province, city, areaCode, county, addressDetail, isDefault } = req.body
	// console.log(name,tel,province,city,areaCode,county,addressDetail,isDefault);

	conn.query(`select * from user where tel = ${tokenObj.tel}`, (error, results) => {
		// console.log(results);
		let uId = results[0].id;

		//增加一条收货地址       
		if (!isDefault) {			// 非默认地址时----直接新增
			conn.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault,areaCode) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}","${areaCode}")`, function (err, result) {
				res.send({
					data: {
						code: 200,
						success: true,
						msg: '添加地址成功'
					}
				})
			})
		}
		// 默认地址时		查询当前用户的默认地址，取出修改其isDeault，再新增地址
		else {
			conn.query(`select * from address where uId = ${uId} and isDefault = 'true'`, function (err, rr) {
				// 用户之前有默认地址		---  先修改默认地址的isDefault，再新增
				// console.log(rr);
				if (rr.length > 0) {
					let addressId = rr[0].id;
					conn.query(`update address set isDefault = 'false' where id = ${addressId}`, function () {
						conn.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}")`, function (e, r) {
							res.send({
								data: {
									code: 200,
									success: true,
									msg: '添加地址成功'
								}
							})
						})
					})
				}
				// 之前没有默认地址     ---  直接新增
				else {
					conn.query(`insert into address (uId,name,tel,province,city,county,addressDetail,isDefault,areaCode) values (${uId},"${name}","${tel}","${province}","${city}","${county}","${addressDetail}","${isDefault}","${areaCode}")`, function (err, result) {
						res.send({
							data: {
								code: 200,
								success: true,
								msg: '添加地址成功'
							}
						})
					})
				}

			})

		}
	})
})

// 获取地址
router.get('/api/getAddress', function (req, res, next) {
	//token
	let token = req.headers.token;
	let tokenObj = jwt.decode(token);

	let expire = getTimeToken(tokenObj.exp)
	console.log(expire);
	if(expire){
		res.send({
			code:1000
		})
	}else{
		//查询用户
		conn.query(`select * from user where tel = ${tokenObj.tel}`, function (error, results) {
			//用户id 
			// console.log(results);
			let uId = results[0].id;
			//查询 地址
			conn.query(`select * from address where uId = ${uId}`, function (err, result) {
				res.send({
					data: {
						code: 200,
						success: true,
						data: result,
						msg: '获取地址列表成功'
					}
				})
			})
		})
	}

})

// 修改
router.post('/api/updateAddress', function (req, res, next) {
	let token = req.headers.token;
	let tokenObj = jwt.decode(token);

	let { id, name, tel, province, city, areaCode, county, addressDetail, isDefault } = req.body
	console.log(isDefault);
	console.log(typeof(isDefault));

	conn.query(`select * from address where id = ${id}`, function (error, results) {
		// console.log(results);

		// 如果修改 为默认，判断有没有其他默认的 isDefault true
		if (isDefault) {
			conn.query(`select * from address where isDefault = 'true'`, function (err, result) {
				console.log(result);
				if (result.length > 0) {
					// 有
					let b = result[0].id
					conn.query(`update address set isDefault = false  where id = ${b}`, () => {
						let updateSql = `update address set name = ? , tel = ? , province = ? , city = ? ,county = ? , addressDetail = ? , isDefault = '${isDefault}' , areaCode = ? where id = ${id}`;
						conn.query(updateSql, [name, tel, province, city, county, addressDetail, areaCode], function (errors, r) {
							res.send({
								data: {
									code: 200,
									success: true,
									msg: '修改成功'
								}
							})
						})
					})
				}
				// 无
				else {
					let updateSql = `update address set name = ? , tel = ? , province = ? , city = ? ,county = ? , addressDetail = ? , isDefault = '${isDefault}' , areaCode = ? where id = ${id}`;
					conn.query(updateSql, [name, tel, province, city, county, addressDetail, areaCode], function (errors, datas) {
						res.send({
							data: {
								code: 200,
								success: true,
								msg: '修改成功'
							}
						})
					})
				}
			})
		}
		// 如果不修改为 默认  就直接修改
		else {
			let updateSql = `update address set name = ? , tel = ? , province = ? , city = ? ,county = ? , addressDetail = ? , isDefault = '${isDefault}' , areaCode = ? where id = ${id}`;
			conn.query(updateSql, [name, tel, province, city, county, addressDetail, areaCode], function (errors, rrr) {
				res.send({
					data: {
						code: 200,
						success: true,
						msg: '修改成功'
					}
				})
			})
		}


	})

})

//删除收货地址
router.post('/api/deleteAddress',function(req,res,next){
    let id = req.body.id;
    conn.query(`delete from address where id = ${id}`,function(error,results){
		// console.log(results);
        res.send({
            data:{
                code:200,
                success:true,
                msg:'删除成功'
            }
        })
    })
})

//生成一个订单
router.post('/api/addOrder',function(req,res,next){
    //token
    let token = req.headers.token;
    let tokenObj = jwt.decode(token);
    //前端给后端的数据
    let goodsArr = req.body.list;
	console.log(goodsArr);
    //生成订单号order_id，规则：时间戳 + 6为随机数
    function setTimeDateFmt( s ){
        return s < 10 ? '0' + s : s
    }
    function randomNumber(){
        const now = new Date();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        month = setTimeDateFmt(month);
        day = setTimeDateFmt(day);
        hour = setTimeDateFmt(hour);
        minutes = setTimeDateFmt(minutes);
        seconds = setTimeDateFmt(seconds);
        let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math.round(Math.random() * 1000000 )).toString();
        return orderCode;
    }
    /*
    未支付：1
    待支付：2
    支付成功：3
    支付失败：4 | 0
    */
    //商品列表名称
    let goodsName = [];
    //订单商品总金额
    let goodsPrice = 0;
    //订单商品总数量
    let goodsNum = 0;

	// let goods_imgUrl = []

	let orderID = randomNumber()
    
    goodsArr.forEach(v=>{
        goodsName.push( v.goods_name );
        goodsPrice += v.goods_price * v.goods_num;
        goodsNum += parseInt(v.goods_num);
		// goods_imgUrl.push( v.goods_imgUrl );
    })

	// console.log(goods_imgUrl);

    //查询当前用户
    conn.query(`select * from user where tel = ${tokenObj.tel}`,function(error,results){
        //用户id
        let uId = results[0].id;
        conn.query(`insert into store_order (order_id,goods_name,goods_price,goods_num,order_status,uId) values ('${ orderID }','${goodsName}','${goodsPrice}','${goodsNum}','1',${uId})`,function(){
			conn.query(`select * from store_order where uId = ${uId} and order_id = ${orderID}`,function(err,result){
                // console.log(result);
				res.send({
                     data:{
                         success:true,
                         code:200,
                         data:result,
						 msg:'提交订单成功'
                     }
                 })
             })
        })
    })
})

// 获取所有订单
router.get('/api/getAllOrders',(req,res,next)=>{
	let token = req.headers.token
	let tokenObj = jwt.decode(token)
	console.log(getTimeToken(tokenObj.exp));
	if(getTimeToken(tokenObj.exp)){
		res.send({
			code:1000
		})
	}
	else{
		// 首先查询手机号的uId
		conn.query(`select * from user where tel = ${tokenObj.tel}`,(error,result)=>{
			console.log(result);
			let uId = result[0].id			
			conn.query(`delete from store_order where order_status = 1`,()=>{
				// 获取到uId，才能查询订单表中所有该用户的订单
				conn.query(`select * from store_order where uId = ${uId}`,(e,r)=>{
					console.log(r);
						res.send({
							data:{
								code:200,
								success:'true',
								msg:'获取所有订单成功',
								data:r
							}
						})
				})				
			})
		})
	}
})

//查询订单
router.post('/api/getOrder',function(req,res,next){
    //接收前端给后端的订单号
    let orderId = req.body.orderId;
    conn.query(`select * from store_order where order_id='${orderId}'`,function(err,result){
		console.log(result);
         res.send({
            data:{
                 success:true,
                 code:200,
                 data:result,
				 msg:'查询订单成功'
            }
         })
    })
})

// 修改订单状态
router.post('/api/submitOrder',function(req,res,next){
	// console.log(req.body);
	let orderId = req.body.orderId
	let shopArr = req.body.shopArr

	let token = req.headers.token
	let tokenObj = jwt.decode(token)
	// console.log(tel);
	conn.query(`select * from user where tel = ${tokenObj.tel}`,function(error,result){
		// console.log(result);
		let UID = result[0].id
		if(result.length>0){
			conn.query(`select * from store_order where order_id =${orderId} and uId = ${UID}`,function(e,r){
				// console.log(r);
				let OID = r[0].id
				conn.query(`update store_order set order_status = 2 where id = ${OID}`,function(ee,rr){
					shopArr.forEach(v=>{
						conn.query(`delete from goods_cart where id = ${v}`,()=>{
							
						})
					})
					res.send({
						data:{
							code:200,
							success:true,
							msg:'修改状态成功',
							data:{orderId}
						}
					})
				})
			})
		}
	})
}) 

// 修改为支付成功/失败
router.post('/api/payment',function(req,res,next){
    //订单号
    let status = req.body.status;
	let id = req.body.id
	console.log(id,status);
	conn.query(`select * from store_order where order_id = ${id}`,(error,result)=>{
		console.log(result);
		conn.query(`update store_order set order_status = ${status} where order_id = ${id}`,(e,r)=>{
			console.log(r);
			res.send({
				data:{
					code:200,
					msg:'修改成功',
					success:true,
					status:status,
					data:{id}
				}
			})
		})		
	})
})

// 查询状态
router.post('/api/getPaymentStatus',function(req,res,next){
	let id = req.body.id
	console.log(id);
	conn.query(`select * from store_order where order_id = ${id}`,(error,result)=>{
		console.log(result);
		res.send({
			data:{
				code:200,
				msg:'查询订单状态成功',
				success:true,
				data:result[0]
			}
		})
	})
})

module.exports = router;
