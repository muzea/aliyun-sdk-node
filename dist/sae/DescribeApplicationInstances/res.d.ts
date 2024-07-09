export interface DescribeApplicationInstancesResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 应用实例信息。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 实例总数。
         * @example `10`
         */
        TotalSize: number;
        /**
         * 分页查询时设置的每页数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 应用实例列表。
         */
        Instances: {
            /**
             * 实例开始创建的时间戳。单位：毫秒。
             * @example `1558442609000`
             */
            CreateTimeStamp: number;
            /**
             * 实例所在可用区。
             * @example `vsw-***`
             */
            VSwitchId: string;
            /**
             * 实例运行状态。取值说明如下：
             * - **Error**：实例启动过程中出错。
             * - **CrashLoopBackOff**：容器无法启动，在启动过程中出错，重启后又出错。
             * - **ErrImagePull**：拉取实例中的容器镜像出错。
             * - **ImagePullBackOff**：无法获取容器镜像。
             * - **Pending**：实例等待调度中。
             * - **Unknown**：未知异常。
             * - **Terminating**：终止实例接入中。
             * - **NotFound**：无法找到实例。
             * - **PodInitializing**：实例初始化中。
             * - **Init:0/1**：实例初始化。
             * - **Running**：实例运行中。
             * @example `Running`
             */
            InstanceContainerStatus: string;
            /**
             * 健康检查配置信息。取值说明如下：
             * - **WithoutHealthCheckConfig**：Liveness与Readiness健康检查未配置。
             * - **WithoutLivenessConfig**：Liveness健康检查未配置。
             * - **WithoutReadinessConfig**：Readiness健康检查未配置。
             * - **NotCheckedYet**：实例正在或等待进行健康检查。
             * - **LivenessUnhealthy**：Liveness健康检查失败，实例不健康。
             * - **ReadinessUnhealthy**：Readiness健康检查失败，实例不健康。
             * - **Unhealthy**：Liveness与Readiness健康检查失败，实例不健康。
             * - **Healthy**：健康检查通过，实例健康。
             * @example `WithoutHealthCheckConfig`
             */
            InstanceHealthStatus: string;
            /**
             * 实例重启次数。
             * @example `0`
             */
            InstanceContainerRestarts: number;
            /**
             * 实例所属分组ID。
             * @example `b2a8a925-477a-4ed7-b825-d5e22500****`
             */
            GroupId: string;
            /**
             * 实例内网IP。
             * @example `192.168.X.X`
             */
            InstanceContainerIp: string;
            /**
             * 实例ID。
             * @example `b2a8a925-477a-4ed7-b825-d5e22500****`
             */
            InstanceId: string;
            /**
             * 镜像仓库地址。
             * > 如果您是通过JAR包或WAR包部署，那么由SAE平台所生成的镜像不对外开放下载。
             * @example `registry-vpc.cn-beijing.aliyuncs.com/sae-demo-image/cartservice:1.0`
             */
            ImageUrl: string;
            /**
             * 版本信息。
             * @example `1609939496200`
             */
            PackageVersion: string;
            /**
             * 弹性公网IP。
             * @example `8.129.XX.XXX`
             */
            Eip: string;
            /**
             * 实例创建完成的时间戳。单位：毫秒。
             * @example `1642757283000`
             */
            FinishTimeStamp: number;
            DebugStatus: boolean;
        }[];
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用实例列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
