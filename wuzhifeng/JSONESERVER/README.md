// 获取所有用户信息
http://localhost:3000/users/

// 获取id为1的用户信息
http://localhost:3000/users/1

// 获取公司的所有信息
http://localhost:3000/companies

// 获取id为1的公司信息
http://localhost:3000/companies/1

// 获取所有公司id为3的用户
http://localhost:3000/companies/3/users

// 根据公司名字获取信息
http://localhost:3000/companies?name=channelfix

// 根据多个名字获取公司信息
http://localhost:3000/companies?name=channelfix&name=apple

// 获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

// 升序排序 asc升序 desc降序
http://localhost:3000/companies?_sort=name&_order=asc

// 获取年龄30及30以上的用户
http://localhost:3000/users?age_gte=30

// 获取年龄在30和40之间的用户
http://localhost:3000/users?age_gte=30&age_lte=40

// 获取用户信息
http://localhost:3000/users?q=suxiaochun
