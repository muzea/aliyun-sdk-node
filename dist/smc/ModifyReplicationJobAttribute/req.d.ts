export interface ModifyReplicationJobAttributeRequest {
    /**
     * 迁移任务ID。
     * @example `j-bp19vlwm0tyigbmj****`
     */
    "JobId": string;
    /**
     * 迁移任务名称。迁移任务的名称需满足以下要求：
     * -  任务名称必须唯一。
     * - 长度为2~128个英文或中文字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testMigrationTaskName`
     */
    "Name"?: string;
    /**
     * 迁移任务描述。
     * 长度应为2~128个英文或中文字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `This_is_my_migration_task`
     */
    "Description"?: string;
    /**
     * 迁移交付的目标类型。仅支持在迁移任务启动前修改。取值范围：
     * - Image：迁移成功后，SMC为您的源服务器生成阿里云镜像，您可使用该镜像创建ECS实例达到迁移至阿里云的目的。
     * - ContainerImage：迁移成功后，SMC为您的源服务器生成容器镜像，您可以在容器镜像服务中使用该镜像。
     * - TargetInstance：迁移成功后，SMC将您的迁移源直接迁移至目标实例。当您设置该参数值时，您需要同时指定`InstanceId`参数。
     * > - 该参数的取值不区分大小写。
     * - Windows操作系统和Arm架构操作系统不支持迁移至容器镜像。
     * @example `Image`
     */
    "TargetType"?: string;
    /**
     * 设置迁移任务的执行时间。SMC在指定时间自动为您启动迁移任务。
     * 执行时间遵循ISO8601标准，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。例如，2018-01-01T12:00:00Z，表示北京时间2018年01月01日20点00分00秒。
     * >当执行时间为空时，SMC不自动启动迁移任务，您需要调用[StartReplicationJob](~~121823~~)启动。
     * @example `2019-06-04T13:35:00Z`
     */
    "ScheduledStartTime"?: string;
    /**
     * 迁移任务交付的目标镜像名称。目标镜像的名称需满足以下要求：
     * - 同一阿里云地域下，镜像名称必须唯一。
     * - 长度为2~128个英文或中文字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * >如果迁移任务运行过程中，当前地域已经存在相同名称的镜像，则系统默认在镜像名称后面添加迁移任务ID（JobId）作为后缀，如：ImageName-JobId。
     * @example `testAliCloudImageName`
     */
    "ImageName"?: string;
    /**
     * 目标实例ID。
     * @example `i-bp1f1dvfto1sigz5****`
     */
    "InstanceId"?: string;
    /**
     * 目标阿里云服务器ECS的系统盘大小，单位：GiB。取值范围为20~500。
     * > 参数取值需要大于源服务器系统盘实际占用大小，例如，源系统盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
     * @example `50`
     */
    "SystemDiskSize"?: number;
    /**
     * 增量迁移任务运行的时间间隔，单位：小时。取值范围为1~168。
     * `RunOnce`参数值为false时，该参数为必填参数。
     * @example `10`
     */
    "Frequency"?: number;
    /**
     * 增量迁移任务默认保留的最大镜像数。取值范围为1~10。
     * `RunOnce`参数值为false时，该参数为必填参数。
     * @example `5`
     */
    "MaxNumberOfImageToKeep"?: number;
    /**
     * 中转实例的实例规格。
     * 调用[DescribeInstanceTypes](~~25620~~)可查询云服务器ECS提供的实例规格。
     * - 指定该参数后，系统会选择该实例规格创建中转实例。若该实例规格库存不足，则迁移任务创建失败。
     * - 不指定该参数时，系统会默认按照一定顺序选择实例规格来创建中转实例，详情请参见[SMC
     *  FAQ 中转实例规格有哪些](~~121707~~)。
     * @example `ecs.c5.large`
     */
    "InstanceType"?: string;
    /**
     * 实例启动模板ID。
     * @example `lt-bp16jovvln1cgaaq****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板的版本。
     * @example `Latest`
     */
    "LaunchTemplateVersion"?: string;
    /**
     * 实例RAM角色名称。
     * @example `SMCAdmin`
     */
    "InstanceRamRole"?: string;
    /**
     * Docker的命名空间。关于Docker容器镜像详情请参见[容器镜像服务](~~60744~~)。
     * @example `testNamespace`
     */
    "ContainerNamespace"?: string;
    /**
     * Docker的镜像仓库。关于Docker容器镜像详情请参见[容器镜像服务](~~60744~~)。
     * @example `testRepository`
     */
    "ContainerRepository"?: string;
    /**
     * Docker的镜像标签。关于Docker容器镜像详情请参见[容器镜像服务](~~60744~~)。
     * @example `CentOS:v1`
     */
    "ContainerTag"?: string;
    /**
     * 迁移任务的过期时间。取值范围：迁移任务创建时间+7天~迁移任务创建时间+90天
     * - 过期时间只允许迁移任务在Ready（未开始）、Running（运行中）、Stopped（已暂停）、InError（出错）或Waiting（等待中）状态下修改。
     * - 过期时间须遵循ISO8601标准，并需要使用UTC+0时间，格式为`YYYY-MM-DDThh:mm:ssZ`。例如，2018-01-01T12:00:00Z，表示北京时间2018年01月01日20点00分00秒。
     * - 过期时间设置为空，表示任务无限期有效。
     * - 任务到期后会被标记为过期状态，保存7天，7天后系统会自动清理。
     * 默认值：迁移任务创建时间+30天（表示迁移任务的默认有效期为创建后30天）。
     * @example `2019-06-04T13:35:00Z`
     */
    "ValidTime"?: string;
    /**
     * 系统盘分区列表。
     */
    "SystemDiskPart"?: {
        /**
         * 目标系统盘分区N大小。单位：Byte。默认为源系统盘分区大小。
         * > 分区空间大小不能超过系统盘空间大小，并且在系统盘下所有分区空间大小之和不能超过系统盘空间大小。
         * @example `254803968`
         */
        SizeBytes: number;
        /**
         * 目标系统盘分区N是否开启块复制。取值范围：
         * - true。
         * - false。
         * @example `true`
         */
        Block: boolean;
        /**
         * 目标系统盘分区N设备标识。
         * > N的实际取值请参考迁移源的分区设备标识。
         * @example `0_1`
         */
        Device: string;
    }[];
    /**
     * 数据盘列表。
     */
    "DataDisk"?: {
        /**
         * 目标阿里云服务器ECS的数据盘顺序。取值范围为1~16。
         * 初始值为1。
         * >您只能为源服务器中存在的数据盘创建目标数据盘。
         * @example `1`
         */
        Index: number;
        /**
         * 分区列表。
         */
        Part: {
            /**
             * 目标数据盘N分区N的大小。单位：Byte。默认为源数据盘分区大小。
             * > 分区空间大小不能超过数据盘空间大小，并且在同一数据盘下所有分区空间大小之和不能超过数据盘空间大小。
             * @example `254803968`
             */
            SizeBytes: number;
            /**
             * 目标数据盘N分区N是否开启块复制。取值范围：
             * - true。
             * - false。
             * @example `true`
             */
            Block: boolean;
            /**
             * 目标数据盘N分区N对应的分区设备标识。
             * > N的实际取值请参考迁移源的分区设备标识。
             * @example `0_1`
             */
            Device: string;
        }[];
        /**
         * 目标阿里云服务器ECS的数据盘大小，单位：GiB。取值范围为20~32768。
         * >参数取值需要大于源服务器数据盘实际占用大小。例如，源数据盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
         * @example `100`
         */
        Size: number;
    }[];
    /**
     * 数据传输网络模式。取值范围：
     * - 0：表示公网传输模式。此时要求您的源服务器能够访问公网，迁云数据从公网传输。
     * - 2：表示内网传输模式，选用此模式必须设置VSwitchId参数（VpcId参数可以不设置，服务内部可以通过接口反查出来）。
     * @example `0`
     */
    "NetMode"?: number;
    /**
     * 指定VPC下的虚拟交换机ID。
     * @example `vsw-bp1ddbrxdlrcbim46****`
     */
    "VSwitchId"?: string;
    /**
     * 已配置高速通道服务或者VPN网关的VPC ID。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "VpcId"?: string;
    /**
     * 复制驱动器的参数信息。参数信息为JSON格式键值对，键值固定。最大长度：2048个字符。
     * 复制驱动器是指，复制源服务器数据到中转实例时所使用的工具。不同复制驱动器支持参数可能不同。复制驱动器SMT目前支持以下参数：
     * - bandwidth_limit：传输速度带宽限制。
     * - compress_level：传输压缩率。
     * - checksum：是否开启checksum校验。
     * 复制驱动器的取值，请参见[DescribeSourceServers](~~2402126~~)的返回参数`SourceServers.ReplicationDriver`。
     * @example `{"bandwidth_limit":0,"compress_level":1,"checksum":true}`
     */
    "ReplicationParameters"?: string;
}
