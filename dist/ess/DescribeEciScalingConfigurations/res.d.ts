export interface DescribeEciScalingConfigurationsResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 伸缩配置的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 伸缩配置信息的集合。
     */
    ScalingConfigurations: {
        /**
         * 伸缩配置的创建时间。
         * @example `2014-08-14T10:58Z`
         */
        CreationTime: string;
        /**
         * 伸缩配置的名称。
         * @example `scalingconfi****`
         */
        ScalingConfigurationName: string;
        /**
         * ECI实例所属的安全组的ID，同一个安全组内的ECI实例可以互相访问。
         * @example `sg-bp18kz60mefs****`
         */
        SecurityGroupId: string;
        /**
         * 有效期限。单位为秒。
         * @example `1000`
         */
        ActiveDeadlineSeconds: number;
        /**
         * 实例的抢占策略。可能值：
         * - NoSpot：正常按量付费实例。
         * - SpotWithPriceLimit：设置上限价格的抢占式实例。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * @example `NoSpot`
         */
        SpotStrategy: string;
        /**
         * 是否自动创建弹性公网IP，并绑定ECI实例。
         * @example `true`
         */
        AutoCreateEip: boolean;
        /**
         * 伸缩配置所属伸缩组的ID。
         * @example `asg-bp17pelvl720x3v7****`
         */
        ScalingGroupId: string;
        /**
         * 临时存储空间大小。单位：GiB。
         * @example `20`
         */
        EphemeralStorage: number;
        /**
         * IPv6地址数。
         * @example `1`
         */
        Ipv6AddressCount: number;
        /**
         * >该参数未开放使用。
         * @example `This is an example.`
         */
        Description: string;
        /**
         * 弹性公网IP的带宽。默认为5 M。
         * @example `5`
         */
        EipBandwidth: number;
        /**
         * 镜像缓存ID。
         * @example `imc-2zebxkiifuyzzlhl****`
         */
        ImageSnapshotId: string;
        /**
         * 内存大小。
         * 同时指定CPU和Memory可以定义实例规格范围。例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
         * > 该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
         * @example `16`
         */
        Memory: number;
        /**
         * 容器组的重启策略。可能值：
         * - Never：不重启。
         * - Always：始终重启。
         * - OnFailure：失败时重启。
         * @example `Never`
         */
        RestartPolicy: string;
        /**
         * 抢占式实例的每小时最高价格。
         * 仅当SpotStrategy为SpotWithPriceLimit时返回。
         * @example `0.025`
         */
        SpotPriceLimit: number;
        /**
         * 入方向带宽限制。单位：Byte。
         * @example `1024000`
         */
        IngressBandwidth: number;
        /**
         * 每核线程数。仅部分规格支持自定义设置。配置为1时表示关闭超线程。更多信息，请参见[自定义CPU选项](~~197781~~)。
         * @example `2`
         */
        CpuOptionsThreadsPerCore: number;
        /**
         * 程序的缓冲时间，用于处理关闭之前的操作。
         * @example `60`
         */
        TerminationGracePeriodSeconds: number;
        /**
         * ECI实例作为后端服务器时的权重，取值范围：1~100。
         * @example `1`
         */
        LoadBalancerWeight: number;
        /**
         * DNS策略。
         * @example `Default`
         */
        DnsPolicy: string;
        /**
         * 主机名。
         * @example `['hehe.com', 'haha.com']`
         */
        HostName: string;
        /**
         * 出方向带宽限制。单位：Byte。
         * @example `1024000`
         */
        EgressBandwidth: number;
        /**
         * ECI实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 实例RAM角色名称，ECI与ECS共用实例RAM角色，具体操作，请参见[通过API使用实例RAM角色](~~61178~~)。
         * @example `ram:PassRole`
         */
        RamRoleName: string;
        /**
         * 实例级别vCPU大小。
         * @example `2.0`
         */
        Cpu: number;
        /**
         * 是否自动匹配镜像缓存。
         * 默认值：false。
         * @example `false`
         */
        AutoMatchImageCache: boolean;
        /**
         * 资源组ID。
         * @example `rg-8db03793gfrz****`
         */
        ResourceGroupId: string;
        /**
         * ECI实例名称，即容器组名称。
         * @example `test`
         */
        ContainerGroupName: string;
        /**
         * 伸缩配置的ID。
         * @example `asc-bp1ezrfgoyn5kijl****`
         */
        ScalingConfigurationId: string;
        /**
         * CPU物理核心数。仅部分规格支持自定义设置。更多信息，请参见[自定义CPU选项](~~197781~~)。
         * @example `2`
         */
        CpuOptionsCore: number;
        /**
         * >该参数未开放使用。
         * @example `False`
         */
        SlsEnable: boolean;
        /**
         * ECI实例包含的容器列表。
         */
        Containers: {
            /**
             * HttpGet检测的路径。
             * @example `/usr/local`
             */
            ReadinessProbeHttpGetPath: string;
            /**
             * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前值必须为1。
             * @example `1`
             */
            ReadinessProbeSuccessThreshold: number;
            /**
             * 检查执行的周期，默认为10秒，最小值为1秒。
             * @example `5`
             */
            LivenessProbePeriodSeconds: number;
            /**
             * TcpSocket的端口号。
             * @example `80`
             */
            LivenessProbeTcpSocketPort: number;
            /**
             * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
             * - HTTP。
             * - HTTPS。
             * @example `HTTP`
             */
            LivenessProbeHttpGetScheme: string;
            /**
             * 容器内工作目录
             * @example `/usr/local/nginx`
             */
            WorkingDir: string;
            /**
             * 是否开启交互。取值范围：
             * - true：开启。
             * - false：未开启。
             * 例如：当Command配置为/bin/bash时，需要配置为true。
             * 默认值：false。
             * @example `false`
             */
            Tty: boolean;
            /**
             * HttpGet检测的端口。
             * @example `80`
             */
            LivenessProbeHttpGetPort: number;
            /**
             * GPU个数。
             * @example `1`
             */
            Gpu: number;
            /**
             * 检查开始执行的时间，以容器启动完成为起点计算。
             * @example `5`
             */
            ReadinessProbeInitialDelaySeconds: number;
            /**
             * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。默认为false。
             * @example `true`
             */
            Stdin: boolean;
            /**
             * 容器内存大小。
             * @example `2.0`
             */
            Memory: number;
            /**
             * 自定义的容器名称。
             * @example `nginx`
             */
            Name: string;
            /**
             * 是否只读根文件系统，目前仅支持true。
             * @example `true`
             */
            SecurityContextReadOnlyRootFilesystem: boolean;
            /**
             * HttpGet检测的路径。
             * @example `/usr/nginx/`
             */
            LivenessProbeHttpGetPath: string;
            /**
             * 容器镜像。
             * @example `mysql`
             */
            Image: string;
            /**
             * TcpSocket的端口号。
             * @example `8888`
             */
            ReadinessProbeTcpSocketPort: number;
            /**
             * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
             * - HTTP。
             * - HTTPS。
             * @example `HTTP`
             */
            ReadinessProbeHttpGetScheme: string;
            /**
             * HttpGet检测的路径。
             * @example `/usr/nginx/`
             */
            ReadinessProbeHttpGetPort: number;
            /**
             * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前值必须为1。
             * @example `1`
             */
            LivenessProbeSuccessThreshold: number;
            /**
             * 检查超时的时间，默认为1秒，最小为1秒。
             * @example `5`
             */
            ReadinessProbeTimeoutSeconds: number;
            /**
             * 用于运行容器进程入口点的UID。
             * @example `1000`
             */
            SecurityContextRunAsUser: number;
            /**
             * 检查开始执行的时间，以容器启动完成为起点计算。
             * @example `10`
             */
            LivenessProbeInitialDelaySeconds: number;
            /**
             * 检查执行的周期，默认为10秒，最小为1秒。
             * @example `1`
             */
            ReadinessProbePeriodSeconds: number;
            /**
             * 镜像拉取策略。可能值：
             * - Alway：总是拉取。每次都拉取镜像。
             * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
             * - Never：从不拉取。使用本地镜像，不拉取镜像。
             * @example `Always`
             */
            ImagePullPolicy: string;
            /**
             * 当标准输入为true时，标准输入流将在多个附加会话中保持开启状态。
             * 如果StdinOnce设为true，标准输入在容器开启时被打开，在首个客户端附加到标准输入之前都为空，然后会一直保持开启状态，接收数据，直到客户端连接断开，此时标准输入被关闭，在容器重启前一直保持关闭状态。
             * @example `true`
             */
            StdinOnce: boolean;
            /**
             * 容器的vCPU大小。
             * @example `2.0`
             */
            Cpu: number;
            /**
             * 检查超时的时间，默认为1秒，最小值为1秒。
             * @example `10`
             */
            LivenessProbeTimeoutSeconds: number;
            /**
             * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。
             * 默认值：3。
             * @example `3`
             */
            ReadinessProbeFailureThreshold: number;
            /**
             * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。
             * 默认值：3。
             * @example `3`
             */
            LivenessProbeFailureThreshold: number;
            /**
             * 暴露端口和协议列表。
             */
            Ports: {
                /**
                 * 端口号。可能值：1~65535。
                 * @example `8888`
                 */
                Port: number;
                /**
                 * 协议类型。取值范围：
                 * - TCP。
                 * - UDP。
                 * @example `TCP`
                 */
                Protocol: string;
            }[];
            /**
             * 挂载数据卷列表。
             */
            VolumeMounts: {
                /**
                 * 数据卷是否只读。
                 * 默认值：false。
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
                /**
                 * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。可能值：
                 * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
                 * - HostToCotainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
                 * - Bidirectional：和HostToCotainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
                 * 默认值：None。
                 * @example `None`
                 */
                MountPropagation: string;
                /**
                 * 容器挂载数据卷的目录。
                 * ><notice>容器挂载目录下的内容会被Volume的内容直接覆盖，请您谨慎使用。
                 * ></notice>
                 * @example `/pod/data`
                 */
                MountPath: string;
            }[];
            /**
             * 环境变量的信息列表。
             */
            EnvironmentVars: {
                /**
                 * 环境变量名。
                 * @example `PATH`
                 */
                Key: string;
                /**
                 * 环境变量值。
                 * @example `/usr/bin/`
                 */
                Value: string;
                /**
                 * >该参数未开放使用。
                 * @example `path`
                 */
                FieldRefFieldPath: string;
            }[];
            /**
             * 容器启动命令列表。最多20个。每个命令最多包含256个字符。
             */
            Commands: string[];
            /**
             * 使用命令行方式进行健康检查时，在容器内执行的命令列表。
             */
            LivenessProbeExecCommands: string[];
            /**
             * 容器启动命令对应的参数列表。最多10个。
             */
            Args: string[];
            /**
             * 使用命令行方式进行健康检查时，在容器内执行的命令列表。
             */
            ReadinessProbeExecCommands: string[];
            /**
             * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
             * > NET_RAW默认不支持，需提交工单申请。
             */
            SecurityContextCapabilityAdds: string[];
            /**
             * 使用 HTTP 请求方式设置postStart回调函数时，接收 HTTP Get请求的主机地址。
             * @example `10.0.XX.XX`
             */
            LifecyclePostStartHandlerHttpGetHost: string;
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检查的端口号。
             * @example `80`
             */
            LifecyclePostStartHandlerHttpGetPort: number;
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检测的路径。
             * @example `/healthyz`
             */
            LifecyclePostStartHandlerHttpGetPath: string;
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求对应的协议类型。
             * @example `HTTP`
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
             * 使用 TCPSocket 方式设置postStart回调函数时，TCP Socket检测的端口。
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
             * 使用 HTTP 请求方式设置 preStop 回调函数时，HTTP Get 请求检测的路径。
             * @example `/healthyz
            `
             */
            LifecyclePreStopHandlerHttpGetPath: string;
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求对应的协议类型。
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
         * init容器列表。
         */
        InitContainers: {
            /**
             * 容器运行的根文件系统是否为只读。目前仅支持配置为true。
             * @example `true`
             */
            SecurityContextReadOnlyRootFilesystem: boolean;
            /**
             * 镜像拉取策略。
             * @example `Always`
             */
            ImagePullPolicy: string;
            /**
             * 工作目录。
             * @example `/usr/local`
             */
            WorkingDir: string;
            /**
             * CPU大小。
             * @example `0.5`
             */
            Cpu: number;
            /**
             * 容器使用的镜像。
             * @example `nginx`
             */
            Image: string;
            /**
             * 指定容器使用的GPU个数。
             * @example `1`
             */
            Gpu: number;
            /**
             * 设置运行容器的用户ID。
             * @example `587`
             */
            SecurityContextRunAsUser: string;
            /**
             * 内存大小。
             * @example `1.0`
             */
            Memory: number;
            /**
             * 容器名称。
             * @example `test-init`
             */
            Name: string;
            /**
             * 环境变量的信息。
             */
            InitContainerEnvironmentVars: {
                /**
                 * 环境变量名。
                 * @example `PATH`
                 */
                Key: string;
                /**
                 * 环境变量值。
                 * @example `/usr/local/bin`
                 */
                Value: string;
                /**
                 * >该参数未开放使用。
                 * @example `path`
                 */
                FieldRefFieldPath: string;
            }[];
            /**
             * init容器端口信息的集合。
             */
            InitContainerPorts: {
                /**
                 * 端口号。取值范围：1~65535。
                 * @example `1`
                 */
                Port: number;
                /**
                 * 协议类型。取值范围：
                 * - TCP。
                 * - UDP。
                 * @example `TCP`
                 */
                Protocol: string;
            }[];
            /**
             * 数据卷挂载。
             */
            InitContainerVolumeMounts: {
                /**
                 * 挂载路径是否只读。
                 * 默认值：false。
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
                /**
                 * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。可能值：
                 * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
                 * - HostToCotainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
                 * - Bidirectional：和HostToCotainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
                 * 默认值：None。
                 * @example `None`
                 */
                MountPropagation: string;
                /**
                 * 挂载目录，容器的挂载目录下的内容被volume的内容直接覆盖，所以要慎用。
                 * @example `/usr/share/`
                 */
                MountPath: string;
            }[];
            /**
             * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
             * > NET_RAW默认不支持，需提交工单申请。
             */
            SecurityContextCapabilityAdds: string[];
            /**
             * 容器启动指令。
             */
            InitContainerCommands: string[];
            /**
             * 容器启动参数。
             */
            InitContainerArgs: string[];
        }[];
        /**
         * 实例的标签键值对。
         */
        Tags: {
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
         * 数据卷信息。
         */
        Volumes: {
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
             * DiskVolume的大小。单位为GiB。
             * @example `15`
             */
            DiskVolumeDiskId: string;
            /**
             * DiskVolume的系统类型。
             * @example `xfs`
             */
            DiskVolumeFsType: string;
            /**
             * EmptyDirVolume的存储媒介，默认为空，使用node文件系统。支持memory，表示使用内存。
             * @example `memory`
             */
            EmptyDirVolumeMedium: string;
            /**
             * NFS数据卷路径。
             * @example `/share`
             */
            NFSVolumePath: string;
            /**
             * DiskVolume的大小。单位为GiB。
             * @example `15`
             */
            DiskVolumeDiskSize: number;
            /**
             * NFS数据卷是否只读。
             * 默认值：false。
             * @example `false`
             */
            NFSVolumeReadOnly: boolean;
            /**
             * 挂载的文件系统类型，默认取决于FlexVolume的script。
             * @example `ext4`
             */
            FlexVolumeFsType: string;
            /**
             * ConfigFileVolume默认的权限。
             * @example `0644`
             */
            ConfigFileVolumeDefaultMode: number;
            /**
             * 用于FlexVolume的驱动程序名称。
             * @example `flexvolume`
             */
            FlexVolumeDriver: string;
            /**
             * FlexVolume对象选项列表。为KV形式，采用JSON传递。
             * 例如：通过FlexVolume挂载云盘时，Options的格式为`{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`。
             * @example `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`
             */
            FlexVolumeOptions: string;
            /**
             * NFS服务器地址。
             * @example `3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com`
             */
            NFSVolumeServer: string;
            /**
             * 数据卷名称。
             * @example `default-volume1`
             */
            Name: string;
            /**
             * 配置文件路径列表。
             */
            ConfigFileVolumeConfigFileToPaths: {
                /**
                 * 相对文件路径。
                 * @example `/usr/bin/`
                 */
                Path: string;
                /**
                 * ConfigFileVolume目录权限。
                 * @example `0644`
                 */
                Mode: number;
                /**
                 * 配置文件内容（32 KB）。
                 * @example `bGl1bWk=`
                 */
                Content: string;
            }[];
            /**
             * EmptyDir数据卷的大小。
             * @example `256Mi`
             */
            EmptyDirVolumeSizeLimit: string;
            /**
             * HostPath Volume的类型。
             * @example `Directory`
             */
            HostPathVolumeType: string;
            /**
             * HostPath Volume在主机上的目录路径。
             * @example `/pod/data`
             */
            HostPathVolumePath: string;
        }[];
        /**
         * 镜像仓库信息。
         */
        ImageRegistryCredentials: {
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
             * @example `yourusername
            `
             */
            UserName: string;
        }[];
        /**
         * 对象选项列表，每个对象由Name和Value（可选）构成。
         */
        DnsConfigOptions: {
            /**
             * 对象的变量名。
             * @example `name`
             */
            Name: string;
            /**
             * 对象变量值。
             * @example `value`
             */
            Value: string;
        }[];
        /**
         * 自定义实例内一个容器的Hostname映射。
         */
        HostAliases: {
            /**
             * 添加IP地址。
             * @example `192.0.XX.XX`
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
        SecurityContextSysCtls: {
            /**
             * 实例运行的安全上下文系统名称。
             * @example `kernel.msgmax`
             */
            Name: string;
            /**
             * 实例运行的安全上下文的变量值。
             * @example `65536`
             */
            Value: string;
        }[];
        /**
         * ACR企业版实例的信息。
         */
        AcrRegistryInfos: {
            /**
             * ACR企业版实例ID。
             * @example `cri-nwj395hgf6f3****`
             */
            InstanceId: string;
            /**
             * ACR企业版实例的名称。
             * @example `acr-test`
             */
            InstanceName: string;
            /**
             * ACR企业版实例所属地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * ACR企业版实例的域名。默认为相应实例的所有域名。支持指定个别域名，多个以半角逗号（,）分隔。
             */
            Domains: string[];
        }[];
        /**
         * DNS服务器的IP地址列表。
         */
        DnsConfigNameServers: string[];
        /**
         * DNS搜索域列表。
         */
        DnsConfigSearches: string[];
        /**
         * NTP服务器。
         */
        NtpServers: string[];
        /**
         * 伸缩配置在伸缩组中的状态。可能值：
         * - Active：生效状态。伸缩组会使用处于生效状态的伸缩配置自动创建ECS实例。
         * - Inacitve：未生效状态。处于未生效状态的伸缩配置存在于伸缩组中，但伸缩组不会使用此类伸缩配置自动创建ECS实例。
         * @example `Active`
         */
        LifecycleState: string;
        /**
         * 是否开启成本优化开关。可能值：
         * - true：开启。
         * - false：未开启。
         * @example `false`
         */
        CostOptimization: boolean;
        /**
         * 实例规格族级别，用于筛选符合要求的实例规格范围，当`CostOptimization`开启时生效。可能值：
         * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
         * - EnterpriseLevel：企业级。性能稳定且资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
         * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的业务场景。更多信息，请参见[突发性能实例概述](~~59977~~)。
         * @example `EnterpriseLevel`
         */
        InstanceFamilyLevel: string;
        /**
         * 指定的ECS实例规格，支持多规格（最多支持5个）。
         */
        InstanceTypes: string[];
        /**
         * 数据缓存Bucket。
         * @example `default`
         */
        DataCacheBucket: string;
        /**
         * 数据缓存使用的云盘的性能等级。建议优先使用ESSD云盘，该云盘的性能等级的可能值：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * >关于ESSD云盘的更多信息，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1`
         */
        DataCachePL: string;
        /**
         * 数据缓存使用ESSD AutoPL云盘时，ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}，其中，基准性能=min{1800+50*容量, 50000}。
         * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `40000`
         */
        DataCacheProvisionedIops: number;
        /**
         * 数据缓存使用ESSD AutoPL云盘时，是否开启Burst（性能突发）。可能值：
         * - true：开启。
         * - false：未开启。
         * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `false`
         */
        DataCacheBurstingEnabled: boolean;
    }[];
}
