## VSCode 配置 ESLint

我们在使用`vue-cli`创建项目的时候，会去选择是否使用ESLint。尴尬的是，一旦有写得不规范的地方，Vue编译就会报错，页面上展示的是不规范的信息。但是，我们在开发阶段，难免会写一些不规范的测试代码，所以在这个时候编译报错是很烦的事情。

我们可以使用VSCode里面的ESLint插件，这样，我们就会在VSCode底部的“问题控制台”看到报错信息，但是不影响项目的运行。

#### 配置步骤

1、先使用npm/yarn安装一些东西

```shell
npm install -g eslint # 全局安装eslint
npm init -y  # 调过设置，生成package.json
eslint --init # 跟着提示一步步走，中间会让你安装对应的模块
### 下面是一些配置
# 1. How do you like to use ESLint?  To check syntax, find problems, and enforce code style
# 2. What type of modules dose your project use? 根据项目需要去选择
# Which framework does your project use? 根据项目需要去选择，这个选择体现在后面安装模块上
# Where does your code run? 一般选择browser
# How would you like to define a style for your project? Use a popular style guide.
# Which style guide do you want to follow? 推荐使用Airbnb
# What format do you want your config file to be in? Javascript
### 上面选择完成之后，就会去安装相关的模块
```

2、安装VSCode的ESLint插件

这个在VSCode左边搜索一下就能找到了

3、配置文件

先激活上面下载的ESLint插件

点击VSCode的设置，然后在设置里面搜索ESLint，就能看到很多关于ESLint的设置。

这里可以选择“用户设置”和“工作区设置”，“用户设置”可以理解为VSCode打开的项目都会使用这个设置，“工作区设置”，这里面的设置只会影响单个项目。在“工作区设置”里面进行个性化设置的时候，会在项目目录下生成一个`.vscode文件夹`。

在工作区设置里面，点击`在settings.json中编辑`，会进入`.vscode/settings.json`文件。

在这个文件里面设置ESLint配置文件目录

```json
{
  "eslint.options": {
      "configFile": "./.eslintrc.js"
  }
}
```

经过上面的步骤，我们就可以使用ESLint来优化代码了。

4、定义规则

我们写一段最简单的代码：

```js
var num = 1;
console.log(num);
```

此时编辑器会有一些报错信息或者警告：

```
Unexpected var, use let or const instead.
Unexpected console statement.
```

根据提示，我们需要把var改成const，因为num没有进行过第二次赋值，

ESLint的默认规则，当使用console的时候，会报警告，但是我们在开发阶段需要console，此时我们需要把这个规则关掉，我们需要去编辑`.eslintrc.js`文件的rules。

```js
'no-console': 0
```

前面的是规则名，后面的值是数字，0表示不启用这个规则，1表示warn，2表示error。