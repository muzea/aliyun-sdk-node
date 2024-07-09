export interface UpdateContainerGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定需要更新的ECI实例ID，即容器组ID。
     * @example `eci-2zelg8vwnlzdhf8hv****`
     */
    "ContainerGroupId": string;
    /**
     * 实例重启策略。取值范围：
     * - Always：总是重启
     * - Never：从不重启
     * - OnFailure：失败时重启
     * @example `Always`
     */
    "RestartPolicy"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参阅[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 实例级别（容器组）的vCPU数。
     * @example `2.0`
     */
    "Cpu"?: number;
    /**
     * 实例级别的（容器组）的内存数。单位为GiB。
     * @example `4.0`
     */
    "Memory"?: number;
    /**
     * 所属资源组ID。
     * @example `rg-2df3isufhi38****	`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `name`
         */
        Key: string;
        /**
         * 标签值。
         * @example `hxh`
         */
        Value: string;
    }[];
    /**
     * 数据卷列表。
     */
    "Volume"?: {
        /**
         * 数据卷名称。
         * @example `test-empty`
         */
        Name: string;
        /**
         * 数据卷类型。取值范围：
         * - EmptyDirVolume：EmptyDir类型的数据卷，表示临时目录。
         * - ConfigFileVolume：ConfigFile类型的数据卷，表示配置文件。
         * - NFSVolume：NFS类型的数据卷，表示网络文件系统，例如NAS。
         * - FlexVolume：使用FlexVolume插件扩展存储类型，支持挂载云盘、NAS和OSS。
         * - HostPathVolume：HostPath类型的数据卷，表示宿主机上的文件或目录。该取值暂未开放使用。
         * @example `EmptyDirVolume`
         */
        Type: string;
        /**
         * NFS数据卷要挂载的路径。
         * @example `/`
         */
        NFSVolume.Path: string;
        /**
         * NFS数据卷的挂载点地址。
         * @example `071e349b04-bsd39.cn-hangzhou.nas.aliyuncs.com`
         */
        NFSVolume.Server: string;
        /**
         * NFS数据卷的读取权限。取值范围：
         * - true：NFS Volume具有只读权限。
         * - false：NFS Volume具有可读可写权限。
         * @example `false`
         */
        NFSVolume.ReadOnly: boolean;
        /**
         * ConfigFile数据卷对应的配置文件信息。
         */
        ConfigFileVolume.ConfigFileToPath: {
            /**
             * 配置文件的相对文件路径。
             * @example `jin/test`
             */
            Path: string;
            /**
             * 配置文件的内容。采用Base64编码。
             * @example `bGl1bWk=`
             */
            Content: string;
        }[];
        /**
         * EmptyDir数据卷的存储媒介，默认为空，使用node文件系统；支持配置为Memory，表示使用内存。
         * @example `Memory`
         */
        EmptyDirVolume.Medium: string;
        /**
         * EmptyDir数据卷的大小。取值请带上单位，建议使用Gi或Mi。
         * @example `256Mi`
         */
        EmptyDirVolume.SizeLimit: string;
        /**
         * 使用FlexVolume插件挂载云盘时，云盘的文件系统类型。支持的类型包括ext4、ext3、xfs、vfat。默认为ext4。
         * @example `ext4`
         */
        FlexVolume.FsType: string;
        /**
         * 使用FlexVolume插件挂载数据卷时的驱动类型。取值范围如下：
         * - alicloud/disk：挂载云盘。
         * - alicloud/nas：挂载NAS。
         * - alicloud/oss：挂载OSS。
         * @example `alicloud/disk`
         */
        FlexVolume.Driver: string;
        /**
         * FlexVolume对象选项列表。为KV形式，采用JSON传递。例如通过FlexVolume挂载云盘时，Options表示云盘的配置参数。更多信息，请参见[数据卷概述](~~90672~~)。
         * @example `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`
         */
        FlexVolume.Options: string;
        /**
         * HostPath数据卷在宿主机上的路径。
         * > 该参数暂未开放使用。
         * @example `/tmp`
         */
        HostPathVolume.Path: string;
        /**
         * HostPath数据卷的类型。取值范围：
         *  - Directory：目录。
         * - File：文件。
         * > 该参数暂未开放使用。
         * @example `Directory`
         */
        HostPathVolume.Type: string;
    }[];
    /**
     * DNS搜索域列表。
     * @example `my.dns.search.suffix`
     */
    "DnsConfig.Search"?: string[];
    /**
     * DNS服务器的IP地址列表。
     * @example `1.2.3.4`
     */
    "DnsConfig.NameServer"?: string[];
    /**
     * DNS配置信息。
     */
    "DnsConfig.Option"?: {
        /**
         * DNS配置的选项变量值。
         * @example `2`
         */
        Value: string;
        /**
         * DNS配置的选项变量名。
         * @example `ndots`
         */
        Name: string;
    }[];
    /**
     * 指定新的容器组配置信息。
     */
    "Container"?: {
        /**
         * 检查超时的时间。默认为1秒，最小为1秒。
         * @example `5`
         */
        ReadinessProbe.TimeoutSeconds: number;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。
         * @example `1`
         */
        ReadinessProbe.SuccessThreshold: number;
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET\_ADMIN和NET\_RAW。
         * > NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Add: string[];
        /**
         * TcpSocket检测的端口。
         * @example `5000`
         */
        ReadinessProbe.TcpSocket.Port: number;
        /**
         * 使用HTTP请求方式进行健康检查时，HTTP Get请求对应的协议类型，取值范围：
         * - HTTP
         * - HTTPS
         * @example `HTTP`
         */
        ReadinessProbe.HttpGet.Scheme: string;
        /**
         * 检查执行的周期。默认为10秒，最小为1秒。
         * @example `10`
         */
        LivenessProbe.PeriodSeconds: number;
        /**
         * 是否只读根文件系统。取值目前仅支持：true。
         * @example `true`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 容器的环境变量信息列表。
         */
        EnvironmentVar: {
            /**
             * 容器的环境变量名。
             * @example `PATH`
             */
            Key: string;
            /**
             * 容器的环境变量值。
             * @example `/usr/bin/local/`
             */
            Value: string;
            /**
             * 使用Pod字段作为环境变量。目前仅支持status.podIP。
             * @example `status.podIP`
             */
            FieldRef.FieldPath: string;
        }[];
        /**
         * TcpSocket检测的端口。
         * @example `80`
         */
        LivenessProbe.TcpSocket.Port: number;
        /**
         * 是否开启交互。默认为false，如果Command为/bin/bash类型，需要设置为true。
         * @example `false`
         */
        Tty: boolean;
        /**
         * 容器工作目录。
         * @example `/usr/share/`
         */
        WorkingDir: string;
        /**
         * 容器启动参数。最多10个。
         * @example `hello`
         */
        Arg: string[];
        /**
         * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。默认为false。
         * @example `false`
         */
        Stdin: boolean;
        /**
         * 检查开始执行的时间。以容器启动完成为起点开始计算。
         * @example `10`
         */
        LivenessProbe.InitialDelaySeconds: number;
        /**
         * 容器的数据卷信息列表。
         */
        VolumeMount: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。取值范围：
             * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
             * - HostToContainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
             * - Bidirectional：和HostToContainerr类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * 默认值：None
             * @example `None`
             */
            MountPropagation: string;
            /**
             * 容器挂载的目录。容器挂载目录下的内容会被volume的内容直接覆盖，请谨慎使用。
             * @example `/usr/share/`
             */
            MountPath: string;
            /**
             * 是否只读。默认值：false
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 数据卷的子目录，方便Pod将同一个Volume下不同目录挂载到容器不同目录。
             * @example `/usr/share/sub/`
             */
            SubPath: string;
            /**
             * 容器挂载的数据卷名称。从ECI实例（容器组）挂载的数据卷中选择，即取值范围为配置的Volume.N.Name参数。
             * @example `test-empty`
             */
            Name: string;
        }[];
        /**
         * 镜像拉取策略。取值范围：
         * - Always：总是拉取。每次都拉取镜像。
         * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
         * - Never：从不拉取。使用本地镜像，不拉取镜像。
         * @example `Never`
         */
        ImagePullPolicy: string;
        /**
         * 当标准输入为true时，标准输入流将在多个附加会话中保持开启状态。如果StdinOnce设为true，标准输入在容器开启时被打开，在首个客户端附加到标准输入之前都为空，然后会一直保持开启状态，接收数据，直到客户端连接断开，此时标准输入被关闭，在容器重启前一直保持关闭状态。
         * @example `true`
         */
        StdinOnce: boolean;
        /**
         * 使用TCPSocket方式设置preStop回调函数时，TCP Socket检测的端口。
         * @example `80`
         */
        LifecyclePreStopHandlerTcpSocketPort: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePostStartHandlerHttpGetScheme: string;
        /**
         * 检查执行的周期，默认为10秒，最小为1秒。
         * @example `3`
         */
        ReadinessProbe.PeriodSeconds: number;
        /**
         * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功）。默认为1次，当前必须为1次。
         * @example `1`
         */
        LivenessProbe.SuccessThreshold: number;
        /**
         * 容器启动命令。最多20个，单个命令支持256个字符。
         * @example `echo`
         */
        Command: string[];
        /**
         * 使用HTTP请求方式设置postStart回调函数时，接收HTTP Get请求的主机地址。
         * @example `hide`
         */
        LifecyclePostStartHandlerHttpGetHost: string;
        /**
         * HttpGet检测的路径。
         * @example `/usr/`
         */
        ReadinessProbe.HttpGet.Path: string;
        /**
         * 容器内检测命令。
         */
        LivenessProbe.Exec.Command: string[];
        /**
         * 使用TCPSocket方式设置postStart回调函数时，TCP Socket检测的端口。
         * @example `1`
         */
        LifecyclePostStartHandlerTcpSocketPort: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePostStartHandlerHttpGetPath: string;
        /**
         * 使用命令行方式设置postStart回调函数时，在容器内执行的命令。
         * @example `hide`
         */
        LifecyclePostStartHandlerExec: string[];
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的路径。
         * @example `/healthyz`
         */
        LifecyclePreStopHandlerHttpGetPath: string;
        /**
         * 容器端口号。取值范围：1~65535
         */
        Port: {
            /**
             * TCP/UDP。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 端口号。取值范围：1~65535
             * @example `8080`
             */
            Port: number;
        }[];
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
         * @example `HTTP`
         */
        LivenessProbe.HttpGet.Scheme: string;
        /**
         * 生成的http请求头中，有效的http请求头信息集合。
         */
        LifecyclePostStartHandlerHttpGetHttpHeaders: {
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求的请求参数值。
             * @example `test`
             */
            Value: string;
            /**
             * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求的请求参数。
             * @example `testValue`
             */
            Name: string;
        }[];
        /**
         * HttpGet检测的端口号。
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
         * @example `10`
         */
        ReadinessProbe.InitialDelaySeconds: number;
        /**
         * 使用命令行方式设置preStop回调函数时，在容器内执行的命令。
         * @example `hide`
         */
        LifecyclePreStopHandlerExec: string[];
        /**
         * 容器内存大小。
         * @example `2.0`
         */
        Memory: number;
        /**
         * 容器名称。
         * @example `jenkins`
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
         * @example `jenkins`
         */
        Image: string;
        /**
         * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求检测的端口号。
         * @example `1`
         */
        LifecyclePreStopHandlerHttpGetPort: number;
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。默认为3次。
         * @example `3`
         */
        LivenessProbe.FailureThreshold: number;
        /**
         * 容器内检测的命令。
         */
        ReadinessProbe.Exec.Command: string[];
        /**
         * 生成的http请求头信息。
         */
        LifecyclePreStopHandlerHttpGetHttpHeader: {
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求的请求参数值。
             * @example `testValue`
             */
            Value: string;
            /**
             * 使用HTTP请求方式设置preStop回调函数时，HTTP Get请求的请求参数。
             * @example `test`
             */
            Name: string;
        }[];
        /**
         * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。默认为3次。
         * @example `3`
         */
        ReadinessProbe.FailureThreshold: number;
        /**
         * 容器vCPU大小。
         * @example `1.0`
         */
        Cpu: number;
        /**
         * HttpGet检测的端口号。
         * @example `8080`
         */
        LivenessProbe.HttpGet.Port: number;
        /**
         * HttpGet检测的路径。
         * @example `/usr/local/bin`
         */
        LivenessProbe.HttpGet.Path: string;
        /**
         * 检查超时的时间。默认为1秒，最小为1秒。
         * @example `1`
         */
        LivenessProbe.TimeoutSeconds: number;
        /**
         * 用于运行容器进程入口点的UID。
         * @example `1377`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 使用HTTP请求方式设置postStart回调函数时，HTTP Get请求检查的端口号。
         * @example `1`
         */
        LifecyclePostStartHandlerHttpGetPort: number;
    }[];
    /**
     * 指定新的Init容器信息。
     */
    "InitContainer"?: {
        /**
         * 为容器内的进程授予某些特定的权限。目前仅支持配置为NET\_ADMIN和NET\_RAW。
         * > NET_RAW默认不支持，需提交工单申请。
         */
        SecurityContext.Capability.Add: string[];
        /**
         * Init容器镜像。
         * @example `nginx`
         */
        Image: string;
        /**
         * 挂载数据卷信息列表。
         */
        VolumeMount: {
            /**
             * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。取值范围：
             * - None：该卷不感知到任何后续在此卷或其任何子目录上执行的挂载变化。
             * - HostToContainer：该卷将会感知到主机后续针对此卷或其任何子目录的挂载操作。
             * - Bidirectional：和HostToContainer类似。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
             * 默认值：None
             * @example `None`
             */
            MountPropagation: string;
            /**
             * Init容器挂载目录。容器挂载目录下的内容将被volume的内容直接覆盖，请谨慎使用。
             * @example `/pod/data`
             */
            MountPath: string;
            /**
             * 是否只读。默认值：false
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 数据卷的子目录，方便Pod将同一个Volume下不同目录挂载到容器不同目录。
             * @example `data2/`
             */
            SubPath: string;
            /**
             * Init容器挂载的数据卷名称。从ECI实例（容器组）挂载的数据卷中选择，即取值范围为配置的Volume.N.Name参数。
             * @example `default-volume1`
             */
            Name: string;
        }[];
        /**
         * 端口号。取值范围：1~65535。
         */
        Port: {
            /**
             * TCP/UDP。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * Init容器端口号 。取值范围：1~65535。
             * @example `9000`
             */
            Port: number;
        }[];
        /**
         * 容器运行的根文件系统是否为只读。目前仅支持配置为true。
         * @example `true`
         */
        SecurityContext.ReadOnlyRootFilesystem: boolean;
        /**
         * 容器的环境变量信息列表。
         */
        EnvironmentVar: {
            /**
             * Init容器的环境变量名。
             * @example `PATH`
             */
            Key: string;
            /**
             * Init容器的环境变量值。
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
         * 镜像拉取策略。取值范围：
         * - Always：总是拉取。每次都拉取镜像。
         * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
         * - Never：从不拉取。使用本地镜像，不拉取镜像。
         * @example `IfNotPresent`
         */
        ImagePullPolicy: string;
        /**
         * 当标准输入为true时，标准输入流将在多个附加会话中保持开启状态。如果StdinOnce设为true，标准输入在容器开启时被打开，在首个客户端附加到标准输入之前都为空，然后会一直保持开启状态，接收数据，直到客户端连接断开，此时标准输入被关闭，在容器重启前一直保持关闭状态。
         * @example `true`
         */
        StdinOnce: boolean;
        /**
         * Init容器vCPU大小。
         * @example `2.0`
         */
        Cpu: number;
        /**
         * 是否开启交互。默认为false，如果Command为/bin/bash类型时，需要设置为true。
         * @example `true`
         */
        Tty: boolean;
        /**
         * Init容器工作目录。
         * @example `/bin/local/`
         */
        WorkingDir: string;
        /**
         * Init容器指令。
         * @example `/bin/sh sleep`
         */
        Command: string[];
        /**
         * Init容器启动参数。
         * @example `10`
         */
        Arg: string[];
        /**
         * 设置运行容器的用户ID。
         * @example `1000`
         */
        SecurityContext.RunAsUser: number;
        /**
         * 指定Init容器使用的GPU个数。
         * @example `1`
         */
        Gpu: number;
        /**
         * Init容器内存大小。
         * @example `4.0`
         */
        Memory: number;
        /**
         * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。默认为false。
         * @example `false`
         */
        Stdin: boolean;
        /**
         * Init容器名称。
         * @example `init-nginx`
         */
        Name: string;
    }[];
    /**
     * 镜像仓库凭证信息列表。
     */
    "ImageRegistryCredential"?: {
        /**
         * 镜像仓库密码。
         * @example `yourpassword`
         */
        Password: string;
        /**
         * 不带`http://`或`https://`前缀的镜像仓库地址。
         * @example `registry.cn-shanghai.aliyuncs.com/ecitest/nginx:alpine`
         */
        Server: string;
        /**
         * 镜像仓库用户名。
         * @example `yourname`
         */
        UserName: string;
    }[];
    /**
     * ACR企业版实例信息。
     */
    "AcrRegistryInfo"?: {
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
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * ACR企业版实例的域名。默认为相应实例的所有域名。支持指定个别域名，多个以半角逗号分隔。
         */
        Domain: string[];
    }[];
    /**
     * 更新类型。取值范围：
     * - RenewUpdate：全量更新，更新时需填写相关的所有参数。如果参数是一个List，不支持单独更新某个item，如果参数是一个结构体，不支持单独更新某个内部成员。
     * - IncrementalUpdate：增量更新，更新时可以只填某一需要更新的参数，其它相关参数保持原有不变。
     * 默认为RenewUpdate。
     * @example `RenewUpdate`
     */
    "UpdateType"?: string;
}
