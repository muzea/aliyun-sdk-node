export interface CreateReplicationJobRequest {
    /**
     * 迁移源要迁入的目标阿里云地域ID。
     * 例如，您需要迁移源服务器至杭州，则相应的阿里云地域ID为`cn-hangzhou`。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。您可以从客户端生成一个不超过64个ASCII字符的参数值，并将值赋予ClientToken，保证重试请求的幂等性。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 迁移任务名。迁移任务的名称需满足以下要求：
     * - 任务名称必须唯一。
     * - 长度为2~128个英文或中文字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `testMigrationTaskName`
     */
    "Name"?: string;
    /**
     * 迁移任务描述。
     * 长度应为2~128个英文或中文字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `This_is_a_migration_task`
     */
    "Description"?: string;
    /**
     * 迁移源ID。
     * @example `s-bp1e2fsl57knvuug****`
     */
    "SourceId": string;
    /**
     * 迁移任务交付的目标类型。取值范围：
     * - Image：迁移成功后，SMC为您的迁移源生成阿里云镜像。
     * - ContainerImage：迁移成功后，SMC为您的迁移源生成Docker容器镜像。
     * - TargetInstance：迁移成功后，SMC将您的迁移源直接迁移至目标实例。当您设置该参数值时，您需要同时指定`InstanceId`参数。
     * @example `Image`
     */
    "TargetType"?: string;
    /**
     * 迁移任务的执行时间。该参数值的设置需满足以下要求：
     * - 遵循ISO8601标准，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。例如，2018-01-01T12:00:00Z，表示北京时间2018年01月01日20点00分00秒。
     * - 该参数值必须晚于当前时间，并且需要设置在30天以内。
     * >如果该参数值为空，则SMC不会启动迁移任务，需要您调用[StartReplicationJob](~~121823~~)启动任务。
     * @example `2019-06-04T13:35:00Z`
     */
    "ScheduledStartTime"?: string;
    /**
     * 迁移任务的过期时间。取值范围：迁移任务创建时间+7天~迁移任务创建时间+90天。
     * - 过期时间须遵循ISO8601标准，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。例如，2018-01-01T12:00:00Z，表示北京时间2018年01月01日20点00分00秒。
     * - 过期时间设置为空，表示任务无限期有效。
     * - 任务到期后会被标记为过期状态，保存7天，7天后系统会自动清理。
     * 默认值：迁移任务创建时间+30天（表示迁移任务的默认有效期为创建后30天）。
     * @example `2019-06-04T13:35:00Z`
     */
    "ValidTime"?: string;
    /**
     * 迁移任务交付的目标阿里云镜像名称。目标镜像的名称需满足以下要求：
     * - 同一阿里云地域下，镜像名称必须唯一。
     * - 长度为2~128个英文或中文字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * >迁移任务运行过程中，若当前地域已经存在相同名称的镜像，则系统默认给镜像名称添加迁移任务ID（JobId）作为后缀，如：ImageName_j-2zexxxxxxxxxxxxx。
     * @example `testAliCloudImageName`
     */
    "ImageName"?: string;
    /**
     * 目标实例ID。
     * @example `i-bp1f1dvfto1sigz5****`
     */
    "InstanceId"?: string;
    /**
     * 目标阿里云服务器ECS的系统盘大小，单位为GiB。取值范围：20~2048。
     * > 该参数取值需要大于迁移源系统盘实际占用大小，例如，源系统盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
     * @example `80`
     */
    "SystemDiskSize"?: number;
    /**
     * 已配置高速通道服务或者VPN网关的VPC ID。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "VpcId"?: string;
    /**
     * 指定VPC下的虚拟交换机ID。
     * 使用VPC内网迁移时，该参数为必填参数。
     * @example `vsw-bp1ddbrxdlrcbim46****`
     */
    "VSwitchId"?: string;
    /**
     * 复制驱动器的参数信息。参数信息为JSON格式键值对，键值固定。最大长度：2048个字符。
     * 复制驱动器是指，复制源服务器数据到中转实例时所使用的工具。不同复制驱动器支持参数可能不同。复制驱动器SMT目前支持以下参数：
     * - bandwidth_limit：传输速度带宽限制。
     * - compress_level：传输压缩率。
     * - checksum：是否开启checksum校验。
     * 复制驱动器的取值，请参见[DescribeSourceServers](~~121818~~)的返回参数`SourceServers.ReplicationDriver`。
     * @example `{"bandwidth_limit":0,"compress_level":1,"checksum":true}`
     */
    "ReplicationParameters"?: string;
    /**
     * 数据传输网络模式。取值范围：
     * - 0：表示公网传输模式。此时要求您的源服务器能够访问公网，迁云数据从公网传输。
     * - 2：表示内网传输模式，选用此模式必须设置VSwitchId参数（VpcId参数可以不设置，服务内部可以通过接口反查出来）。
     * 默认值：0。
     * @example `0`
     */
    "NetMode"?: number;
    /**
     * 创建一次性迁移任务还是增量迁移任务。取值范围：
     * - true（默认值）：一次性迁移任务。任务创建后，仅执行一次。
     * - false：增量迁移任务。任务创建后，按照您设置的`Frequency`参数值周期性自动执行。使用增量迁移任务，可在业务不暂停的情况下，同步源服务器的增量数据至阿里云，并为源服务器生成任务运行时刻的全量数据镜像。
     * > 该参数值只能在创建迁移任务时指定。参数值一经指定，则无法更改。
     * @example `true`
     */
    "RunOnce"?: boolean;
    /**
     * 增量迁移任务运行的时间间隔，单位：小时。取值范围：1~168。
     * `RunOnce`参数值为false时，该参数为必填参数。
     * 默认值：无。
     * @example `12`
     */
    "Frequency"?: number;
    /**
     * 增量迁移任务默认保留的最大镜像数。取值范围：1~10。
     * `RunOnce`参数值为false时，该参数为必填参数。
     * 默认值：无。
     * @example `10`
     */
    "MaxNumberOfImageToKeep"?: number;
    /**
     * 中转实例的实例规格。
     * 调用[DescribeInstanceTypes](~~25620~~)可查询云服务器ECS提供的实例规格。
     * - 指定该参数后，系统会选择该实例规格创建中转实例。若该实例规格库存不足，则迁移任务创建失败。
     * - 不指定该参数时，系统默认会按照一定顺序选择实例规格来创建中转实例，详情请参见[SMC
     *  FAQ 中转实例规格有哪些](~~121707~~)。
     * @example `ecs.c6.large`
     */
    "InstanceType"?: string;
    /**
     * 实例启动模板ID。
     * @example `lt-bp16jovvln1cgaaq****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板的版本。
     *
     * @example `1`
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
     * 许可证类型。取值范围：
     * - 空值：无许可证。
     * - BYOL：自带许可。
     * 更多信息，请参见[SMC FAQ](~~121707~~)。
     * @example `BYOL`
     */
    "LicenseType"?: string;
    /**
     * 数据盘信息列表。
     */
    "DataDisk"?: {
        /**
         * 目标阿里云服务器ECS的数据盘顺序。初始值为1。取值范围：1~16
         * >您只能为迁移源中存在的数据盘创建目标数据盘。
         * @example `1`
         */
        Index: number;
        /**
         * 分区列表。
         */
        Part: {
            /**
             * 目标数据盘N分区N的大小。单位：Byte。默认为源数据盘分区大小。
             * > - 分区空间大小不能超过数据盘空间大小，并且在同一数据盘下所有分区空间大小之和不能超过数据盘空间大小。
             * - 当`DataDisk.N.Part.N.Device`不为空时，该参数也不能为空。
             * @example `254803968`
             */
            SizeBytes: number;
            /**
             * 数据盘N分区N是否开启块复制。取值范围：
             * - true。
             * - false。
             * 默认值：true。
             * @example `true`
             */
            Block: boolean;
            /**
             * 目标数据盘N分区N对应的分区设备标识。N的实际取值请参考迁移源的分区设备标识。
             * > 当`DataDisk.N.Part.N.SizeBytes`不为空时，该参数也不能为空。
             * @example `0_1`
             */
            Device: string;
        }[];
        /**
         * 目标阿里云服务器ECS的数据盘大小，单位为GiB。取值范围：20~32768。
         * >该参数取值需要大于迁移源数据盘实际占用大小。例如，源数据盘大小为500 GiB，实际占用100 GiB，则该参数取值需大于100 GiB。
         * @example `100`
         */
        Size: number;
    }[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 迁移任务的标签键。N的取值范围：1~20
         * 一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 迁移任务的标签值。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持128个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 系统盘分区信息。
     */
    "SystemDiskPart"?: {
        /**
         * 系统盘分区N大小。单位：Byte。默认为源系统盘分区大小。
         * > - 分区空间大小不能超过系统盘空间大小，并且在系统盘下所有分区空间大小之和不能超过系统盘空间大小。
         * - 当`SystemDiskPart.N.Device`不为空时，该参数也不能为空。
         * @example `254803968`
         */
        SizeBytes: number;
        /**
         * 系统盘分区N是否开启块复制。取值范围：
         * - true。
         * - false。
         * 默认值：true。
         * @example `true`
         */
        Block: boolean;
        /**
         * 目标系统盘分区N设备标识。N的实际取值请参考迁移源的分区设备标识。
         * > 当`SystemDiskPart.N.SizeBytes`不为空时，该参数也不能为空。
         * @example `0_1`
         */
        Device: string;
    }[];
    /**
     * 迁移任务的类型。取值范围：
     * - 0：服务器迁移。
     * - 1：操作系统迁移。
     * - 2：跨可用区迁移。
     * - 3：VMware无代理迁移。
     * @example `0`
     */
    "JobType"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmw3ty5y7****`
     */
    "ResourceGroupId"?: string;
}
