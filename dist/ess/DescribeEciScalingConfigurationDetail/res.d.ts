export interface DescribeEciScalingConfigurationDetailResponse {
    /**
     * 请求ID。
     * @example `6EF9BFEE-FE07-4627-B8FB-14326FB9****`
     */
    RequestId: string;
    /**
     * 伸缩配置信息。
     */
    ScalingConfiguration: {
        /**
         * 伸缩配置的创建时间。
         * @example `2023-05-10T02:39:15Z`
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
         * @example `60`
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
         * 伸缩组的ID。
         * @example `asg-bp1frlu04fq4zv65b1bh`
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
         * 内存大小。单位：GiB。
         * 同时指定CPU和Memory可以定义实例规格范围。例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
         * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
         * @example `4`
         */
        Memory: number;
        /**
         * 容器组的重启策略。可能值：
         * - Never：不重启。
         * - Always：始终重启。
         * - OnFailure：失败时重启。
         * @example `Always`
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
         * ECI实例作为负载均衡后端服务器时的权重，取值范围：1~100。
         * 默认值：50。
         * @example `50`
         */
        LoadBalancerWeight: number;
        /**
         * DNS策略。
         * @example `Default`
         */
        DnsPolicy: string;
        /**
         * 主机名。
         * @example `hostname`
         */
        HostName: string;
        /**
         * 出方向带宽限制。单位：Byte。
         * @example `10485760`
         */
        EgressBandwidth: number;
        /**
         * 伸缩规则所属伸缩组的地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 实例RAM角色名称，ECI与ECS共用实例RAM角色，具体操作，请参见[通过API使用实例RAM角色](~~61178~~)。
         * @example `ram:PassRole
        `
         */
        RamRoleName: string;
        /**
         * 实例级别vCPU大小。单位：核。
         * @example `2.0`
         */
        Cpu: number;
        /**
         * 是否自动匹配镜像缓存。
         * 默认值：false。
         * @example `true`
         */
        AutoMatchImageCache: boolean;
        /**
         * 资源组ID
         * @example `rg-acfmwozpmmksakq`
         */
        ResourceGroupId: string;
        /**
         * 容器组实例名称。
         * @example `test`
         */
        ContainerGroupName: string;
        /**
         * 伸缩配置的ID。
         * @example `asc-2zec39vg84usxdocme6a`
         */
        ScalingConfigurationId: string;
        /**
         * CPU物理核心数。仅部分规格支持自定义设置。
         * @example `2`
         */
        CpuOptionsCore: number;
        /**
         * 开启用户日志收集，默认为**false**。
         * @example `false`
         */
        SlsEnable: boolean;
        /**
         * 实例包含的容器列表。
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
             * 容器内工作目录。
             * @example `/usr/local/nginx`
             */
            WorkingDir: string;
            /**
             * 是否开启交互。取值范围：
             * - true：开启。
             * - false：未开启。
             * 例如：当Command配置为/bin/bash时，需要配置为true。
             * 默认值：false。
             * @example `true`
             */
            Tty: boolean;
            /**
             * HttpGet检测的端口。
             * @example `8080`
             */
            LivenessProbeHttpGetPort: number;
            /**
             * GPU个数。
             * @example `2`
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
             * 内存大小。
             * @example `2.0`
             */
            Memory: number;
            /**
             * 容器名称。
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
             * @example `/usr/nginx/
            `
             */
            LivenessProbeHttpGetPath: string;
            /**
             * 容器镜像。
             * @example `registry-vpc.aliyuncs.com/eci_open/alpine:3.5`
             */
            Image: string;
            /**
             * TcpSocket的端口号。
             * @example `80`
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
             * @example `80`
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
             * @example `5`
             */
            ReadinessProbePeriodSeconds: number;
            /**
             * 镜像拉取策略。
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
             * 实例级别vCPU大小。
             * @example `2`
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
             * 暴露端口和协议。
             */
            Ports: {
                /**
                 * 端口号。可能值：1~65535。
                 * @example `8083`
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
             * 挂载数据卷。
             */
            VolumeMounts: {
                /**
                 * 数据卷是否只读。
                 * 默认值：false。
                 * @example `true`
                 */
                ReadOnly: boolean;
                /**
                 * 数据卷子路径。
                 * @example `data2/
                `
                 */
                SubPath: string;
                /**
                 * 挂载数据卷的名称。
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
             * 环境变量的信息。
             */
            EnvironmentVars: {
                /**
                 * 环境变量名。
                 * @example `PATH`
                 */
                Key: string;
                /**
                 * 环境变量值。
                 * @example `/usr/bin/
                `
                 */
                Value: string;
                /**
                 * >该参数未开放使用。
                 * @example `fieldPath`
                 */
                FieldRefFieldPath: string;
            }[];
            /**
             * 容器启动指令。
             */
            Commands: string[];
            /**
             * 使用命令行方式进行健康检查时，在容器内执行的命令。
             */
            LivenessProbeExecCommands: string[];
            /**
             * 容器启动参数。
             */
            Args: string[];
            /**
             * 使用命令行方式进行健康检查时，在容器内执行的命令。
             */
            ReadinessProbeExecCommands: string[];
            /**
             * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
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
             * @example `/healthyz
            `
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
             * @example `10.0.XX.XX
            `
             */
            LifecyclePostStartHandlerTcpSocketHost: string;
            /**
             * 使用 TCPSocket 方式设置postStart回调函数时，TCP Socket检测的端口。
             * @example `80`
             */
            LifecyclePostStartHandlerTcpSocketPort: number;
            /**
             * 使用HTTP请求方式设置preStop回调函数时，接收HTTP Get请求的主机地址。
             * @example `10.0.XX.XX
            `
             */
            LifecyclePreStopHandlerHttpGetHost: string;
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的端口号。
             * @example `80`
             */
            LifecyclePreStopHandlerHttpGetPort: number;
            /**
             * 使用 HTTP 请求方式设置 preStop 回调函数时，HTTP Get 请求检测的路径。
             * @example `/healthyz`
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
             * 是否只读根文件系统，目前仅支持true。
             */
            SecurityContextReadOnlyRootFilesystem: boolean;
            /**
             * 镜像拉取策略。
             * @example `Always`
             */
            ImagePullPolicy: string;
            /**
             * 工作目录。
             * @example `/www`
             */
            WorkingDir: string;
            /**
             * 容器CPU核数。
             * @example `0.5`
             */
            Cpu: number;
            /**
             * 容器镜像。
             * @example `registry-vpc.cn-hongkong.aliyuncs.com/eci_open/nginx:alpine`
             */
            Image: string;
            /**
             * 指定容器使用的GPU个数。
             * @example `1`
             */
            Gpu: number;
            /**
             * 设置运行容器的用户ID。
             * @example `1000`
             */
            SecurityContextRunAsUser: string;
            /**
             * 内存大小。
             * @example `1.0`
             */
            Memory: number;
            /**
             * 容器名称。
             * @example `test-init
            `
             */
            Name: string;
            /**
             * init容器的环境变量信息。
             */
            InitContainerEnvironmentVars: {
                /**
                 * 环境变量名。
                 * @example `PATH`
                 */
                Key: string;
                /**
                 * 环境变量值。
                 * @example `/usr/local/bin
                `
                 */
                Value: string;
                /**
                 * >该参数未开放使用。
                 * @example `path`
                 */
                FieldRefFieldPath: string;
            }[];
            /**
             * init容器端口信息。
             */
            InitContainerPorts: {
                /**
                 * 端口号。取值范围：1~65535。
                 * @example `1024`
                 */
                Port: number;
                /**
                 * 协议类型。取值范围：
                 * - TCP。
                 * - UDP。
                 * @example `UDP`
                 */
                Protocol: string;
            }[];
            /**
             * init容器的挂载点信息数组。
             */
            InitContainerVolumeMounts: {
                /**
                 * 挂载路径是否只读。
                 * 默认值：false。
                 * @example `false`
                 */
                ReadOnly: boolean;
                /**
                 * 数据卷子路径。
                 * @example `/usr/sub/`
                 */
                SubPath: string;
                /**
                 * 挂载数据卷的名称。
                 * @example `test-empty
                `
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
                 * > 容器挂载目录下的内容会被Volume的内容直接覆盖，请谨慎使用。
                 * @example `/usr/share/
                `
                 */
                MountPath: string;
            }[];
            /**
             * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET_ADMIN和NET_RAW。
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
             * 标签键
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
             * DiskVolume的ID。
             * @example `d-xx`
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
             * @example `/share
            `
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
             * FlexVolume对象选项列表。
             * @example `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}
            `
             */
            FlexVolumeOptions: string;
            /**
             * NFS服务器地址。
             * @example `3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com
            `
             */
            NFSVolumeServer: string;
            /**
             * 数据卷名称。
             * @example `default-volume1
            `
             */
            Name: string;
            /**
             * 配置文件路径列表。
             */
            ConfigFileVolumeConfigFileToPaths: {
                /**
                 * 路径
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
                 * 配置文件内容。
                 * @example `bGl1bWk=
                `
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
             * @example `/pod/data
            `
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
             * @example `registry-vpc.cn-shanghai.aliyuncs.com
            `
             */
            Server: string;
            /**
             * 镜像仓库用户名。
             * @example `yourusername`
             */
            UserName: string;
        }[];
        /**
         * DNS配置选项。
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
        SecurityContextSysCtls: {
            /**
             * 实例运行的安全上下文系统名称。
             * @example `kernel.msgmax
            `
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
             * @example `cri-nwj395hgf6f3****
            `
             */
            InstanceId: string;
            /**
             * ACR企业版实例的名称。
             * @example `acr-test
            `
             */
            InstanceName: string;
            /**
             * ACR企业版实例所属地域。
             * @example `cn-hangzhou
            `
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
         * 伸缩配置在伸缩组中的状态。取值范围：
         * - Active：生效状态。伸缩组会使用处于生效状态的伸缩配置自动创建ECI实例。
         * - Inacitve：未生效状态。处于未生效状态的伸缩配置存在于伸缩组中，但伸缩组不会使用此类伸缩配置自动创建ECI实例。
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
         * 数据缓存使用的云盘的性能等级。 建议优先使用ESSD云盘，该云盘的性能等级的可能值：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * >关于ESSD云盘的更多信息，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1
        `
         */
        DataCachePL: string;
        /**
         * 数据缓存使用ESSD AutoPL云盘时，ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}，其中，基准性能=min{1800+50*容量, 50000}。
         * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~368372~~)。
         * @example `40000`
         */
        DataCacheProvisionedIops: number;
        /**
         * 数据缓存使用ESSD AutoPL云盘时，是否开启Burst（性能突发）。取值范围：
         * - true：开启。
         * - false：未开启。
         * 默认值：false。
         * >关于ESSD AutoPL云盘的更多信息，请参见[ESSD AutoPL云盘](~~122389~~)。
         * @example `false`
         */
        DataCacheBurstingEnabled: boolean;
        /**
         * IP地址池ID。
         * @example `pippool-bp187arfugi543y1s****`
         */
        EipPublicIpAddressPoolId: string;
        /**
         * 绑定已有的共享带宽包。
         * @example `cbwp-bp1rxai1z4b1an454xl8m`
         */
        EipCommonBandwidthPackage: string;
        /**
         * 设置EIP的线路类型。取值范围：
         * - BGP（默认值）：BGP（多线）线路
         * - BGP_PRO：BGP（多线）精品线路
         * @example `BGP`
         */
        EipISP: string;
        /**
         * 算力类别。取值为economy时，表示查询经济型规格的实例。
         */
        ComputeCategory: string[];
    };
    /**
     * 伸缩配置YAML输出内容。
     * @example `apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      labels:
        app: nginx
      spec:
        replicas: 3
        selector:
           matchLabels:
            app: nginx
        template:
          metadata:
            labels:
              app: nginx
            annotations:
              k8s.aliyun.com/eip-bandwidth: 10
              k8s.aliyun.com/eci-with-eip: true
            spec:
              containers:
              - name: nginx
                image: nginx:1.14.2
                ports:
                - containerPort: 80`
     */
    Output: string;
}
