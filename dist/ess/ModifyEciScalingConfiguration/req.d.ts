export interface ModifyEciScalingConfigurationRequest {
    /**
     * 待修改伸缩配置的ID。
     * @example `asc-bp16har3jpj6fjbx****`
     */
    "ScalingConfigurationId": string;
    /**
     * 伸缩配置的名称。长度为2~64个英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、短划线（-）或半角句号（.）。
     * 在同一地域下同一伸缩组内伸缩配置名称唯一。如果您没有指定该参数，则默认使用伸缩配置的ID。
     * @example `test-modify`
     */
    "ScalingConfigurationName"?: string;
    /**
     * >该参数未开放使用。
     * @example `desc`
     */
    "Description"?: string;
    /**
     * ECI实例所属的安全组ID。同一个安全组内的ECI实例之间可以互相访问。
     * 如果没有指定安全组，系统将自动使用您选择的地域下的默认安全组，您需要确保该安全组的入方向规则中包含容器需要暴露的协议和端口。如果您在该地域下没有默认安全组，系统将自动创建一个默认安全组，并将您声明的容器协议和端口添加到该安全组的入方向规则中。
     * @example `sg-uf66jeqopgqa9hdn****`
     */
    "SecurityGroupId"?: string;
    /**
     * ECI实例名称，即容器组名称。格式要求如下：
     * - 长度为2~128个字符。
     * - 支持英文小写字母、数字或者短划线（-），不能以短划线（-）开头或者结尾。
     * @example `nginx-test`
     */
    "ContainerGroupName"?: string;
    /**
     * 实例重启策略。取值范围：
     * - Always：总是重启。
     * - Never：从不重启。
     * - OnFailure：失败时重启。
     * 默认值：Always。
     * @example `Always`
     */
    "RestartPolicy"?: string;
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
     * >该参数未开放使用。
     * @example `false`
     */
    "EnableSls"?: boolean;
    /**
     * 镜像缓存ID。
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
     * 是否自动匹配镜像缓存。
     * 默认值：false。
     * @example `false`
     */
    "AutoMatchImageCache"?: boolean;
    /**
     * IPv6地址数。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 有效期限。单位为秒。
     * @example `1000`
     */
    "ActiveDeadlineSeconds"?: number;
    /**
     * 实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认值：NoSpot。
     * @example `SpotPriceLimit`
     */
    "SpotStrategy"?: string;
    /**
     * 设置抢占式实例的每小时最高价格，最多精确到小数点后3位。
     * 当SpotStrategy取值为SpotWithPriceLimit时，必须设置SpotPriceLimit。
     * @example `0.025`
     */
    "SpotPriceLimit"?: number;
    /**
     * 是否自动创建弹性公网IP，并绑定ECI实例。
     * @example `true`
     */
    "AutoCreateEip"?: boolean;
    /**
     * 弹性公网IP的带宽。
     * 默认值：5 Mbit/s。
     * @example `5`
     */
    "EipBandwidth"?: number;
    /**
     * 主机名称，即容器组名称。
     * @example `test`
     */
    "HostName"?: string;
    /**
     * 入方向带宽限制。单位：Byte。
     * @example `1024000`
     */
    "IngressBandwidth"?: number;
    /**
     * 出方向带宽限制。单位：Byte。
     * @example `1024000`
     */
    "EgressBandwidth"?: number;
    /**
     * CPU物理核心数。仅部分规格支持自定义设置。更多信息，请参见[自定义CPU选项](~~197781~~)。
     * @example `2`
     */
    "CpuOptionsCore"?: number;
    /**
     * 每核线程数。仅部分规格支持自定义设置。配置为1时表示关闭超线程。更多信息，请参见[自定义cpu选项](~~197781~~)。
     * @example `2`
     */
    "CpuOptionsThreadsPerCore"?: number;
    /**
     * 临时存储空间大小，默认使用ESSD PL1类型的云盘。单位：GiB。
     * @example `20`
     */
    "EphemeralStorage"?: number;
    /**
     * 后端服务器的权重，取值范围：1~100。
     * @example `50`
     */
    "LoadBalancerWeight"?: number;
    /**
     * 标签信息的集合。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `version`
         */
        Key: string;
        /**
         * 标签值。
         * @example `3`
         */
        Value: string;
    }[];
    /**
     * 镜像仓库的详细信息。
     */
    "ImageRegistryCredentials"?: {
        /**
         * 镜像仓库密码。
         * @example `yourpaasword`
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
     * 容器列表。
     */
    "Containers"?: {
        /**
         * 检查超时的时间，默认值为1秒，最小值为1秒。
         * @example `1`
         */
        ReadinessProbe.TimeoutSeconds: number;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前必须为1。
         * @example `1`
         */
        ReadinessProbe.SuccessThreshold: number;
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
         * >NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Adds: string[];
        /**
         * 使用TCP Socket方式进行健康检查时，TCP Socket检测的端口。
         * @example `8000`
         */
        ReadinessProbe.TcpSocket.Port: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP。
         * - HTTPS。
         * @example `HTTP`
         */
        ReadinessProbe.HttpGet.Scheme: string;
        /**
         * 检查执行的周期，默认值为10秒，最小值为1秒。
         * @example `5`
         */
        LivenessProbe.PeriodSeconds: number;
        /**
         * 端口信息。
         */
        Ports: {
            /**
             * 协议类型。取值范围：
             * - TCP。
             * - UDP。
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
         * 容器运行的根文件系统是否为只读。目前仅支持配置为true。
         * @example `true`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 环境变量的信息。
         */
        EnvironmentVars: {
            /**
             * 环境变量名。长度为1~128位，格式要求：`[0-9a-zA-Z]`，以及下划线，不能以数字开头。
             * @example `PATH`
             */
            Key: string;
            /**
             * 环境变量值。长度为0~256位。
             * @example `/usr/local/bin
            `
             */
            Value: string;
            /**
             * >该参数未开放使用。
             * @example `path`
             */
            FieldRef.FieldPath: string;
        }[];
        /**
         * 使用TCP Socket方式进行健康检查时，TCP Socket检测的端口。
         * @example `1`
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
         * @example `/usr/local/
        `
         */
        WorkingDir: string;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP。
         * - HTTPS。
         * @example `HTTP`
         */
        LivenessProbe.HttpGet.Scheme: string;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的端口号。
         * @example `8080`
         */
        ReadinessProbe.HttpGet.Port: number;
        /**
         * 容器启动命令对应的参数。最多10个。
         */
        Args: string[];
        /**
         * 指定容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * 检查开始执行的时间，以容器启动完成为起点计算。单位为秒。
         * @example `3`
         */
        ReadinessProbe.InitialDelaySeconds: number;
        /**
         * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。
         * 默认值：false。
         * @example `false`
         */
        Stdin: boolean;
        /**
         * 容器内存大小。单位：GiB。
         * @example `0.5`
         */
        Memory: number;
        /**
         * 容器镜像名称。
         * @example `nginx`
         */
        Name: string;
        /**
         * 容器镜像。
         * @example `registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest`
         */
        Image: string;
        /**
         * 检查开始执行的时间，以容器启动完成为起点计算。单位为秒。
         * @example `5`
         */
        LivenessProbe.InitialDelaySeconds: number;
        /**
         * 容器挂载的数据卷信息。
         */
        VolumeMounts: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。可能值：
             * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
             * - HostToCotainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
             * - Bidirectional：和HostToCotainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * @example `None`
             */
            MountPropagation: string;
            /**
             * 容器挂载数据卷的目录。
             * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
             * @example `/pod/data
            `
             */
            MountPath: string;
            /**
             * 数据卷是否只读。
             * 默认值：false。
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 数据卷名称。同Volume中的Name。
             * @example `default-volume1
            `
             */
            Name: string;
            /**
             * 数据卷子路径。
             * @example `data2/
            `
             */
            SubPath: string;
        }[];
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。
         * 默认值：3。
         * @example `3`
         */
        LivenessProbe.FailureThreshold: number;
        /**
         * 使用命令行方式进行健康检查时，在容器内执行的命令。
         */
        ReadinessProbe.Exec.Commands: string[];
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。
         * 默认值：3。
         * @example `3`
         */
        ReadinessProbe.FailureThreshold: number;
        /**
         * 容器的镜像拉取策略。取值范围：
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
         * 容器的VCPU大小。单位：核。
         * @example `0.25
        `
         */
        Cpu: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的端口号。
         * @example `8888`
         */
        LivenessProbe.HttpGet.Port: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的路径。
         * @example `/healthyz
        `
         */
        LivenessProbe.HttpGet.Path: string;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认值为1。当前值必须为1。
         * @example `1`
         */
        LivenessProbe.SuccessThreshold: number;
        /**
         * 检查执行的周期，默认值为10秒，最小值为1秒。
         * @example `3`
         */
        ReadinessProbe.PeriodSeconds: number;
        /**
         * 检查超时的时间，默认值为1秒，最小值为1秒。
         * @example `1`
         */
        LivenessProbe.TimeoutSeconds: number;
        /**
         * 容器启动命令。最多20个。每个命令最多包含256个字符。
         */
        Commands: string[];
        /**
         * 设置运行容器的用户ID。
         * @example `1000`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求检测的路径。
         * @example `/healthz
        `
         */
        ReadinessProbe.HttpGet.Path: string;
        /**
         * 使用命令行方式进行健康检查时，在容器内执行的命令。
         */
        LivenessProbe.Exec.Commands: string[];
        /**
         * 使用 HTTP 请求方式设置postStart回调函数时，接收 HTTP Get 请求的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePostStartHandlerHttpGetHost: string;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检查的端口号。
         * @example `5050`
         */
        LifecyclePostStartHandlerHttpGetPort: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePostStartHandlerHttpGetPath: string;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * @example `HTTPS`
         */
        LifecyclePostStartHandlerHttpGetScheme: string;
        /**
         * 使用命令行方式设置postStart回调函数时，在容器内执行的命令。
         */
        LifecyclePostStartHandlerExecs: string[];
        /**
         * 使用TCP Socket方式设置postStart回调函数时，TCP Socket检测的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePostStartHandlerTcpSocketHost: string;
        /**
         * 使用 TCPSocket 方式设置postStart回调函数时，TCP Socket 检测的端口。
         * @example `80`
         */
        LifecyclePostStartHandlerTcpSocketPort: number;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，接收HTTP Get请求的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePreStopHandlerHttpGetHost: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的端口号。
         * @example `80`
         */
        LifecyclePreStopHandlerHttpGetPort: number;
        /**
         * 使用 HTTP 请求方式设置preStop回调函数时，HTTP Get 请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePreStopHandlerHttpGetPath: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * @example `HTTP`
         */
        LifecyclePreStopHandlerHttpGetScheme: string;
        /**
         * 使用命令行方式设置preStop回调函数时，在容器内执行的命令。
         */
        LifecyclePreStopHandlerExecs: string[];
        /**
         * 使用TCP Socket方式设置preStop回调函数时，TCP Socket检测的主机地址。
         * @example `10.0.XX.XX`
         */
        LifecyclePreStopHandlerTcpSocketHost: string;
        /**
         * 使用TCPSocket方式设置preStop回调函数时，TCP Socket检测的端口。
         * @example `80`
         */
        LifecyclePreStopHandlerTcpSocketPort: number;
    }[];
    /**
     * 数据卷信息。
     */
    "Volumes"?: {
        /**
         * 数据卷类型，可能值：
         * - EmptyDirVolume。
         * - NFSVolume。
         * - ConfigFileVolume。
         * - FlexVolume。
         * @example `EmptyDirVolume`
         */
        Type: string;
        /**
         * DiskVolume的大小。单位：GiB。
         * @example `15`
         */
        DiskVolume.DiskSize: number;
        /**
         * NFS数据卷路径。
         * @example `/share`
         */
        NFSVolume.Path: string;
        /**
         * 挂载的文件系统类型，默认取决于FlexVolume的script。
         * @example `ext4`
         */
        FlexVolume.FsType: string;
        /**
         * 该系统类型不推荐使用，建议您使用`FlexVolume.FsType`参数。
         * @example `xfs`
         */
        DiskVolume.FsType: string;
        /**
         * Host目录的类型。例如：File、Directory、Socket等。
         * @example `Directory`
         */
        HostPathVolume.Type: string;
        /**
         * NFS数据卷是否只读。
         * 默认值：false。
         * @example `false`
         */
        NFSVolume.ReadOnly: boolean;
        /**
         * Host上的绝对路径。
         * @example `/xx/xx/name
        `
         */
        HostPathVolume.Path: string;
        /**
         * FlexVolume对象选项列表。为KV形式，采用JSON传递。
         * 例如：通过FlexVolume挂载云盘时，Options的格式为`{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`。
         * @example `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`
         */
        FlexVolume.Options: string;
        /**
         * 用于FlexVolume的驱动程序名称。
         * @example `flexvolume`
         */
        FlexVolume.Driver: string;
        /**
         * ConfigFileVolume默认的权限。
         * @example `0644`
         */
        ConfigFileVolumeDefaultMode: number;
        /**
         * NFS服务器地址。
         * @example `3f9cd4a596-n****.cn-shanghai.nas.aliyuncs.com`
         */
        NFSVolume.Server: string;
        /**
         * DiskVolume的ID。
         * @example `d-xx
        `
         */
        DiskVolume.DiskId: string;
        /**
         * 数据卷名称。
         * @example `default-volume1
        `
         */
        Name: string;
        /**
         * EmptyDirVolume的存储媒介，默认为空，使用node文件系统；支持memory，表示使用内存。
         * @example `memory
        `
         */
        EmptyDirVolume.Medium: string;
        /**
         * 配置文件路径列表。
         */
        ConfigFileVolumeConfigFileToPath: {
            /**
             * 相对文件路径。
             * @example `/usr/bin/
            `
             */
            Path: string;
            /**
             * ConfigFileVolume目录权限。
             * @example `0644`
             */
            Mode: number;
            /**
             * 配置文件内容（32 KB）。
             * @example `bGl1bWk=
            `
             */
            Content: string;
        }[];
        /**
         * EmptyDir数据卷的大小。取值请带上单位，建议使用Gi或Mi。
         * @example `256Mi`
         */
        EmptyDirVolume.SizeLimit: string;
    }[];
    /**
     * init容器列表。
     */
    "InitContainers"?: {
        /**
         * init容器的环境变量信息。
         */
        InitContainerEnvironmentVars: {
            /**
             * 环境变量名。长度为1~128个字符。格式要求：`[0-9a-zA-Z]`，以及下划线（_），不能以数字开头。
             * @example `Path`
             */
            Key: string;
            /**
             * 环境变量值。长度为0~256位。
             * @example `/usr/bin/
            `
             */
            Value: string;
            /**
             * >该参数未开放使用。
             * @example `path`
             */
            FieldRef.FieldPath: string;
        }[];
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
         * >NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Adds: string[];
        /**
         * 容器使用的镜像。
         * @example `nginx`
         */
        Image: string;
        /**
         * init容器端口信息。
         */
        InitContainerPorts: {
            /**
             * 协议类型。取值范围：
             * - TCP。
             * - UDP。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 端口号。取值范围：1~65535。
             * @example `1`
             */
            Port: number;
        }[];
        /**
         * init容器的挂载点信息数组。
         */
        InitContainerVolumeMounts: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。取值范围：
             * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
             * - HostToCotainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
             * - Bidirectional：和HostToCotainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * 默认值：None。
             * @example `None`
             */
            MountPropagation: string;
            /**
             * 容器挂载数据卷的目录。
             * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
             * @example `/usr/share/
            `
             */
            MountPath: string;
            /**
             * 挂载路径是否只读。
             * 默认值：false。
             * @example `false
            `
             */
            ReadOnly: boolean;
            /**
             * 挂载数据卷的名称。
             * @example `test-empty
            `
             */
            Name: string;
            /**
             * 数据卷下的子目录，方便Pod将同一个Volume下不同目录挂载到容器不同目录。
             * @example `Always`
             */
            SubPath: string;
        }[];
        /**
         * >该参数未开放使用。
         * @example `false`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 容器的镜像拉取策略。取值范围：
         * - Always：总是拉取。每次都拉取镜像。
         * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
         * - Never：从不拉取。使用本地镜像，不拉取镜像。
         * @example `Always`
         */
        ImagePullPolicy: string;
        /**
         * 容器的VCPU大小。单位：核。
         * @example `0.5`
         */
        Cpu: number;
        /**
         * 工作目录。
         * @example `/usr/local
        `
         */
        WorkingDir: string;
        /**
         * 容器启动指令。
         */
        Commands: string[];
        /**
         * 容器启动参数。
         */
        Args: string[];
        /**
         * 设置运行容器的用户ID。
         * @example `587`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 指定容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * 内存大小。单位：GiB。
         * @example `1.0`
         */
        Memory: number;
        /**
         * 容器名称。
         * @example `test-init`
         */
        Name: string;
    }[];
    /**
     * DNS服务器的IP地址列表。
     */
    "DnsConfigNameServers"?: string[];
    /**
     * DNS搜索域列表。
     */
    "DnsConfigSearchs"?: string[];
    /**
     * 对象选项列表，每个对象由Name和Value（可选）构成。
     */
    "DnsConfigOptions"?: {
        /**
         * 对象变量值。
         * @example `value`
         */
        Value: string;
        /**
         * 对象变量名。
         * @example `name
        `
         */
        Name: string;
    }[];
    /**
     * 主机相关信息。
     */
    "HostAliases"?: {
        /**
         * 添加IP地址。
         * @example `192.0.XX.XX
        `
         */
        Ip: string;
        /**
         * 添加主机名。
         */
        Hostnames: string[];
    }[];
    /**
     * 实例运行的安全上下文的系统信息。
     */
    "SecurityContextSysCtls"?: {
        /**
         * 实例运行的安全上下文的变量值。
         * @example `65536`
         */
        Value: string;
        /**
         * 实例运行的安全上下文系统名称。
         * @example `kernel.msgmax
        `
         */
        Name: string;
    }[];
    /**
     * NTP服务器。
     */
    "NtpServers"?: string[];
    /**
     * ACR企业版实例的信息。
     */
    "AcrRegistryInfos"?: {
        /**
         * ACR企业版实例的域名。默认为相应实例的所有域名。支持指定个别域名，多个以半角逗号（,）分隔。
         */
        Domains: string[];
        /**
         * ACR企业版实例的名称。
         * @example `acr-test
        `
         */
        InstanceName: string;
        /**
         * ACR企业版实例ID。
         * @example `cri-nwj395hgf6f3****
        `
         */
        InstanceId: string;
        /**
         * ACR企业版实例所属地域。
         * @example `cn-hangzhou
        `
         */
        RegionId: string;
    }[];
    /**
     * 是否开启成本优化开关。取值范围：
     * - true：开启。
     * - false：未开启。
     * 默认值：false。
     * @example `false`
     */
    "CostOptimization"?: boolean;
    /**
     * 实例规格族级别，用于筛选符合要求的实例规格范围，当`CostOptimization`开启时生效。取值范围：
     * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
     * - EnterpriseLevel：企业级。性能稳定且资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
     * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的业务场景。更多信息，请参见[突发性能实例概述](~~59977~~)。
     * @example `EnterpriseLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * Containers参数更新方式控制参数。取值范围：
     * - RenewUpdate：全量更新，以更新请求中Containers参数为准，覆盖原有Containers参数配置。
     * - IncrementalUpdate：增量更新，根据Container.name进行Container匹配，仅更新请求参数中已设置参数，未设置参数不进行更新。
     * 默认值：RenewUpdate。
     * @example `RenewUpdate`
     */
    "ContainersUpdateType"?: string;
    /**
     * 指定的ECS实例规格，支持指定多个规格（最多支持5个）。
     */
    "InstanceTypes"?: string[];
    /**
     * 数据缓存Bucket。
     * @example `default`
     */
    "DataCacheBucket"?: string;
    /**
     * 数据缓存使用的云盘的性能等级。建议优先使用ESSD云盘，该云盘的性能等级取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 默认值：PL1。
     * >关于ESSD云盘的更多信息，请参见[ESSD云盘](~~122389~~)。
     * @example `PL1`
     */
    "DataCachePL"?: string;
    /**
     * 数据缓存使用ESSD AutoPL云盘时，ESSD AutoPL云盘预配置的读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}，其中，基准性能=min{1800+50*容量, 50000}。
     * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `40000`
     */
    "DataCacheProvisionedIops"?: number;
    /**
     * 数据缓存使用ESSD AutoPL云盘时，是否开启Burst（性能突发）。取值范围：
     * - true：开启。
     * - false：未开启。
     * 默认值：false。
     * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
     * @example `false`
     */
    "DataCacheBurstingEnabled"?: boolean;
}
