export interface DescribeServerlessJobsResponse {
    /**
     * 本次请求条件下的数据总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * Serverless作业详细信息列表。
     */
    JobInfos: {
        /**
         * Serverless作业ID或子任务ID（数组作业）。
         * @example `5`
         */
        JobId: string;
        /**
         * Serverless作业名。
         * @example `testjob`
         */
        JobName: string;
        /**
         * Serverless作业状态。可能的值：
         * - Pending: 排队中。
         * - Initing：初始化中。
         * - Running：运行中。
         * - Succeeded：已完成。
         * - Canceled：已取消。
         * - Failed：运行失败。
         * @example `Running`
         */
        State: string;
        /**
         * Serverless作业的调度优先级。
         * @example `9`
         */
        Priority: number;
        /**
         * 执行Serverless作业的队列名。
         * @example `comp`
         */
        Queue: string;
        /**
         * 执行Serverless作业的用户名。
         * @example `testuser`
         */
        User: string;
        /**
         * Serverless作业提交时间戳。
         * @example `1647423718`
         */
        SubmitTime: number;
        /**
         * Serverless作业开始时间戳。
         * @example `1647427667`
         */
        StartTime: number;
        /**
         * Serverless作业结束时间戳。
         * @example `1662016121`
         */
        EndTime: number;
        /**
         * Serverless作业最近修改时间戳。
         * @example `1663831441000`
         */
        LastModifyTime: number;
        /**
         * 是否是数组作业。
         * @example `false`
         */
        IsArrayJob: boolean;
        /**
         * 数组作业属性。
         */
        ArrayProperties: {
            /**
             * 数组作业索引的起始值
             * @example `1`
             */
            IndexStart: number;
            /**
             * 数组作业索引的结束值。
             * @example `5`
             */
            IndexEnd: number;
            /**
             * 数组作业索引的间隔。
             * @example `2`
             */
            IndexStep: number;
        };
        /**
         * Serverless作业容器组实例信息列表。
         */
        ContainerGroups: {
            /**
             * 容器组实例ID。
             * @example `eci-bp1jrgfqqy54kg5hc****`
             */
            ContainerGroupId: string;
            /**
             * 容器组实例名称。
             * @example `test`
             */
            ContainerGroupName: string;
            /**
             * 实例状态。取值范围：
             * - Pending：启动中
             * - Running：运行中
             * - Succeeded：运行成功
             * - Failed：运行失败
             * - Scheduling：创建中
             * - ScheduleFailed：创建失败
             * - Restarting：重启中
             * - Updating：更新中
             * - Terminating：终止中
             * - Expired：过期
             * @example `Running`
             */
            Status: string;
            /**
             * 指定的ECS实例规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 实例的抢占策略。取值范围：
             * - NoSpot（默认）：正常按量付费节点。
             * - SpotWithPriceLimit：设置上限价格的抢占式节点。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 抢占式实例的每小时最高价格。
             * 仅当SpotStrategy为SpotWithPriceLimit时返回。
             * @example `0.025`
             */
            SpotPriceLimit: number;
            /**
             * 容器的vCPU大小。
             * @example `2`
             */
            Cpu: number;
            /**
             * 实例级别内存大小。单位为GiB。
             * @example `4.0`
             */
            Memory: number;
            /**
             * 容器组包含的容器列表。
             */
            Containers: {
                /**
                 * 容器启动参数。
                 */
                Args: string[];
                /**
                 * 容器启动命令。
                 */
                Commands: string[];
                /**
                 * 容器的vCPU大小。
                 * @example `2.0`
                 */
                Cpu: number;
                /**
                 * 容器当前状态。
                 */
                CurrentState: {
                    /**
                     * 容器状态详情。
                     * @example `working`
                     */
                    DetailStatus: string;
                    /**
                     * 容器运行退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 容器运行结束时间。
                     * @example `2018-08-02T15:00:00Z`
                     */
                    FinishTime: string;
                    /**
                     * 容器状态信息。
                     * @example `Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)`
                     */
                    Message: string;
                    /**
                     * 容器状态Reason。
                     * @example `Started`
                     */
                    Reason: string;
                    /**
                     * 容器状态信号。
                     * @example `1`
                     */
                    Signal: number;
                    /**
                     * 容器运行开始时间。
                     * @example `2019-12-19T12:05:02Z
                    `
                     */
                    StartTime: string;
                    /**
                     * 作业状态。可能值：
                     * - Waiting
                     * - Running
                     * - Terminated
                     * @example `Terminated
                    `
                     */
                    State: string;
                };
                /**
                 * 环境变量。
                 */
                EnvironmentVars: {
                    /**
                     * 环境变量名。
                     * @example `PATH
                    `
                     */
                    Key: string;
                    /**
                     * 环境变量值。
                     * @example `/usr/bin/
                    `
                     */
                    Value: string;
                    /**
                     * 环境变量值的来源。 如果值不为空，则无法使用。
                     */
                    ValueFrom: {
                        /**
                         * 指定字段。
                         */
                        FieldRef: {
                            /**
                             * 字段的路径。
                             * @example `status.podIP`
                             */
                            FieldPath: string;
                        };
                    };
                }[];
                /**
                 * GPU个数。
                 * @example `1`
                 */
                Gpu: number;
                /**
                 * 容器镜像。
                 * @example `HPL`
                 */
                Image: string;
                /**
                 * 镜像拉取策略。可能值：
                 * - Always：总是拉取。每次都拉取镜像。
                 * - IfNotPresent：按需拉取。优先使用本地镜像，本地没有镜像时则拉取镜像。
                 * - Never：从不拉取。使用本地镜像，不拉取镜像。
                 * @example `Always`
                 */
                ImagePullPolicy: string;
                /**
                 * 存活探针。
                 */
                LivenessProbe: {
                    /**
                     * 执行命令。
                     */
                    Execs: string[];
                    /**
                     * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败）。默认为3次。
                     * @example `3`
                     */
                    FailureThreshold: number;
                    /**
                     * HttpGet。
                     */
                    HttpGet: {
                        /**
                         * HttpGet检测的路径。
                         * @example `/usr/nginx/
                        `
                         */
                        Path: string;
                        /**
                         * HttpGet检测的端口。
                         * @example `80`
                         */
                        Port: number;
                        /**
                         * HTTP或HTTPS。
                         * @example `HTTP`
                         */
                        Scheme: string;
                    };
                    /**
                     * 检查开始执行的时间，以容器启动完成为起点计算。
                     * @example `10`
                     */
                    InitialDelaySeconds: number;
                    /**
                     * 检查执行的周期。默认为10秒，最小为1秒。
                     * @example `5`
                     */
                    PeriodSeconds: number;
                    /**
                     * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前必须为1。
                     * @example `1`
                     */
                    SuccessThreshold: number;
                    /**
                     * TcpSocket。
                     */
                    TcpSocket: {
                        /**
                         * 主机名。
                         * @example `1.2.3.4
                        `
                         */
                        Host: string;
                        /**
                         * 端口号。
                         * @example `80`
                         */
                        Port: number;
                    };
                    /**
                     * 检查超时的时间，默认为1秒，最小为1秒。
                     * @example `10`
                     */
                    TimeoutSeconds: number;
                };
                /**
                 * 实例级别内存大小。单位为GiB。
                 * @example `4.0`
                 */
                Memory: number;
                /**
                 * 容器名称。
                 * @example `HPL`
                 */
                Name: string;
                /**
                 * 暴露端口和协议。
                 */
                Ports: {
                    /**
                     * 端口号。可能值：1~65535。
                     * @example `8080`
                     */
                    Port: number;
                    /**
                     * 协议类型。
                     * @example `TCP`
                     */
                    Protocol: string;
                }[];
                /**
                 * 上一次状态。
                 */
                PreviousState: {
                    /**
                     * 状态详情。
                     * @example `working`
                     */
                    DetailStatus: string;
                    /**
                     * 容器运行退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 容器运行结束时间。
                     * @example `2018-08-02T15:00:00Z`
                     */
                    FinishTime: string;
                    /**
                     * 容器状态信息。
                     * @example `Back-off 5m0s restarting failed container=test pod=test_eci-xxx(xxx)`
                     */
                    Message: string;
                    /**
                     * 容器状态Reason。
                     * @example `Completed`
                     */
                    Reason: string;
                    /**
                     * 容器状态信号。
                     * @example `1`
                     */
                    Signal: number;
                    /**
                     * 容器运行开始时间。
                     * @example `2018-08-02T15:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 容器状态。可能值：
                     * - Waiting：启动中
                     * - Running：运行中
                     * - Terminated：运行终止
                     * @example `Terminated`
                     */
                    State: string;
                };
                /**
                 * 应用业务探针（即就绪探针），用于检查容器是否已经就绪，可以为请求提供服务。
                 */
                ReadinessProbe: {
                    /**
                     * 使用命令行方式进行健康检查时，在容器内执行的命令。
                     */
                    Execs: string[];
                    /**
                     * 从上次检查成功后认定检查失败的检查次数阈值（必须是连续失败），默认为3。
                     * @example `3`
                     */
                    FailureThreshold: number;
                    /**
                     * 使用HTTP请求方式进行健康检查。
                     */
                    HttpGet: {
                        /**
                         * HttpGet检测的路径。
                         * @example `/usr/local`
                         */
                        Path: string;
                        /**
                         * HttpGet检测的端口号。
                         * @example `8080`
                         */
                        Port: number;
                        /**
                         * HTTP／HTTPS。
                         * @example `HTTP`
                         */
                        Scheme: string;
                    };
                    /**
                     * 检查开始执行的时间，以容器启动完成为起点计算。
                     * @example `10`
                     */
                    InitialDelaySeconds: number;
                    /**
                     * 检查执行的周期，默认为10秒，最小为1秒。
                     * @example `5`
                     */
                    PeriodSeconds: number;
                    /**
                     * 从上次检查失败后重新认定检查成功的检查次数阈值（必须是连续成功），默认为1。当前必须为1
                     * @example `1`
                     */
                    SuccessThreshold: number;
                    /**
                     * 使用TCP Socket方式进行健康检查。
                     */
                    TcpSocket: {
                        /**
                         * Host。
                         * @example `1.2.3.4`
                         */
                        Host: string;
                        /**
                         * 端口号。
                         * @example `8888`
                         */
                        Port: number;
                    };
                    /**
                     * 检查超时的时间，默认为1秒，最小为1秒。
                     * @example `1`
                     */
                    TimeoutSeconds: number;
                };
                /**
                 * 指定容器是否已通过其就绪探针。
                 * @example `true`
                 */
                Ready: boolean;
                /**
                 * 重启次数。
                 * @example `5`
                 */
                RestartCount: number;
                /**
                 * 容器运行的安全上下文。
                 */
                SecurityContext: {
                    /**
                     * 容器内的进程所具备的特定权限。
                     */
                    Capability: {
                        /**
                         * 容器内的进程所具备的特定权限。
                         */
                        Adds: string[];
                    };
                    /**
                     * 是否只读根文件系统，目前仅支持True。
                     * @example `true`
                     */
                    ReadOnlyRootFilesystem: boolean;
                    /**
                     * 用于运行容器进程入口点的UID。
                     * @example `1558`
                     */
                    RunAsUser: number;
                };
                /**
                 * 此容器是否应在容器运行时为标准输入分配缓冲区。如果未设置，则容器中标准输入的读取值将导致EOF。默认为false。
                 * @example `true`
                 */
                Stdin: boolean;
                /**
                 * 当标准输入为true时，标准输入流将在多个附加会话中保持开启状态。如果StdinOnce设为true，标准输入在容器开启时被打开，在首个客户端附加到标准输入之前都为空，然后会一直保持开启状态，接收数据，直到客户端连接断开，此时标准输入被关闭，在容器重启前一直保持关闭状态。
                 * @example `true`
                 */
                StdinOnce: boolean;
                /**
                 * 是否开启交互。默认为false。例如：当Command配置为/bin/bash时，需要配置为true。
                 * @example `false`
                 */
                Tty: boolean;
                /**
                 * 挂载的数据卷信息。
                 */
                VolumeMounts: {
                    /**
                     * 挂载目录，容器的挂载目录下的内容被Volume的内容直接覆盖。
                     * @example `/usr/share/`
                     */
                    MountPath: string;
                    /**
                     * 数据卷的挂载传播设置。挂载传播允许将Container挂载的卷共享到同一Pod中的其他Container，甚至可以共享到同一节点上的其他Pod。可能值：
                     * - None：该卷不感知任何后续在此卷或其子目录上执行的挂载操作。
                     * - HostToContainer：该卷将会感知到后续在此卷或其子目录上的挂载操作。
                     * - Bidirectional：和HostToContainer类似，能感知挂载操作。另外，该卷将被传播回主机和使用同一卷的所有Pod的所有容器。
                     * @example `None`
                     */
                    MountPropagation: string;
                    /**
                     * 数据卷名称。
                     * @example `test-empty`
                     */
                    Name: string;
                    /**
                     * 是否只读。
                     * @example `false`
                     */
                    ReadOnly: boolean;
                    /**
                     * 数据卷下的子目录。方便实例将同一个数据卷下的不同目录挂载到容器的不同目录。
                     * @example `/usr/sub`
                     */
                    SubPath: string;
                }[];
                /**
                 * 工作目录。
                 * @example `/usr/local/nginx`
                 */
                WorkingDir: string;
            }[];
            /**
             * 数据卷信息。
             */
            Volumes: {
                /**
                 * 配置文件路径列表。
                 */
                ConfigFileVolumeConfigFileToPaths: {
                    /**
                     * 配置文件内容 (32KB)。
                     * @example `hello world`
                     */
                    Content: string;
                    /**
                     * 相对文件路径。
                     * @example `/usr/bin/`
                     */
                    Path: string;
                }[];
                /**
                 * DiskVolume的ID。
                 * @example `d-xxxx`
                 */
                DiskVolumeDiskId: string;
                /**
                 * 数据卷类型。
                 * @example `xfs`
                 */
                DiskVolumeFsType: string;
                /**
                 * EmptyDir数据卷的存储媒介。默认为空，表示使用node文件系统。支持配置为以下值：
                 * - Memory：表示使用内存。
                 * - LocalRaid0：表示将本地盘组成RAID 0。该取值仅适用于创建本地盘实例并挂载本地盘的场景。更多信息，请参见[创建本地盘实例](~~114664~~)。
                 * @example `Memory`
                 */
                EmptyDirVolumeMedium: string;
                /**
                 * EmptyDir数据卷的大小。取值请带上单位，建议使用Gi或Mi
                 * @example `256Mi`
                 */
                EmptyDirVolumeSizeLimit: string;
                /**
                 * 用于FlexVolume的驱动程序名称。
                 * @example `flexvolume`
                 */
                FlexVolumeDriver: string;
                /**
                 * 挂载的文件系统类型，默认取决于FlexVolume的script。
                 * @example `ntfs`
                 */
                FlexVolumeFsType: string;
                /**
                 * FlexVolume对象选项列表。
                 * @example `[nolock,tcp,noresvport]`
                 */
                FlexVolumeOptions: string;
                /**
                 * NFS数据卷路径。
                 * @example `/eci`
                 */
                NFSVolumePath: string;
                /**
                 * 是否只读。
                 * @example `false`
                 */
                NFSVolumeReadOnly: boolean;
                /**
                 * NFS服务器地址。
                 * @example `0eafxxxxx-xxxxx.cn-hangzhou.nas.aliyuncs.com`
                 */
                NFSVolumeServer: string;
                /**
                 * 数据卷名称。
                 * @example `test-empty`
                 */
                Name: string;
                /**
                 * 数据卷类型，可能值：
                 * - EmptyDirVolume
                 * - NFSVolume
                 * - ConfigFileVolume
                 * - FlexVolume
                 * @example `EmptyDirVolume`
                 */
                Type: string;
            }[];
            /**
             * 事件信息，上限50。
             */
            Events: {
                /**
                 * 事件数量。
                 * @example `20`
                 */
                Count: number;
                /**
                 * 事件起始时间。
                 * @example `2018-08-02T15:00:00Z`
                 */
                FirstTimestamp: string;
                /**
                 * 事件结束时间。
                 * @example `2018-08-02T15:00:00Z
                `
                 */
                LastTimestamp: string;
                /**
                 * 事件消息。
                 * @example `Started container`
                 */
                Message: string;
                /**
                 * 事件的归属对象名。
                 * @example `test-xxx`
                 */
                Name: string;
                /**
                 * 事件名。
                 * @example `Created`
                 */
                Reason: string;
                /**
                 * 事件类型。可能值：
                 * - Normal
                 * - Warning
                 * @example `Normal`
                 */
                Type: string;
            }[];
            /**
             * 接到请求后的系统创建时间。UTC时间，RFC3339标准。
             * @example `2018-08-02T15:00:00Z`
             */
            CreationTime: string;
            /**
             * 容器全部成功退出后的时间。UTC时间，RFC3339标准。
             * @example `2019-12-11T04:33:42Z`
             */
            SucceededTime: string;
            /**
             * 由于账户欠费导致实例运行失败的时间。UTC时间，RFC3339标准。
             * @example `2018-08-02T15:00:00Z`
             */
            ExpiredTime: string;
            /**
             * 实例运行失败的时间。UTC时间，RFC 3339标准。
             * @example `2018-08-02T15:00:00Z`
             */
            FailedTime: string;
            /**
             * 折扣。
             * @example `9`
             */
            Discount: number;
            /**
             * DNS配置信息。
             */
            DnsConfig: {
                /**
                 * DNS服务器IP地址列表。
                 */
                NameServers: string[];
                /**
                 * 对象选项列表，每个对象由Name和Value（可选）构成。
                 */
                Options: {
                    /**
                     * 对象变量名。
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
                 * DNS搜索域列表。
                 */
                Searches: string[];
            };
            /**
             * 容器组运行的安全上下文。
             */
            EciSecurityContext: {
                /**
                 * sysctl参数。
                 */
                Sysctls: {
                    /**
                     * sysctl参数名。
                     * @example `kernel.msgmax`
                     */
                    Name: string;
                    /**
                     * sysctl参数值。
                     * @example `65536`
                     */
                    Value: string;
                }[];
            };
            /**
             * 弹性网卡ID。
             * @example `eni-bp14rzqi6fd8satm****`
             */
            EniInstanceId: string;
            /**
             * 临时存储空间大小。单位为：GiB。
             * @example `20`
             */
            EphemeralStorage: number;
            /**
             * 自定义实例内一个容器的Hostname映射。
             */
            HostAliases: {
                /**
                 * 主机信息。
                 */
                Hostnames: string[];
                /**
                 * IP地址。
                 * @example `192.0.XX.XX`
                 */
                Ip: string;
            }[];
            /**
             * Init容器列表。
             */
            InitContainers: {
                /**
                 * 启动参数。
                 */
                Args: string[];
                /**
                 * 启动命令。
                 */
                Command: string[];
                /**
                 * vCPU大小。
                 * @example `1.0`
                 */
                Cpu: number;
                /**
                 * 当前状态。
                 */
                CurrentState: {
                    /**
                     * 状态详情。
                     * @example `working`
                     */
                    DetailStatus: string;
                    /**
                     * 容器退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 容器运行结束时间。
                     * @example `2018-08-02T15:00:00Z`
                     */
                    FinishTime: string;
                    /**
                     * 事件消息。
                     * @example `Created container`
                     */
                    Message: string;
                    /**
                     * 容器状态Reason。
                     * @example `Started`
                     */
                    Reason: string;
                    /**
                     * 容器状态信号。
                     * @example `1`
                     */
                    Signal: number;
                    /**
                     * 容器运行开始时间。
                     * @example `2018-08-02T15:00:00Z`
                     */
                    StartTime: string;
                    /**
                     * 容器状态。可能值：
                     * - Waiting
                     * - Running
                     * - Terminated
                     * @example `Running`
                     */
                    State: string;
                };
                /**
                 * 环境变量。
                 */
                EnvironmentVars: {
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
                     * 环境变量值的来源。 如果值不为空，则无法使用。
                     */
                    ValueFrom: {
                        /**
                         * 指定的字段。
                         */
                        FieldRef: {
                            /**
                             * 指定的版本中选择字段的路径，目前只支持 `status.podIP`。
                             * @example `status.podIP`
                             */
                            FieldPath: string;
                        };
                    };
                }[];
                /**
                 * GPU个数。
                 * @example `1`
                 */
                Gpu: number;
                /**
                 * 镜像。
                 * @example `nginx`
                 */
                Image: string;
                /**
                 * 镜像拉取策略。
                 * @example `Always`
                 */
                ImagePullPolicy: string;
                /**
                 * Init容器内存大小。单位为GiB。
                 * @example `2.0`
                 */
                Memory: number;
                /**
                 * 容器名称。
                 * @example `Init-xxx`
                 */
                Name: string;
                /**
                 * 暴露端口和协议。
                 */
                Ports: {
                    /**
                     * 端口号。可能值：1~65535。
                     * @example `8888`
                     */
                    Port: number;
                    /**
                     * 协议类型。
                     * @example `TCP`
                     */
                    Protocol: string;
                }[];
                /**
                 * 上一次状态。
                 */
                PreviousState: {
                    /**
                     * 状态详情。
                     * @example `working`
                     */
                    DetailStatus: string;
                    /**
                     * 容器运行退出码。
                     * @example `0`
                     */
                    ExitCode: number;
                    /**
                     * 容器运行结束时间。
                     * @example `2019-12-24T05:35:44Z`
                     */
                    FinishTime: string;
                    /**
                     * 容器状态信息。
                     * @example `Started container`
                     */
                    Message: string;
                    /**
                     * 容器状态Reason。
                     * @example `completed`
                     */
                    Reason: string;
                    /**
                     * 容器状态信号。
                     * @example `1`
                     */
                    Signal: number;
                    /**
                     * 容器运行开始时间。
                     * @example `2019-12-24T05:35:44Z`
                     */
                    StartTime: string;
                    /**
                     * 容器状态，枚举值：Waiting，Running，Terminated。
                     * @example `Terminated`
                     */
                    State: string;
                };
                /**
                 * 指定容器是否已通过其就绪探针。
                 * @example `true`
                 */
                Ready: boolean;
                /**
                 * 重启次数。
                 * @example `5`
                 */
                RestartCount: number;
                /**
                 * 容器运行的安全上下文。
                 */
                SecurityContext: {
                    /**
                     * 容器内的进程所具备的特定权限。
                     */
                    Capability: {
                        /**
                         * 容器内的进程所具备的特定权限。
                         */
                        Adds: string[];
                    };
                    /**
                     * 是否只读根文件系统，目前仅支持True。
                     * @example `true`
                     */
                    ReadOnlyRootFilesystem: boolean;
                    /**
                     * 用于运行容器进程入口点的UID。
                     * @example `1557`
                     */
                    RunAsUser: number;
                };
                /**
                 * Init容器挂载的数据卷信息。
                 */
                VolumeMounts: {
                    /**
                     * 挂载目录，容器的挂载目录下的内容被Volume的内容直接覆盖。
                     * @example `/usr/share/`
                     */
                    MountPath: string;
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
                     * 数据卷名称，同 Volume 中的 Name。
                     * @example `test-empty`
                     */
                    Name: string;
                    /**
                     * 默认值为False。
                     * @example `false`
                     */
                    ReadOnly: boolean;
                }[];
                /**
                 * 工作目录。
                 * @example `/usr/test`
                 */
                WorkingDir: string;
            }[];
            /**
             * 公网IP。
             * @example `192.0.XX.XX`
             */
            InternetIp: string;
            /**
             * 内网IP。
             * @example `172.16.XX.XX`
             */
            IntranetIp: string;
            /**
             * IPv6地址。
             * @example `2001:XXXX:4:4:4:4:4:4`
             */
            Ipv6Address: string;
            /**
             * 实例RAM角色名称，ECI与ECS共用实例RAM角色，具体操作，请参见[通过API使用实例RAM角色](~~61178~~)。
             * @example `ram:PassRole`
             */
            RamRoleName: string;
            /**
             * 实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例所属的资源组ID。如果创建实例时没有指定资源组，实例将自动加入账号下的默认资源组。
             * @example `rg-aekzh43v*****`
             */
            ResourceGroupId: string;
            /**
             * 实例重启策略。取值范围：
             * - Always：总是重启
             * - Never：从不重启
             * - OnFailure：失败时重启
             * @example `Never`
             */
            RestartPolicy: string;
            /**
             * 安全组ID。
             * @example `sg-bp12ujq5zpxuyjfo3o8r`
             */
            SecurityGroupId: string;
            /**
             * 实例标签信息。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `name`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `test-xh`
                 */
                Value: string;
            }[];
            /**
             * 该参数未开放使用。
             * @example `i-xxx`
             */
            TenantEniInstanceId: string;
            /**
             * 该参数未开放使用。
             * @example `10.10.XX.XX`
             */
            TenantEniIp: string;
            /**
             * 该参数未开放使用。
             * @example `sg-xxx`
             */
            TenantSecurityGroupId: string;
            /**
             * 该参数未开放使用。
             * @example `vsw-xxx`
             */
            TenantVSwitchId: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1vzjjflab6wvjox****`
             */
            VSwitchId: string;
            /**
             * 实例所属的VPC ID。
             * @example `vpc-1vzjjflab6wvjox****`
             */
            VpcId: string;
            /**
             * 实例所属的可用区。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
        }[];
    }[];
}
