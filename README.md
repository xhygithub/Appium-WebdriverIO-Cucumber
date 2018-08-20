## 环境准备
1. 安装 [node](https://nodejs.org/en/)
2. 克隆代码
    ```bash
    git clone .......
    ```
3. 安装依赖
    ```bash 
    npm install
    ```
4. 检查环境依赖
    ```bash
    npm run check-dependency
    ```
5. 安装 [Carthage](https://github.com/Carthage/Carthage) （非必需，需要iOS模拟器测试时必须装）
    ```bash
    brew install carthage
    ``` 
6. 安装最新版 XCode（非必需，需要iOS模拟器测试时必须装）
7. 下载 [Android SDK](https://developer.android.com/studio/index.html)（非必需，需要Android 模拟器测试时必须装），将`$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools`加入 PATH (`$ANDROID_HOME` 为 SDK 文件夹)

## 执行测试脚本
1. 启动 appium server
    ```bash
    npm run start-server
    ```
2. 运行测试
    ```bash
    npm run test
    ```
