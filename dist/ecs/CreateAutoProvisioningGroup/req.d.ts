export interface CreateAutoProvisioningGroupRequest {
    /**
     * 弹性供应组所在地域的ID，您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性供应组所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 弹性供应组的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `apg-test`
     */
    "AutoProvisioningGroupName"?: string;
    /**
     * 弹性供应组的交付类型。取值范围：
     * - request：一次性异步交付。供应组仅在启动时异步交付实例集群，调度失败后不再重试。
     * - instant：一次性同步交付。供应组仅在启动时同步创建实例，并在请求响应中返回创建成功的实例列表和创建失败的原因。
     * - maintain：持续供应。供应组在启动时尝试交付实例集群，并监控实时容量，未达到目标容量则尝试继续创建ECS实例。
     * 默认值：maintain。
     * @example `maintain`
     */
    "AutoProvisioningGroupType"?: string;
    /**
     * 创建抢占式实例的策略。取值范围：
     * - lowest-price：成本优化策略。选择价格最低的实例规格。
     * - diversified：均衡可用区分布策略。在扩展启动模板指定的可用区内创建实例，均匀分布到各可用区。
     * - capacity-optimized：容量优化分布策略。根据库存情况，选择最优的实例规格和可用区进行创建。
     * 默认值：lowest-price。
     * @example `diversified`
     */
    "SpotAllocationStrategy"?: string;
    /**
     * 竞价实例中断时的行为。取值范围：
     * - stop：停止实例。
     * - terminate：释放实例。
     * 默认值：terminate。
     * @example `terminate`
     */
    "SpotInstanceInterruptionBehavior"?: string;
    /**
     * 在`SpotAllocationStrategy`为`lowest-price`时生效，表示弹性供应组选择价格最低的实例规格创建实例的数量。
     * 取值范围：低于`LaunchTemplateConfig.N`中N的取值。
     * @example `2`
     */
    "SpotInstancePoolsToUseCount"?: number;
    /**
     * 创建按量付费实例的策略。取值范围：
     * - lowest-price：成本优化策略。选择价格最低的实例规格。
     * - prioritized：优先级策略。按照`LaunchTemplateConfig.N.Priority`设定的优先级创建实例。
     * 默认值：lowest-price。
     * @example `prioritized`
     */
    "PayAsYouGoAllocationStrategy"?: string;
    /**
     * 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。取值范围：
     * - termination：释放缩容的实例。
     * - no-termination：只将缩容的实例移出弹性供应组。
     * 默认值：no-termination。
     * @example `termination`
     */
    "ExcessCapacityTerminationPolicy"?: string;
    /**
     * 弹性供应组的启动时间，和`ValidUntil`共同确定有效时段。
     * 按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 默认值：该接口立即生效的时间戳。
     * @example `2019-04-01T15:10:20Z`
     */
    "ValidFrom"?: string;
    /**
     * 弹性供应组的到期时间，和`ValidFrom`共同确定有效时段。
     * 按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 默认值：2099-12-31T23:59:59Z。
     * @example `2019-06-01T15:10:20Z`
     */
    "ValidUntil"?: string;
    /**
     * 弹性供应组到期时，是否释放组内实例。取值范围：
     * - true：释放组内实例。
     * - false：只将组内实例移出弹性供应组。
     * 默认值：false。
     * @example `true`
     */
    "TerminateInstancesWithExpiration"?: boolean;
    /**
     * 删除弹性供应组时，是否释放组内实例。取值范围：
     * - true：释放组内实例。
     * - false：保留组内实例。
     * 默认值：false。
     * @example `true`
     */
    "TerminateInstances"?: boolean;
    /**
     * 弹性供应组内抢占式实例的最高价格。
     * > 同时设置了`MaxSpotPrice`和`LaunchTemplateConfig.N.MaxPrice`时，以最低值为准。
     * @example `2`
     */
    "MaxSpotPrice"?: number;
    /**
     * 弹性供应组的目标总容量。取值范围：正整数。
     * 总容量必须大于等于`PayAsYouGoTargetCapacity`（指定的按量付费实例目标容量）和`SpotTargetCapacity`（指定的抢占式实例目标容量）取值之和。
     * @example `60`
     */
    "TotalTargetCapacity": string;
    /**
     * 弹性供应组内，按量付费实例的目标容量。取值范围：小于等于`TotalTargetCapacity`的参数取值。
     * @example `30`
     */
    "PayAsYouGoTargetCapacity"?: string;
    /**
     * 弹性供应组内，抢占式实例的目标容量。取值范围：小于等于`TotalTargetCapacity`的参数取值。
     * @example `20`
     */
    "SpotTargetCapacity"?: string;
    /**
     * `PayAsYouGoTargetCapacity`和`SpotTargetCapacity`之和小于`TotalTargetCapacity`时，指定差额容量的计费方式。取值范围：
     * - PayAsYouGo：按量付费实例。
     * - Spot：抢占式实例。
     * 默认值：Spot。
     * @example `Spot`
     */
    "DefaultTargetCapacityType"?: string;
    /**
     * 弹性供应组关联的实例启动模板的ID，您可以调用[DescribeLaunchTemplates](~~73759~~)查询可用的实例启动模板。同时指定启动模板与启动配置信息（`LaunchConfiguration.*`）时，优先使用启动模板。
     * @example `lt-bp1fgzds4bdogu03****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 弹性供应组关联的实例启动模板的版本，您可以调用[DescribeLaunchTemplateVersions](~~73761~~)查询可用的实例启动模板版本。
     * 默认值：启动模板的默认版本。
     * @example `1`
     */
    "LaunchTemplateVersion"?: string;
    /**
     * 弹性供应组的描述信息。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 镜像ID。启动实例时选择的镜像资源，您可以调用[DescribeImages](~~25534~~)查询可以使用的镜像资源。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `m-bp1g7004ksh0oeuc****`
     */
    "LaunchConfiguration.ImageId"?: string;
    /**
     * 实例所属的安全组ID。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `sg-bp15ed6xe1yxeycg****`
     */
    "LaunchConfiguration.SecurityGroupId"?: string;
    /**
     * 是否为I/O优化实例。取值范围：
     * - none：非I/O优化。
     * - optimized：I/O优化。
     * 已停售的实例规格实例默认值是none，其他实例规格默认值是optimized。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `optimized	`
     */
    "LaunchConfiguration.IoOptimized"?: string;
    /**
     * 网络计费类型。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * > 按使用流量计费模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用按固定带宽计费模式。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `PayByTraffic`
     */
    "LaunchConfiguration.InternetChargeType"?: string;
    /**
     * 公网入带宽最大值，单位为Mbit/s。取值范围：
     * - 当公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
     * - 当公网出带宽大于10 Mbit/s时：1~`LaunchConfiguration.InternetMaxBandwidthOut`的取值，默认为`LaunchConfiguration.InternetMaxBandwidthOut`的取值。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `10`
     */
    "LaunchConfiguration.InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100。
     * 默认值：0。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `10`
     */
    "LaunchConfiguration.InternetMaxBandwidthOut"?: number;
    /**
     * 实例名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 默认值：实例的`InstanceId`。
     * 创建多台ECS实例时，您可以批量设置有序的实例名称。具体操作，请参见[批量设置有序的实例名称或主机名称](~~196048~~)。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `k8s-node-[1,4]-alibabacloud`
     */
    "LaunchConfiguration.InstanceName"?: string;
    /**
     * 实例主机名称。限制说明如下：
     * - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
     * - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
     * - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），点之间为一段，每段允许大小写英文字母、数字和短划线（-）。
     * - 不支持同时设置`LaunchConfiguration.HostName`与`LaunchConfiguration.HostNames.N`，否则会返回报错信息。
     * - 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `k8s-node-[1,4]-ecshost`
     */
    "LaunchConfiguration.HostName"?: string;
    /**
     * 实例描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `Instance_Description`
     */
    "LaunchConfiguration.InstanceDescription"?: string;
    /**
     * 密钥对名称。
     * -   Windows实例，忽略该参数。默认为空。
     * -   Linux实例的密码登录方式会被初始化成禁止。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `KeyPair_Name`
     */
    "LaunchConfiguration.KeyPairName"?: string;
    /**
     * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `RAM_Name`
     */
    "LaunchConfiguration.RamRoleName"?: string;
    /**
     * 是否开启安全加固。取值范围：
     * -   Active：启用安全加固，只对公共镜像生效。
     * -   Deactive：不启用安全加固，对所有镜像类型生效。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `Active`
     */
    "LaunchConfiguration.SecurityEnhancementStrategy"?: string;
    /**
     * 实例自定义数据。需要以Base64方式编码，原始数据最多为32 KB。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "LaunchConfiguration.UserData"?: string;
    /**
     * 系统盘的云盘种类。取值范围：
     * -   cloud_efficiency：高效云盘。
     * -   cloud_ssd：SSD云盘。
     * -   cloud_essd：ESSD云盘。
     * -   cloud：普通云盘。
     * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `cloud_ssd`
     */
    "LaunchConfiguration.SystemDiskCategory"?: string;
    /**
     * 系统盘大小。单位为GiB，取值范围：20~500。该参数的取值必须大于或者等于max{20, LaunchConfiguration.ImageId对应的镜像大小}。
     * 默认值：max{40, 参数LaunchConfiguration.ImageId对应的镜像大小}。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `40`
     */
    "LaunchConfiguration.SystemDiskSize"?: number;
    /**
     * 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `cloud_ssdSystem`
     */
    "LaunchConfiguration.SystemDiskName"?: string;
    /**
     * 系统盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `SystemDisk_Description`
     */
    "LaunchConfiguration.SystemDiskDescription"?: string;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0（默认）：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `PL0`
     */
    "LaunchConfiguration.SystemDiskPerformanceLevel"?: string;
    /**
     * 是否使用镜像预设的密码。取值范围：
     * - true：使用。
     * - false：不使用。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `true`
     */
    "LaunchConfiguration.PasswordInherit"?: boolean;
    /**
     * 实例所在的企业资源组ID。同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `rg-bp67acfmxazb4p****`
     */
    "LaunchConfiguration.ResourceGroupId"?: string;
    /**
     * 设置突发性能实例的运行模式。取值范围：
     * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
     * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
     * 默认值：无。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `Standard`
     */
    "LaunchConfiguration.CreditSpecification"?: string;
    /**
     * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ``()`~!@#$%^&*-_+=|{}`[]`:;'<>,.?/``
     * 其中，Windows实例不能以正斜线（/）为密码首字符。
     * 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `EcsV587!`
     */
    "LaunchConfiguration.Password"?: string;
    /**
     * 部署集ID。
     * @example `ds-bp1frxuzdg87zh4p****`
     */
    "LaunchConfiguration.DeploymentSetId"?: string;
    /**
     * 扩展启动模板列表。
     */
    "LaunchTemplateConfig"?: {
        /**
         * 扩展启动模板中，ECS实例加入的虚拟交换机的ID。扩展模板中启动的ECS实例的可用区由虚拟交换机决定。
         * > 设置了`LaunchTemplateConfig`后，`LaunchTemplateConfig.N.VSwitchId`为必选参数。
         * @example `vsw-sn5bsitu4lfzgc5o7****`
         */
        VSwitchId: string;
        /**
         * 扩展启动模板中，抢占式实例的价格上限。
         * > 设置了`LaunchTemplateConfig`后，`LaunchTemplateConfig.N.MaxPrice`为必选参数。
         * @example `3`
         */
        MaxPrice: number;
        /**
         * 扩展启动模板的优先级，取值为0时优先级最高。取值范围：0 ~ +∞。
         * @example `1`
         */
        Priority: number;
        /**
         * 扩展启动模板对应的实例规格，N的取值范围：1~20。取值范围：请参见[实例规格族](~~25378~~)。
         * @example `ecs.g5.large`
         */
        InstanceType: string;
        /**
         * 扩展启动模板中，实例规格的权重。取值越高，单台实例满足计算力需求的能力越大，所需的实例数量越小。取值范围：大于0。
         * 您可以根据指定实例规格的计算力和集群单节点最低计算力得出权重值。假设单节点最低计算力为8 vCPU、60 GiB，则：
         * - 8 vCPU、60 GiB的实例规格权重可以设置为1。
         * - 16 vCPU、120 GiB的实例规格权重可以设置为2。
         * @example `2`
         */
        WeightedCapacity: number;
        /**
         * >该参数正在邀测中，暂不支持使用。
         * @example `false`
         */
        MaxQuantity: number;
        /**
         * 实例规格的vCPU内核数目列表。
         */
        Cores: number[];
        /**
         * 实例规格的内存大小列表。
         */
        Memories: number[];
        /**
         * 实例规格族级别，用于筛选符合要求的实例规格范围。取值范围：
         * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
         * - EnterpriseLevel：企业级。性能稳定，资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
         * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的情况。更多信息，请参见[突发性能实例](~~59977~~)。
         * N的取值范围：1~10。
         * @example `EnterpriseLevel`
         */
        InstanceFamilyLevel: string;
        /**
         * 需要排除的实例规格列表。
         */
        ExcludedInstanceTypes: string[];
        /**
         * 实例规格所属的架构类型列表。
         */
        Architectures: string[];
        /**
         * 是否为性能突发实例规格。取值范围：
         * - Exclude：不包含性能突发实例规格。
         * - Include：包含性能突发实例规格。
         * - Required：只包含性能突发实例规格。
         * 默认值：Include。
         * @example `Include`
         */
        BurstablePerformance: string;
    }[];
    /**
     * 扩展启动模板云盘配置列表。
     */
    "LaunchConfiguration.DataDisk"?: {
        /**
         * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`LaunchConfiguration.DataDisk.N.Category`中的N保持一致。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1（默认）：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 数据盘对应的KMS密钥ID。同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        KmsKeyId: string;
        /**
         * 数据盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `DataDisk_Description`
         */
        Description: string;
        /**
         * 创建数据盘N使用的快照。N的取值范围为1~16。
         * 指定该参数后，参数`LaunchConfiguration.DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `s-bp17441ohwka0yuh****`
         */
        SnapshotId: string;
        /**
         * 第N个数据盘的容量大小，N的取值范围为1~16，单位为GiB。取值范围：
         * - cloud_efficiency：20~32768。
         * - cloud_ssd：20~32768。
         * - cloud_essd：具体取值范围与`LaunchConfiguration.DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：40~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768
         * - cloud：5~2000。
         * > 该参数的取值必须大于等于参数`LaunchConfiguration.DataDisk.N.SnapshotId`指定的快照的大小。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `20`
         */
        Size: number;
        /**
         * 数据盘的挂载点。同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `/dev/vd1`
         */
        Device: string;
        /**
         * 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
         * 默认值：空。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `cloud_ssdData`
         */
        DiskName: string;
        /**
         * 数据盘N的云盘类型。N的取值范围为1~16。取值范围：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - cloud：普通云盘。
         * 对于I/O优化实例，默认值为cloud_efficiency。对于非I/O优化实例，默认值为cloud。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * 数据盘是否随实例释放。取值范围：
         * - true：数据盘随实例释放。
         * - false：数据盘不随实例释放。
         * 默认值：true。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `true`
         */
        DeleteWithInstance: boolean;
        /**
         * 数据盘N是否加密。取值范围：
         * - true：加密。
         * - false：不加密。
         * 默认值：false。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `false`
         */
        Encrypted: boolean;
        EncryptAlgorithm: string;
        ProvisionedIops: number;
        BurstingEnabled: boolean;
    }[];
    /**
     * 扩展启动模板标签列表。
     */
    "LaunchConfiguration.Tag"?: {
        /**
         * 实例的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或`https://`。同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 实例系统盘信息列表。
     */
    "SystemDiskConfig"?: {
        /**
         * 实例系统盘类型。您可通过该参数指定多种候选磁盘类型，指定顺序作为各磁盘类型的优先级顺序，当某一种磁盘不可用时，自动更换磁盘类型。取值范围：
         * -   cloud_efficiency：高效云盘。
         * -   cloud_ssd：SSD云盘。
         * -   cloud_essd：ESSD云盘。
         * -   cloud：普通云盘。
         * @example `cloud_ssd`
         */
        DiskCategory: string;
    }[];
    /**
     * 实例数据盘信息列表。
     */
    "DataDiskConfig"?: {
        /**
         * 实例数据盘类型。您可通过该参数指定多种候选磁盘类型，指定顺序作为各磁盘类型的优先级顺序，当某一种磁盘不可用时，自动更换磁盘类型。取值范围：
         * -   cloud_efficiency：高效云盘。
         * -   cloud_ssd：SSD云盘。
         * -   cloud_essd：ESSD云盘。
         * -   cloud：普通云盘。
         * @example `cloud_efficiency`
         */
        DiskCategory: string;
    }[];
    /**
     * 为一台或多台实例指定不同的主机名称。限制说明如下：
     * - 仅创建一次性同步交付类型的弹性供应组（`AutoProvisioningGroupType=instant`）时，该参数生效。
     * - N表示实例个数，取值范围为1~1000，且需要和TotalTargetCapacity参数值保持一致。
     * - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
     * - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许包含大小写英文字母、数字和短划线（-）。
     * - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），半角句号（.）之间为一段，每段允许包含大小写英文字母、数字和短划线（-）。
     * - 不支持同时设置`LaunchConfiguration.HostName`与`LaunchConfiguration.HostNames.N`，否则会返回报错信息。
     * - 同时指定启动模板与启动配置信息时，优先使用启动模板。
     * @example `ecs-host-01`
     */
    "LaunchConfiguration.HostNames"?: string[];
    /**
     * 弹性供应组的目标最小容量。取值范围：正整数。
     * 当您设置该参数后，需要注意：
     * - 仅创建一次性同步交付类型的弹性供应组（`AutoProvisioningGroupType=instant`）时，该参数生效。
     * - 如果当前地域下的实例库存小于该参数值，则会导致调用接口失败，不会创建实例。
     * - 如果当前地域下的实例库存大于该参数值，则按照已设置的其他参数值正常创建实例。
     * @example `20`
     */
    "MinTargetCapacity"?: string;
    /**
     * 实例所属的安全组列表。
     */
    "LaunchConfiguration.SecurityGroupIds"?: string[];
    /**
     * 实例的系统盘信息。同时指定启动模板与启动配置信息时，优先使用启动模板。
     */
    "LaunchConfiguration.SystemDisk"?: {
        /**
         * 系统盘N是否加密。取值范围：
         * - true：加密。
         * - false：不加密。
         * 默认值：false。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `false`
         */
        Encrypted: string;
        /**
         * 系统盘对应的KMS密钥ID。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40****`
         */
        KMSKeyId: string;
        /**
         * 系统盘加密算法。取值范围：
         * - aes-256。
         * - sm4-128。
         * 默认值：aes-256。
         * 同时指定启动模板与启动配置信息时，优先使用启动模板。
         * @example `aes-256`
         */
        EncryptAlgorithm: string;
        ProvisionedIops: number;
        BurstingEnabled: boolean;
    };
    /**
     * 该参数暂未开放使用。
     */
    "LaunchConfiguration.Arn"?: {
        /**
         * 该参数暂未开放使用。
         * @example `acs:ram::123456789012****:role/adminrole`
         */
        Rolearn: string;
        /**
         * 该参数暂未开放使用。
         * @example `34458433936495****:alice`
         */
        RoleType: string;
        /**
         * 该参数暂未开放使用。
         * @example `123456789012****`
         */
        AssumeRoleFor: number;
    }[];
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `false`
     */
    "HibernationOptionsConfigured"?: boolean;
    /**
     * 按量付费实例的自动释放时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`。
     * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
     * - 最短释放时间为当前时间半小时之后。
     * - 最长释放时间不能超过当前时间三年。
     * @example `2018-01-01T12:05:00Z`
     */
    "LaunchConfiguration.AutoReleaseTime"?: string;
    /**
     * 镜像族系名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `hangzhou-daily-update`
     */
    "LaunchConfiguration.ImageFamily"?: string;
    /**
     * 弹性供应组绑定的标签。
     */
    "Tag"?: {
        /**
         * 弹性供应组的标签键。
         * N 的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持 128 个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 弹性供应组的标签值。
         * N 的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持 128 个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
