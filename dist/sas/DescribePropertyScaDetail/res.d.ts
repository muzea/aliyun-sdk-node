export interface DescribePropertyScaDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F9146867-16C8-4AAB-BB4FB8C2A4`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的资产指纹信息的数量。默认值为**10**，表示每页显示10条资产指纹信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的资产指纹数据的总数量。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 资产指纹的列表详情。
     */
    Propertys: {
        /**
         * 中间件、数据库或Web服务类型。
         * @example `library`
         */
        Type: string;
        /**
         * 中间件、数据库或Web服务类型的名称。取值：
         * <props="china">
         * - 系统服务
         * - 软件库
         * - 容器组件
         * - 数据库
         * - Web容器
         * - Jar包
         * - Web框架
         * </props>
         * <props="intl">
         * - System Service
         * - Software Library
         * - Docker Component
         * - Database
         * - Web Container
         * - Jar
         * - Web Framework
         * </props>
         * @example `System Service`
         */
        BizTypeDispaly: string;
        /**
         * 进程启动的时间戳，单位为毫秒。
         * @example `1596539788`
         */
        ProcessStarted: number;
        /**
         * 中间件、数据库或Web服务所在服务器的公网IP。
         * @example `47.42.XX.XX`
         */
        InternetIp: string;
        /**
         * 配置文件路径。
         * @example `/etc/my.cnf`
         */
        ConfigPath: string;
        /**
         * 进程ID。
         * @example `756`
         */
        Pid: string;
        /**
         * 中间件、数据库或Web服务端口。
         * @example `68`
         */
        Port: string;
        /**
         * 进程命令行。
         * @example `/sbin/dhclient -H iz2zeflhhbtk8gtxzt087az -1 -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid eth0`
         */
        Cmdline: string;
        /**
         * 中间件、数据库或Web服务的类型。取值：
         * - **system_service**：系统服务
         * - **software_library**：软件库
         * - **docker_component**：容器组件
         * - **database**：数据库
         * - **web_container**：Web容器
         * - **jar**：Jar包
         * - **web_framework**：Web框架
         * @example `software_library`
         */
        BizType: string;
        /**
         * 进程监听IP。
         * @example `0.0.XX.XX`
         */
        ListenIp: string;
        /**
         * 中间件、数据库或Web服务的版本。
         * @example `1.0.2k`
         */
        Version: string;
        /**
         * 中间件、数据库或Web服务所在服务器的名称。
         * @example `Test01`
         */
        InstanceName: string;
        /**
         * 进程监听状态。取值：
         * - **NONE**：未监听
         * - **LISTEN**：监听中
         * @example `NONE`
         */
        ListenStatus: string;
        /**
         * 中间件、数据库或Web服务的名称。
         * @example `openssl`
         */
        Name: string;
        /**
         * 中间件、数据库或Web服务所在服务器的公网IP。
         * @example `47.42.XX.XX`
         */
        Ip: string;
        /**
         * 运行进程的用户名。
         * @example `root`
         */
        ProcessUser: string;
        /**
         * 中间件、数据库或Web服务所在服务器实例ID。
         * @example `i-2zeclqj7ti****`
         */
        InstanceId: string;
        /**
         * Web目录。
         * @example `/usr/share/nginx/html`
         */
        WebPath: string;
        /**
         * 父进程ID。
         * @example `1`
         */
        Ppid: string;
        /**
         * 中间件、数据库或Web服务所在服务器的私网IP。
         * @example `192.210.XX.XX`
         */
        IntranetIp: string;
        /**
         * 中间件、数据库或Web服务所在服务器的UUID。
         * @example `uuid-02ebabe7-1c19-a****`
         */
        Uuid: string;
        /**
         * 进程监听协议。取值：
         * - **UDP**
         * - **TCP**
         * @example `UDP`
         */
        ListenProtocol: string;
        /**
         * 镜像名称。
         * @example `registry-vpc.cn-beijing.aliyuncs.com/acs/aliyun-ingress-controller****`
         */
        ImageName: string;
        /**
         * 中间件、数据库或Web服务的路径。
         * @example `/usr/lib64/libssl.so.1.0.2k`
         */
        Path: string;
        /**
         * 容器名称。
         * @example `5-rce_web_1`
         */
        ContainerName: string;
        /**
         * 中间件、数据库或Web服务的版本验证信息。
         * @example `/usr/lib64/libssl.so.1.0.2k`
         */
        Proof: string;
        /**
         * 最新扫描的时间戳，即云安全中心最近一次采集中间件、数据库或Web服务信息的时间戳，单位为毫秒。
         * @example `1597987834000`
         */
        CreateTimestamp: number;
        /**
         * 运行时环境版本。
         * >  如Java进程运行环境的JDK版本。
         * @example `1.8.0_144`
         */
        RuntimeEnvVersion: string;
        /**
         * 容器组名称。
         * @example `hello-pod`
         */
        PodName: string;
    }[];
}
