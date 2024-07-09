export interface CreateContainerGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例所属的可用区。如果取值为空，则表示由系统选择。
     * 默认值为空。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 实例所属的安全组ID。同一个安全组内的实例之间可以互相访问。
     * 如果没有指定安全组，系统将自动使用您选择的地域下的默认安全组，您需要确保该安全组的入方向规则中包含容器需要暴露的协议和端口。如果您在该地域下没有默认安全组，系统将自动创建一个默认安全组，并将您声明的容器协议和端口添加到该安全组的入方向规则中。
     * @example `sg-uf66jeqopgqa9hdn****`
     */
    "SecurityGroupId"?: string;
    /**
     * 实例所属的交换机ID。支持指定多个交换机ID（单次最多10个），各交换机ID之间可以用半角逗号（,）进行分割，例如`vsw-***,vsw-***`。
     * 如果没有指定交换机，系统将自动使用您选择的地域下的默认VPC下的默认交换机，如果您在该地域下没有默认VPC和默认交换机，系统将自动创建一个默认VPC和一个默认交换机。
     * > 交换机网段内的IP个数决定了该交换机下最大可以创建的ECI实例数量，请务必提前规划好网段。
     * @example `vsw-bp1xpiowfm5vo8o3c****,vsw-bp1rkyjgr1xwoho6k****`
     */
    "VSwitchId"?: string;
    /**
     * ECI实例名称，即容器组名称。格式要求如下：
     * - 长度为2~128个字符。
     * - 支持英文小写字母、数字或者短划线（-），不能以短划线开头或者结尾。
     * @example `nginx-test`
     */
    "ContainerGroupName": string;
    /**
     * 实例重启策略。取值范围：
     * - Always：总是重启
     * - Never：从不重启
     * - OnFailure：失败时重启
     * 默认值：Always。
     * @example `Always`
     */
    "RestartPolicy"?: string;
    /**
     * 弹性公网IP ID。
     * @example `eip-uf66jeqopgqa9hdn****`
     */
    "EipInstanceId"?: string;
    /**
     * 实例级别vCPU大小。单位：核。
     * @example `1.0`
     */
    "Cpu"?: number;
    /**
     * 实例级别内存大小。单位：GiB。
     * @example `2.0`
     */
    "Memory"?: number;
    /**
     * 资源组ID。
     * @example `rg-uf66jeqopgqa9hdn****`
     */
    "ResourceGroupId"?: string;
    /**
     * DNS策略。取值范围：
     * - None：使用DnsConfig字段设置的DNS。
     * - Default：继承运行环境的DNS设置。
     * @example `Default`
     */
    "DnsPolicy"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参阅[如何保证幂等性](~~25693~~)。
     * @example `123e4567-xxxx-12d3-xxxx-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 指定的ECS实例规格，支持多规格。更多信息，请参见[指定ECS规格创建实例](~~114664~~)。
     * @example `ecs.c5.xlarge`
     */
    "InstanceType"?: string;
    /**
     * 镜像缓存ID。更多信息，请参见[使用镜像缓存加速创建实例](~~141281~~)。
     * @example `imc-2zebxkiifuyzzlhl****`
     */
    "ImageSnapshotId"?: string;
    /**
     * 实例RAM角色名称。ECI与ECS共用实例RAM角色，更多信息，请参见[通过API使用实例RAM角色](~~61178~~)。
     * @example `RamTestRole`
     */
    "RamRoleName"?: string;
    /**
     * 程序的缓冲时间，用于处理关闭之前的操作。单位为秒。
     * @example `60`
     */
    "TerminationGracePeriodSeconds"?: number;
    /**
     * 是否自动匹配镜像缓存。默认为false。
     * @example `false`
     */
    "AutoMatchImageCache"?: boolean;
    /**
     * IPv6地址数。固定为1，即一个ECI实例支持绑定一个IPv6地址。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * ECI实例的有效期限，超出该时间后，实例会被强制退出。单位为秒。
     * @example `1000`
     */
    "ActiveDeadlineSeconds"?: number;
    /**
     * 实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认值：NoSpot。
     * @example `SpotWithPriceLimit`
     */
    "SpotStrategy"?: string;
    /**
     * 设置抢占式实例的每小时最高价格，最多精确到小数点后3位。
     * 当SpotStrategy取值为SpotWithPriceLimit时，必须设置SpotPriceLimit。
     * @example `0.025`
     */
    "SpotPriceLimit"?: number;
    /**
     * 配置了多可用区（通过VSwitchId参数指定多个交换机）时，ECI实例的调度策略。取值范围：
     * - VSwitchOrdered：按顺序调度
     * - VSwitchRandom：随机调度
     * 更多信息，请参见[多可用区创建实例](~~157290~~)。
     * @example `VSwitchOrdered`
     */
    "ScheduleStrategy"?: string;
    /**
     * 自定义设置coredump生成的core文件的保存目录。更多信息，请参见[设置core文件保存到数据卷](~~167801~~)。
     * > 配置的路径不能以`|`开头，即不能通过Core dump来配置可执行程序。
     * @example `/xx/xx/core`
     */
    "CorePattern"?: string;
    /**
     * 是否使用共享命名空间。默认为false。
     * @example `false`
     */
    "ShareProcessNamespace"?: boolean;
    /**
     * 是否自动创建一个EIP，并绑定到ECI实例上。
     * @example `true`
     */
    "AutoCreateEip"?: boolean;
    /**
     * EIP的带宽，默认为5 Mbps。
     * 当AutoCreateEip取值为true时，可以设置该参数。
     * @example `5`
     */
    "EipBandwidth"?: number;
    /**
     * 设置EIP的线路类型。取值范围：
     * - BGP（默认值）：BGP（多线）线路
     * - BGP_PRO：BGP（多线）精品线路
     * @example `BGP`
     */
    "EipISP"?: string;
    /**
     * 绑定已有的共享带宽包。
     * @example `cbwp-2zeukbj916scmj51m****`
     */
    "EipCommonBandwidthPackage"?: string;
    /**
     * 主机名称。
     * @example `test`
     */
    "HostName"?: string;
    /**
     * 入方向带宽限制。单位：Bps。
     * @example `1024000`
     */
    "IngressBandwidth"?: number;
    /**
     * 出方向带宽限制。单位：Bps。
     * @example `1024000`
     */
    "EgressBandwidth"?: number;
    /**
     * CPU物理核心数。仅部分规格支持自定义设置。
     * @example `2`
     */
    "CpuOptionsCore"?: number;
    /**
     * 每核线程数。仅部分规格支持自定义设置。配置为1时表示关闭超线程。
     * @example `2`
     */
    "CpuOptionsThreadsPerCore"?: number;
    /**
     * 该参数暂不支持设置。
     * @example `1`
     */
    "CpuOptionsNuma"?: string;
    /**
     * 增加的临时存储空间大小。单位：GiB。
     * 更多信息，请参见[自定义临时存储空间大小](~~204066~~)。
     * @example `20`
     */
    "EphemeralStorage"?: number;
    /**
     * 标签列表。最多可以绑定20个。更多信息，请参见[使用标签管理实例](~~146608~~)。
     */
    "Tag"?: {
        /**
         * 标签键。如果传入该值，则不允许为空字符串，且不允许重复。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `version`
         */
        Key: string;
        /**
         * 标签值。如果传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `3`
         */
        Value: string;
    }[];
    /**
     * 镜像仓库信息。
     */
    "ImageRegistryCredential"?: {
        /**
         * 镜像仓库密码。
         * @example `yourpassword`
         */
        Password: string;
        /**
         * 镜像仓库注册地址。
         * @example `registry-vpc.cn-shanghai.aliyuncs.com`
         */
        Server: string;
        /**
         * 镜像仓库用户名。
         * @example `yourusername`
         */
        UserName: string;
    }[];
    /**
     * 容器信息。
     */
    "Container": {
        /**
         * 检查超时的时间，默认为1秒，最小为1秒。
         * @example `1`
         */
        ReadinessProbe.TimeoutSeconds: number;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前必须为1。
         * @example `1`
         */
        ReadinessProbe.SuccessThreshold: number;
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET\_ADMIN和NET\_RAW。
         * > NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Add: string[];
        /**
         * 使用TCP Socket方式进行健康检查时，TCP Socket检测的端口。
         * > 设置ReadinessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `8000`
         */
        ReadinessProbe.TcpSocket.Port: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * > 设置ReadinessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `HTTP`
         */
        ReadinessProbe.HttpGet.Scheme: string;
        /**
         * 检查执行的周期，默认为10秒，最小为1秒。
         * @example `5`
         */
        LivenessProbe.PeriodSeconds: number;
        /**
         * 容器运行的根文件系统是否为只读，目前仅支持配置为true。
         * @example `true`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 容器的环境变量值。
         */
        EnvironmentVar: {
            /**
             * 环境变量名。长度为1~128位。格式要求：`[0-9a-zA-Z]`，以及下划线，不能以数字开头。
             * @example `PATH`
             */
            Key: string;
            /**
             * 环境变量值。长度为0~256位。
             * @example `/usr/local/bin`
             */
            Value: string;
            /**
             * 环境变量值引用。目前只支持配置为status.podIP。
             * @example `status.podIP`
             */
            FieldRef.FieldPath: string;
        }[];
        /**
         * 使用TCP Socket方式进行健康检查时，TCP Socket检测的端口。
         * > 设置LivenessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `8080`
         */
        LivenessProbe.TcpSocket.Port: number;
        /**
         * 是否开启交互。默认为false。
         * 当Command为/bin/bash命令时，需要设置为true。
         * @example `false`
         */
        Tty: boolean;
        /**
         * 容器工作目录。
         * @example `/usr/local/`
         */
        WorkingDir: string;
        /**
         * 容器启动命令对应的参数。最多10个。
         * @example `100`
         */
        Arg: string[];
        /**
         * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。默认为false。
         * @example `false`
         */
        Stdin: boolean;
        /**
         * 检查开始执行的时间，以容器启动完成为起点计算。
         * @example `5`
         */
        LivenessProbe.InitialDelaySeconds: number;
        /**
         * 数据卷信息。
         */
        VolumeMount: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。取值范围：
             * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
             * - HostToContainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
             * - Bidirectional：和HostToContainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * 默认值：None
             * @example `None`
             */
            MountPropagation: string;
            /**
             * 容器挂载数据卷的目录。
             * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
             * @example `/pod/data`
             */
            MountPath: string;
            /**
             * 数据卷是否只读。默认为false。
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 数据卷子路径。
             * @example `data2/`
             */
            SubPath: string;
            /**
             * 数据卷名称。同Volume中的Name。
             * @example `default-volume1`
             */
            Name: string;
        }[];
        /**
         * 镜像拉取策略。取值范围：
         * - Always：总是拉取。每次都拉取镜像。
         * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
         * - Never：从不拉取。使用本地镜像，不拉取镜像。
         * @example `Always`
         */
        ImagePullPolicy: string;
        /**
         * 当标准输入为true时，标准输入流将在多个附加会话中是否保持开启状态。
         * 如果StdinOnce设为true，标准输入在容器开启时被打开，在首个客户端附加到标准输入之前都为空，然后会一直保持开启状态，接收数据，直到客户端连接断开，此时标准输入被关闭，在容器重启前一直保持关闭状态。
         * @example `false`
         */
        StdinOnce: boolean;
        /**
         * 使用TCPSocket方式设置preStop回调函数时，TCP Socket检测的端口。
         * @example `90`
         */
        LifecyclePreStopHandlerTcpSocketPort: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * @example `HTTPS`
         */
        LifecyclePostStartHandlerHttpGetScheme: string;
        /**
         * 检查执行的周期，默认为10秒，最小为1秒。
         * @example `3`
         */
        ReadinessProbe.PeriodSeconds: number;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前必须为1。
         * @example `1`
         */
        LivenessProbe.SuccessThreshold: number;
        /**
         * 容器启动命令。最多20个。每个命令最多包含256个字符。
         * @example `sleep`
         */
        Command: string[];
        /**
         * 使用HTTP请求方式设置postStart回调函数时，接收HTTP Get请求的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePostStartHandlerHttpGetHost: string;
        /**
         * 消息通知策略，默认为空，目前仅支持mns队列消息通知。
         * @example `FallbackToLogsOnError`
         */
        TerminationMessagePolicy: string;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的路径。
         * > 设置ReadinessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `/healthz`
         */
        ReadinessProbe.HttpGet.Path: string;
        /**
         * 使用命令行方式进行健康检查时，在容器内执行的命令。
         * > 设置LivenessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         */
        LivenessProbe.Exec.Command: string[];
        /**
         * 使用TCPSocket方式设置postStart回调函数时，TCP Socket检测的端口。
         * @example `80`
         */
        LifecyclePostStartHandlerTcpSocketPort: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePostStartHandlerHttpGetPath: string;
        /**
         * 使用命令行方式设置postStart回调函数时，在容器内执行的命令。
         * @example `["/bin/sh", "-c", "echo Hello from the postStart handler > /usr/share/message"]`
         */
        LifecyclePostStartHandlerExec: string[];
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePreStopHandlerHttpGetPath: string;
        /**
         * 端口号。
         */
        Port: {
            /**
             * 协议类型。取值范围：
             * - TCP
             * - UDP
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 端口号。取值范围：1~65535。
             * @example `80`
             */
            Port: number;
        }[];
        /**
         * 容器的报错地址。
         * @example `/tmp/termination-log`
         */
        TerminationMessagePath: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * @example `HTTP`
         */
        LifecyclePreStopHandlerHttpGetScheme: string;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * > 设置LivenessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `HTTP`
         */
        LivenessProbe.HttpGet.Scheme: string;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的端口号。
         * > 设置ReadinessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `8080`
         */
        ReadinessProbe.HttpGet.Port: number;
        /**
         * 使用TCP Socket方式设置postStart回调函数时，TCP Socket检测的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePostStartHandlerTcpSocketHost: string;
        /**
         * 指定容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * 检查开始执行的时间，以容器启动完成为起点计算。
         * @example `3`
         */
        ReadinessProbe.InitialDelaySeconds: number;
        /**
         * 使用命令行方式设置preStop回调函数时，在容器内执行的命令。
         * @example `["/bin/sh", "-c","echo Hello from the preStop handler > /usr/share/message"]`
         */
        LifecyclePreStopHandlerExec: string[];
        /**
         * 容器的内存大小。单位：GiB。
         * @example `0.5`
         */
        Memory: number;
        /**
         * 容器名称。
         * @example `nginx`
         */
        Name: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，接收HTTP Get请求的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePreStopHandlerHttpGetHost: string;
        /**
         * 使用TCP Socket方式设置preStop回调函数时，TCP Socket检测的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePreStopHandlerTcpSocketHost: string;
        /**
         * 容器镜像。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest`
         */
        Image: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的端口号。
         * @example `88`
         */
        LifecyclePreStopHandlerHttpGetPort: number;
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败），默认为3。
         * @example `3`
         */
        LivenessProbe.FailureThreshold: number;
        /**
         * 使用命令行方式进行健康检查时，在容器内执行的命令。
         * > 设置ReadinessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         */
        ReadinessProbe.Exec.Command: string[];
        /**
         * 生成的HTTP请求头参数。
         */
        LifecyclePreStopHandlerHttpGetHttpHeader: {
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求头中自定义设置的字段值。
             * @example `test-preStop`
             */
            Value: string;
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求头中自定义设置的字段名。
             * @example `Xiao-Custom-Header`
             */
            Name: string;
        }[];
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败），默认为3。
         * @example `3`
         */
        ReadinessProbe.FailureThreshold: number;
        /**
         * 容器的vCPU大小。单位：核。
         * @example `0.25`
         */
        Cpu: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的端口号。
         * > 设置LivenessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `8888`
         */
        LivenessProbe.HttpGet.Port: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的路径。
         * > 设置LivenessProbe相关参数时，HttpGet、Exec和TcpSocket这三种检查方式，只能选择其中一种。
         * @example `/healthz`
         */
        LivenessProbe.HttpGet.Path: string;
        /**
         * 检查超时的时间，默认为1秒，最小为1秒。
         * @example `1`
         */
        LivenessProbe.TimeoutSeconds: number;
        /**
         * 设置运行容器的用户ID。
         * @example `1000`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检查的端口号。
         * @example `5050`
         */
        LifecyclePostStartHandlerHttpGetPort: number;
        /**
         * 生成的HTTP请求头参数。
         */
        LifecyclePostStartHandlerHttpGetHttpHeader: {
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求头中自定义设置的字段值。
             * @example `test-postStart`
             */
            Value: string;
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求头中自定义设置的字段名。
             * @example `Xiao-Custom-Header`
             */
            Name: string;
        }[];
        /**
         * 查询ECI实例详情时，是否隐藏环境变量信息。取值范围：
         * - false（默认值）：查询ECI实例详情时，不隐藏环境变量信息。
         * - true：查询ECI实例详情时，不返回环境变量信息。在环境变量带有敏感信息时，配置为true可以提高安全性。
         * @example `false`
         */
        EnvironmentVarHide: boolean;
        /**
         * 设置运行容器的用户组。
         * @example `3000`
         */
        SecurityContextRunAsGroup: number;
        /**
         * 是否以非root模式运行容器。取值范围：
         * - true：非root模式
         * - false（默认值）：root模式
         * @example `true`
         */
        SecurityContextRunAsNonRoot: boolean;
        /**
         * 容器是否启用特权，即是否以特权模式运行容器。取值范围：
         * - true：启用特权
         * - false（默认值）：不启用特权
         * @example `true`
         */
        SecurityContextPrivileged: boolean;
    }[];
    /**
     * 数据卷信息。
     */
    "Volume"?: {
        /**
         * 数据卷类型。取值范围：
         * - EmptyDirVolume：EmptyDir类型的数据卷，表示空目录。
         * - NFSVolume：NFS类型的数据卷，表示网络文件系统。
         * - ConfigFileVolume：ConfigFile类型的数据卷，表示配置文件。
         * - FlexVolume：使用FlexVolume插件扩展存储类型，支持挂载云盘。
         * - HostPathVolume：HostPath类型的数据卷，表示主机节点的文件或目录。该类型仅对白名单用户开放使用。
         * - DiskVolume（不推荐）：云盘数据卷。建议使用FlexVolume挂载云盘。
         * @example `ConfigFileVolume`
         */
        Type: string;
        /**
         * DiskVolume的大小。单位为GiB。
         * @example `15`
         */
        DiskVolume.DiskSize: number;
        /**
         * NFS数据卷路径。
         * @example `/share`
         */
        NFSVolume.Path: string;
        /**
         * DiskVolume的系统类型。
         * @example `xfs`
         */
        DiskVolume.FsType: string;
        /**
         * 挂载的文件系统类型，默认取决于FlexVolume的script。
         * @example `ext4`
         */
        FlexVolume.FsType: string;
        /**
         * HostPath Volume的类型。取值范围：
         *  - Directory：目录。
         * - File：文件。
         * > HostPath Volume仅对白名单用户开放使用。
         * @example `Directory`
         */
        HostPathVolume.Type: string;
        /**
         * ConfigFileVolume默认的权限。
         * @example `0644`
         */
        ConfigFileVolume.DefaultMode: number;
        /**
         * NFS数据卷是否只读。默认为false。
         * @example `false`
         */
        NFSVolume.ReadOnly: boolean;
        /**
         * ConfigFile类型的数据卷信息。
         */
        ConfigFileVolume.ConfigFileToPath: {
            /**
             * 相对于挂载目录，配置文件所在的相对文件路径。
             * @example `test/config-test.cnf`
             */
            Path: string;
            /**
             * 配置文件的权限，如果没有设置，则采用ConfigFileVolume.DefaultMode的值。采用四位八进制数表示，例如0644表示权限为rw-r–r--，即用户权限为rw-，用户所在组权限为r--，其他用户权限为r--。
             * 权限说明如下：
             * - `---`：没有任何权限，八进制值为0。
             * - `--x`：只有执行权限，八进制值为1。
             * - ` -w-`：只有写入权限，八进制值为2。
             * - `-wx`：有写入和执行权限，八进制值为3。
             * - `r--`：只有读取权限，八进制值为4。
             * - `r-x`：有读取和执行权限，八进制值为5。
             * - `rw-`：有读取和写入权限，八进制值为6。
             * - `rwx`：具有读取、写入和执行权限，八进制值为7。
             * @example `0644`
             */
            Mode: number;
            /**
             * 配置文件内容，需要将内容进行Base64编码。
             * 配置文件不能大于32 KB。
             * @example `bGl1bWk=`
             */
            Content: string;
        }[];
        /**
         * HostPath Volume在主机上的目录路径。
         * @example `/pod/data`
         */
        HostPathVolume.Path: string;
        /**
         * FlexVolume对象选项列表。为KV形式，采用JSON传递。
         * 例如通过FlexVolume挂载云盘时，Options表示云盘的配置参数，可配置的参数如下：
         * - volumeId：已有云盘ID。
         * - volumeSize：云盘大小，单位为GiB。取值范围为20~32768。
         * - performanceLevel：云盘性能等级。更多信息，请参见[云盘性能等级](~~25382~~)。
         * - deleteWithInstance：是否随实例释放，默认为false。
         * - encrypted：是否加密云盘，默认为false。更多信息，请参见[加密概述](~~59643~~)。
         * - kmsKeyId：加密云盘时，云盘使用的KMS密钥ID。
         * @example `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`
         */
        FlexVolume.Options: string;
        /**
         * 使用FlexVolume插件挂载数据卷时的驱动类型。取值范围如下：
         * - alicloud/disk：挂载云盘。
         * - alicloud/nas：挂载NAS。
         * - alicloud/oss：挂载OSS。
         * @example `alicloud/disk`
         */
        FlexVolume.Driver: string;
        /**
         * NFS服务器地址。
         * @example `3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com`
         */
        NFSVolume.Server: string;
        /**
         * DiskVolume的ID。
         * @example `d-xx`
         */
        DiskVolume.DiskId: string;
        /**
         * 数据卷名称。
         * @example `default-volume1`
         */
        Name: string;
        /**
         * EmptyDirVolume的存储媒介，默认为空，使用node文件系统；支持 memory，表示使用内存。
         * @example `memory`
         */
        EmptyDirVolume.Medium: string;
        /**
         * EmptyDirVolume的大小。单位为GiB。
         * @example `2`
         */
        EmptyDirVolume.SizeLimit: string;
    }[];
    /**
     * Init容器列表。
     */
    "InitContainer"?: {
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET\_ADMIN和NET\_RAW。
         * > NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Add: string[];
        /**
         * 容器使用的镜像。
         * @example `nginx`
         */
        Image: string;
        /**
         * 挂载数据卷信息列表。
         */
        VolumeMount: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。取值范围：
             * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
             * - HostToContainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
             * - Bidirectional：和HostToContainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * 默认值：None
             * @example `None`
             */
            MountPropagation: string;
            /**
             * 挂载目录，容器的挂载目录下的内容被volume的内容直接覆盖，所以要慎用。
             * @example `/usr/share/`
             */
            MountPath: string;
            /**
             * 挂载路径是否只读。默认为false。
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 数据卷下的子目录，方便Pod将同一个Volume下不同目录挂载到容器不同目录。
             * @example `/usr/sub/`
             */
            SubPath: string;
            /**
             * 挂载数据卷的名称。
             * @example `test-empty`
             */
            Name: string;
        }[];
        /**
         * init容器端口号。
         */
        Port: {
            /**
             * 协议类型。取值范围：
             * - TCP
             * - UDP
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 端口号。取值范围：1~65535。
             * @example `8888`
             */
            Port: number;
        }[];
        /**
         * 容器运行的根文件系统是否为只读。目前仅支持配置为true。
         * @example `true`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 容器退出的消息来源。当容器退出时，从指定的终止消息文件中检索终止消息。
         * @example `/tmp/termination-log`
         */
        TerminationMessagePath: string;
        /**
         * 容器的环境变量信息列表。
         */
        EnvironmentVar: {
            /**
             * 环境变量名。长度为1~128位。格式要求：`[0-9a-zA-Z]`，以及下划线，不能以数字开头。
             * @example `Path`
             */
            Key: string;
            /**
             * 环境变量值。长度为0~256位。
             * @example `/usr/bin/`
             */
            Value: string;
            /**
             * 环境变量值引用。目前只支持配置为status.podIP。
             * @example `status.podIP`
             */
            FieldRef.FieldPath: string;
        }[];
        /**
         * 镜像拉取策略。取值范围：
         * - Always：总是拉取。每次都拉取镜像。
         * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
         * - Never：从不拉取。使用本地镜像，不拉取镜像。
         * @example `Always`
         */
        ImagePullPolicy: string;
        /**
         * 工作目录。
         * @example `/usr/local`
         */
        WorkingDir: string;
        /**
         * 容器的vCPU大小。单位：核。
         * @example `0.5`
         */
        Cpu: number;
        /**
         * 容器启动参数。
         * @example `10`
         */
        Arg: string[];
        /**
         * 容器启动指令。
         * @example `sleep`
         */
        Command: string[];
        /**
         * 指定容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * 设置运行容器的用户ID。
         * @example `587`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 容器的内存大小。单位：GiB。
         * @example `1.0`
         */
        Memory: number;
        /**
         * 挂载信息，默认为空。
         * @example `*****`
         */
        TerminationMessagePolicy: string;
        /**
         * 容器名称。
         * @example `test-init`
         */
        Name: string;
    }[];
    /**
     * DNS服务器的IP地址列表。
     * @example `172.10.*.**`
     */
    "DnsConfig.NameServer"?: string[];
    /**
     * DNS搜索域列表。
     * @example `svc.local.kubenetes`
     */
    "DnsConfig.Search"?: string[];
    /**
     * 对象的选项列表。
     */
    "DnsConfig.Option"?: {
        /**
         * 对象的Value。
         * @example `value`
         */
        Value: string;
        /**
         * 对象的Name。
         * @example `name`
         */
        Name: string;
    }[];
    /**
     * 添加一个ECI的别名。
     */
    "HostAliase"?: {
        /**
         * 添加IP。
         * @example `1.1.1.1`
         */
        Ip: string;
        /**
         * 添加主机名。
         * @example `hehe.com`
         */
        Hostname: string[];
    }[];
    /**
     * 通过安全上下文修改安全sysctl参数。更多信息，请参见[配置Security Context](~~462313~~)。
     */
    "SecurityContext.Sysctl"?: {
        /**
         * 通过安全上下文修改sysctl参数时，安全sysctl参数的取值。
         * @example `65536`
         */
        Value: string;
        /**
         * 通过安全上下文修改sysctl参数时，安全sysctl参数的名称。取值范围：
         * - net.ipv4.ping_group_range
         * - net.ipv4.ip_unprivileged_port_start
         * @example `net.ipv4.ping_group_range`
         */
        Name: string;
    }[];
    /**
     * 通过安全上下文修改非安全sysctl参数。更多信息，请参见[配置Security Context](~~462313~~)。
     */
    "HostSecurityContext.Sysctl"?: {
        /**
         * 通过安全上下文修改sysctl参数时，非安全sysctl参数的取值。
         * @example `65536`
         */
        Value: string;
        /**
         * 通过安全上下文修改sysctl参数时，非安全sysctl参数的名称。取值范围：
         * - kernel.shm*（kernel.shm_rmid_forced除外）
         * - kernel.msg*
         * - kernel.sem
         * - fs.mqueue.*
         * - net.*（net.ipv4.tcp_syncookies、net.ipv4.ping_group_range、net.ipv4.ip_unprivileged_port_start除外）
         * @example `kernel.msgmax`
         */
        Name: string;
    }[];
    /**
     * NTP服务器。
     * @example `ntp.cloud.aliyuncs.com`
     */
    "NtpServer"?: string[];
    /**
     * ACR企业版实例信息列表。更多信息，请参见[免密拉取ACR镜像](~~194250~~)。
     */
    "AcrRegistryInfo"?: {
        /**
         * ACR企业版实例的域名。默认为相应实例的所有域名。支持指定个别域名，多个以半角逗号分隔。
         * @example `*****-****-registry.cn-beijing.cr.aliyuncs.com`
         */
        Domain: string[];
        /**
         * ACR企业版实例的名称。
         * @example `acr-test`
         */
        InstanceName: string;
        /**
         * ACR企业版实例ID。
         * @example `cri-nwj395hgf6f3****`
         */
        InstanceId: string;
        /**
         * ACR企业版实例所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * ECI实例等资源归属账号下的RAM角色的ARN。
         * @example `acs:ram::1609982529******:role/role-assume`
         */
        ArnService: string;
        /**
         * ACR实例归属账号下的RAM角色的ARN。
         * @example `acs:ram::1298452580******:role/role-acr`
         */
        ArnUser: string;
    }[];
    /**
     * 抢占式实例的保护期。单位为小时。默认为1。可设置为0，表示无保护期。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 是否周期执行：
     * - true：周期执行。
     * - false：非周期行执行。
     * @example `true`
     */
    "StrictSpot"?: boolean;
    /**
     * 自建镜像仓库地址。使用HTTP协议的自建镜像仓库中的镜像创建ECI实例时，需配置该参数，使得ECI使用HTTP协议拉取镜像，避免因协议不同而导致镜像拉取失败。
     * @example `"harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"`
     */
    "PlainHttpRegistry"?: string;
    /**
     * 自建镜像仓库地址。使用自签发证书的自建镜像仓库中的镜像创建ECI实例时，需配置该参数来跳过证书认证，避免因证书认证失败而导致镜像拉取失败。
     * @example `"harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"`
     */
    "InsecureRegistry"?: string;
    /**
     * 镜像加速模式。取值范围：
     * - nydus：使用Nydus加速，需镜像本身支持。
     * - dadi：使用DADI加速，需镜像本身支持。
     * - p2p：使用P2P加速，需镜像本身支持。
     * - imc：使用镜像缓存加速。
     * @example `imc`
     */
    "ImageAccelerateMode"?: string;
    /**
     * 是否开通ECI的IPv6公网通信能力。
     * @example `true`
     */
    "Ipv6GatewayBandwidthEnable"?: boolean;
    /**
     * 当Ipv6GatewayBandwidthEnable配置为true时，配置IPv6地址的公网带宽峰值。取值如下：
     * - 当IPv6网关的公网带宽计费方式为按固定带宽计费时，IPv6地址的公网带宽范围为1~2000 Mbps。
     * - 当IPv6网关的公网带宽计费方式为按使用流量计费时，IPv6地址的公网带宽范围受网关规格约束。
     *     - 网关为免费版，IPv6地址的公网带宽范围为1~200 Mbps。
     *     - 网关为企业版，IPv6地址的公网带宽范围为1~500 Mbps。
     *      - 网关为企业增强版，IPv6地址的公网带宽范围为1~1000 Mbps。
     * 默认值为网关对应带宽范围的最大值。
     * @example `100`
     */
    "Ipv6GatewayBandwidth"?: string;
    /**
     * 当ECI规格比申请规格大时，可以开启该配置，确保容器内看到的资源跟申请的资源保持一致。
     * @example `false`
     */
    "ContainerResourceView"?: boolean;
    /**
     * 配置为true表示实例启用固定IP地址。具体请参见[配置ECI实例使用固定IP地址](~~2381086~~)。
     * @example `true`
     */
    "FixedIp"?: string;
    /**
     * 固定IP地址空闲后的保留时长，即启用固定IP地址的实例释放后，其固定IP地址的保留时长，单位为小时。默认值为48。
     * @example `24`
     */
    "FixedIpRetainHour"?: number;
    /**
     * 数据缓存Bucket。
     * @example `default`
     */
    "DataCacheBucket"?: string;
    /**
     * 数据缓存使用的云盘的性能等级。
     * 优先使用ESSD云盘，性能等级默认为PL1。
     * @example `PL1`
     */
    "DataCachePL"?: string;
    /**
     * 数据缓存使用ESSD AutoPL云盘时，ESSD AutoPL云盘预配置的读写IOPS。
     * 取值范围：0~min{50000, 1000 * 容量-基准性能}。基准性能=min{1800+50 * 容量, 50000}。
     * 更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `40000`
     */
    "DataCacheProvisionedIops"?: number;
    /**
     * 数据缓存使用ESSD AutoPL云盘时，是否开启Burst（性能突发）。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `false`
     */
    "DataCacheBurstingEnabled"?: boolean;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会创建ECI实例。检查项包括是否填写了必填参数、请求格式、业务限制和库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRun.Success。
     * - false（默认）：发送正常请求，通过检查后直接创建ECI实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 指定ECI实例的私网IP地址。目前仅支持指定IPv4地址，请确保该IP地址没有被占用。
     * @example `172.16.0.1`
     */
    "PrivateIpAddress"?: string;
    /**
     * 系统开销预留选项。
     */
    "OverheadReservationOption"?: {
        /**
         * 是否开启系统开销预留。默认为false，如要开启，请设置为true。开启后，系统会自动为ECI实例附加系统开销占用的内存，然后向上规整到最接近的规格，并按规整后的规格计费。
         * @example `true`
         */
        EnableOverheadReservation: boolean;
    };
    /**
     * 指定ECI实例的操作系统。取值范围：
     * - Linux（默认值）
     * - Windows
     * > Windows实例正在邀测中，如需使用，请提交工单申请。
     * @example `Windows`
     */
    "OsType"?: string;
    /**
     * 指定ECI实例的CPU架构。取值范围：
     * - AMD64（默认值）
     * - ARM64
     * @example `ARM64`
     */
    "CpuArchitecture"?: string;
    /**
     * 指定算力类别。更多信息，请参见[指定算力类别创建实例](~~2638061~~)。
     */
    "ComputeCategory"?: string[];
    /**
     * 指定GPU驱动版本。取值范围：
     * - tesla=470.82.01（默认值）
     * - tesla=525.85.12
     * > 仅部分规格支持切换GPU驱动版本。更多信息，请参见[指定GPU规格创建实例](~~2579486~~)。
     * @example `tesla=525.85.12
    `
     */
    "GpuDriverVersion"?: string;
}
