const User = {
	//查询用户手机号
	queryUserTel(option) {
		return 'select * from user where tel = ' + option.userTel + '';
	},

	queryUserPwd(option) {
		return 'select * from user where (tel = ' + option.userTel + ') and pwd = ' + option.userPwd + '';
	},

	insertData(option) {		
		let jwt = require('jsonwebtoken');
		// 用户信息
		let payload = {tel:option.userTel}
		// 密钥
		let secret = 'liangchaoyan'
		// 生成token
		let token = jwt.sign(payload,secret,{
			expiresIn:'2 days'
		})
		// console.log(token);
		
		let imgUrl="/images/user.jpeg"
		let nickName = '用户'+option.userTel
		return `insert into user(tel,pwd,imgUrl,nickName,token) values('${option.userTel}','${option.userPwd}','${imgUrl}','${nickName}','${token}')`;
	}
}
exports = module.exports = User;