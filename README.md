# 拼音域名提取
# 用法
## 配置
### 1、下载文件
```javascript
	git clone https://github.com/Aidot/domain-pinyin.git && cd domain-pinyin
	npm install
```
### 2、将域名列表文件放到如test.csv放到input目录
### 3、修改run.js中的配置文件（如：filename: 'test'）
```javascript
	var config = {
		npin: 3, //拼音组合数，如2拼、3拼
		filename: 'test', //input目录下的csv/txt文件名
		date: new Date().toISOString().slice(0,10)
	};
```
### 4、运行run.js

```javascript
	node run.js
```
### 5、到output目录中查看生成的列表文件

# Contributors
	* Natural Node: https://github.com/NaturalNode/natural
	* Node Jieba  : https://github.com/yanyiwu/nodejieba
