export interface ListInstancesResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果说明。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
    /**
     * 实例总数。
     * @example `35`
     */
    TotalCount: number;
    /**
     * 本分页中请求的实例列表。
     */
    Instances: {
        /**
         * 工作空间ID。
         * @example `40823`
         */
        WorkspaceId: string;
        /**
         * 工作空间名称。
         * @example `training_data`
         */
        WorkspaceName: string;
        /**
         * 实例ID。
         * @example `dsw-730xxxxxxxxxx`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `training_data`
         */
        InstanceName: string;
        /**
         * 实例对应的ECS规格。
         * @example `ecs.c6.large`
         */
        EcsSpec: string;
        /**
         * 实例状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 实例Url。
         * @example `https://dsw-cn-shanghai.data.aliyun.com/notebook.htm?instance=39772#/`
         */
        InstanceUrl: string;
        /**
         * Jupyterlab Url。
         * @example `https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/lab/`
         */
        JupyterlabUrl: string;
        /**
         * Web IDE url。
         * @example `https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/ide/`
         */
        WebIDEUrl: string;
        /**
         * 终端url。
         * @example `https://dsw-gateway-cn-shanghai.aliyun.com/dsw-39772/tty/`
         */
        TerminalUrl: string;
        /**
         * 累计运行时间，单位为毫秒。
         * @example `3600000`
         */
        AccumulatedRunningTimeInMs: number;
        /**
         * 镜像ID。
         * @example `image-05cefd0be2exxxx`
         */
        ImageId: string;
        /**
         * 镜像地址。
         * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
         */
        ImageUrl: string;
        /**
         * 镜像名称。
         * @example `py36_cpu_tf1.12_ubuntu`
         */
        ImageName: string;
        /**
         * 实例创建时间。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtCreateTime: string;
        /**
         * 实例修改时间。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtModifiedTime: string;
        /**
         * 用户ID。
         * @example `1612285282502324`
         */
        UserId: string;
        /**
         * 用户名称。
         * @example `测试用户`
         */
        UserName: string;
        /**
         * 数据集集合。
         */
        Datasets: {
            /**
             * 数据集ID。
             * @example `d-vsqjvsjp4orp5l206u`
             */
            DatasetId: string;
            /**
             * 容器内挂载路径。
             * @example `/mnt/data`
             */
            MountPath: string;
            /**
             * 指定的数据集的Uri。
             * @example `oss://bucket-name.oss-cn-shanghai-internal.aliyuncs.com/data/path/`
             */
            Uri: string;
            /**
             * 数据集的挂载属性。
             * @example `{
              "fs.oss.download.thread.concurrency": "10",
              "fs.oss.upload.thread.concurrency": "10",
              "fs.jindo.args": "-oattr_timeout=3 -oentry_timeout=0 -onegative_timeout=0 -oauto_cache -ono_symlink"
            }`
             */
            Options: string;
            /**
             * 挂载配置项类型
             * @example `FastReadWrite`
             */
            OptionType: string;
        }[];
        /**
         * User VPC配置。
         */
        UserVpc: {
            /**
             * VPC ID。
             * @example `vpc-xxxxx`
             */
            VpcId: string;
            /**
             * 交换机ID。
             * @example `vsw-xxxxx`
             */
            VSwitchId: string;
            /**
             * 安全组ID。
             * @example `sg-xxxxxx`
             */
            SecurityGroupId: string;
            /**
             * 扩展网络打通网段列表
             * @example `["192.168.0.1/24", "192.168.1.1/24"]`
             */
            ExtendedCIDRs: string[];
            /**
             * Default Route
             * @example `eth0 | eth1`
             */
            DefaultRoute: string;
            /**
             * 端口透出信息。
             */
            ForwardInfos: any[];
        };
        /**
         * 定时关机任务。
         */
        InstanceShutdownTimer: {
            /**
             * 实例ID。
             * @example `dsw-730xxxxxxxxxx`
             */
            InstanceId: string;
            /**
             * 创建时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtCreateTime: string;
            /**
             * 修改时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtModifiedTime: string;
            /**
             * 设定关机时间。
             * @example `2021-01-12T14:36:01Z`
             */
            DueTime: string;
            /**
             * 剩余关机时间，单位为毫秒。
             * @example `3600000`
             */
            RemainingTimeInMs: number;
        };
        /**
         * 实例错误代码。
         * @example `Internal Error`
         */
        ReasonCode: string;
        /**
         * 实例错误原因。
         * @example `ImagePullBackOff`
         */
        ReasonMessage: string;
        /**
         * 支付类型，可能值：
         * - PayAsYouGo：后付费（后付费/按量付费）。
         * - Subscription：预付费（预付费/包年包月）。
         * @example `PayAsYouGo`
         */
        PaymentType: string;
        /**
         * 最新保存的用户镜像。
         */
        LatestSnapshot: {
            /**
             * 镜像ID。
             * @example `image-05cefd0be2exxxx`
             */
            ImageId: string;
            /**
             * 镜像名称。
             * @example `py36_cpu_tf1.12_ubuntu`
             */
            ImageName: string;
            /**
             * 镜像Url。
             * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
             */
            ImageUrl: string;
            /**
             * 镜像仓库Url。
             * @example `https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images`
             */
            RepositoryUrl: string;
            /**
             * 快照创建时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtCreateTime: string;
            /**
             * 快照修改时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtModifiedTime: string;
            /**
             * 实例快照错误代码。
             * @example `Internal Error`
             */
            ReasonCode: string;
            /**
             * 实例快照错误消息。
             * @example `ImagePullBackOff`
             */
            ReasonMessage: string;
            /**
             * 实例快照状态。
             * @example `Pushing`
             */
            Status: string;
        };
        /**
         * 实例计算类型。可能值：
         * - CPU
         * - GPU
         * @example `CPU`
         */
        AcceleratorType: string;
        /**
         * 工作空间内是否他人可见。可能值：
         * - PRIVATE（默认值）：表示工作空间内自己以及管理员可见。
         * - PUBLIC：为工作空间所有用户可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
        /**
         * 环境变量。
         * @example `{userName: "Chris"}`
         */
        EnvironmentVariables: any;
        /**
         * 资源ID，预付费时填写。
         * @example `dsw-123456789`
         */
        ResourceId: string;
        /**
         * 资源规格。
         * - 后付费场景，资源规格为购买的ECS规格。
         * - 预付费场景，资源规格为请求的CPU核数与内存大小。
         * @example `resource_group`
         */
        ResourceName: string;
        /**
         * 优先级，在分配资源给实例时，优先级越高的实例越优先。
         * @example `1`
         */
        Priority: number;
        /**
         * 资源配置，弹内或者轻量化时使用。
         * @example `{"CPU":"4","Memory":"8Gi","SharedMemory":"4Gi","GPU":"1","GPUType":"Tesla-V100-16G"}`
         */
        RequestedResource: {
            /**
             * CPU核数。
             * @example `32`
             */
            CPU: string;
            /**
             * 内存大小。
             * @example `32`
             */
            Memory: string;
            /**
             * 共享内存大小。
             * @example `32`
             */
            SharedMemory: string;
            /**
             * GPU数量。
             * @example `4`
             */
            GPU: string;
            /**
             * GPU显卡类型。
             * @example `v100`
             */
            GPUType: string;
        };
        /**
         * 用户自定义标签。
         * @example `{'foo': 'bar'}`
         */
        Labels: {
            /**
             * 用户定义标签键值。
             * @example `stsTokenOwner`
             */
            Key: string;
            /**
             * 用户定义标签值。
             * @example `123xxxxxxxx`
             */
            Value: string;
        }[];
        /**
         * 实例闲置关机规则。
         * @example `{"InstanceId":"dsw-05cefd0be2e5a278","CpuPercentThreshold":20,"GpuPercentThreshold":10,"MaxIdleTimeInMinutes":120,"IdleTimeInMinutes":30}`
         */
        IdleInstanceCuller: {
            /**
             * 实例ID。
             * @example `dsw-730xxxxxxxxxx`
             */
            InstanceId: string;
            /**
             * CPU使用率阈值，单位是百分比，取值1~100，低于此值则认为实例当前处于闲置。
             * @example `20`
             */
            CpuPercentThreshold: number;
            /**
             * GPU使用率阈值，单位是百分比，取值1~100。如果实例为GPU类型，则此参数生效。CPU和GPU同时低于阈值则认为指定实例处于闲置。
             * @example `10`
             */
            GpuPercentThreshold: number;
            /**
             * 闲置等待时间阈值，单位是分钟。如果闲置时长超过此值，将自动停止DSW实例。
             * @example `60`
             */
            MaxIdleTimeInMinutes: number;
            /**
             * 实例当前闲置时长，单位是分钟。
             * @example `30`
             */
            IdleTimeInMinutes: number;
        };
        /**
         * 实例快照列表。
         * @example `[]`
         */
        InstanceSnapshotList: {
            /**
             * 镜像ID。
             * @example `image-05cefd0be2exxxx`
             */
            ImageId: string;
            /**
             * 镜像名称。
             * @example `py36_cpu_tf1.12_ubuntu`
             */
            ImageName: string;
            /**
             * 镜像Url。
             * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
             */
            ImageUrl: string;
            /**
             * 镜像仓库Url。
             * @example `https://cr.console.aliyun.com/repository/cn-hangzhou/zouxu/kf/images`
             */
            RepositoryUrl: string;
            /**
             * 快照创建时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtCreateTime: string;
            /**
             * 快照修改时间。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtModifiedTime: string;
            /**
             * 实例快照错误代码。
             * @example `Internal Error`
             */
            ReasonCode: string;
            /**
             * 实例快照错误消息。
             * @example `ImagePullBackOff`
             */
            ReasonMessage: string;
            /**
             * 实例快照状态。
             * @example `Pushing`
             */
            Status: string;
        }[];
        /**
         * 实例的云盘列表
         * @example `[]`
         */
        CloudDisks: {
            /**
             * 云盘容量
             * @example `30Gi`
             */
            Capacity: string;
            /**
             * 云盘使用方式, rootfs 挂载为rootfs
             * @example `rootfs`
             */
            SubType: string;
            /**
             * 容器内挂载云盘路径
             * @example `/mmt/workspace`
             */
            MountPath: string;
            /**
             * 云盘内被挂载目录路径
             * @example `/workspace`
             */
            Path: string;
        }[];
        /**
         * 工作空间指向的存储，如果不指定，则依次使用NAS，CloudDisk或者本地磁盘
         * @example `d-123456789`
         */
        WorkspaceSource: string;
        /**
         * NVIDIA 驱动配置
         * @example `535.54.03`
         */
        Driver: string;
        Affinity: {
            CPU: {
                Enable: boolean;
            };
        };
    }[];
}
