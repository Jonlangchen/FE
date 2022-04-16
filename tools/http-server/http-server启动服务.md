http-server 是一个简单的零配置的命令行 http服务器，它足够强大便于生产和使用，用于本地测试和开发。
			
    http-server 是一个简单的零配置的命令行 http服务器，它足够强大便于生产和使用，用于本地测试和开发。
    
    http-server命令可在任意地方启动服务。
    
    安装:
        npm install http-server -g 
        或
        yarn global add http-server
    
    启用:
    
    找到你的文件夹,在当前文件夹下打开命令行,输入http-server,默认启动8080端口,
    
        http://127.0.0.1:8080
        http://192.168.1.204:8080
        http://169.254.77.217:8080
    
    本机访问都可以,手机或其他设备连接,请使用192ip,必须在同一局域网下;
    
    若要禁用缓存，请使用如下命令运行
    http-server -c-1
    
    
    http-server启动可选参数：
    
    使可选配置：
    
    -p 要使用的端口（默认为8080）
    -a 要使用的地址（默认为0.0.0.0）
    -d 显示目录列表（默认为“True”）   true / false
    -i 显示autoIndex（默认为“True”）
    -g或--gzip启用时（默认为“False”），它将用于./public/some-file.js.gz代替./public/some-file.jsgzip压缩版本的文件，并且该请求接受gzip编码。
    -e或--ext默认文件扩展名（如果没有提供）（默认为'html'）
    -o 启动服务器后打开浏览器窗口
    -c设置缓存控制max-age头的缓存时间（以秒为单位），例如-c10  10秒（默认为'3600'）。要禁用缓存，请使用-c-1。