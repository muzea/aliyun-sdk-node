export interface CreateLaunchTemplateRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 启动模板的标签对信息。
     */
    "TemplateTag"?: {
        /**
         * 启动模板的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 启动模板的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 实例启动模板名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testLaunchTemplateName`
     */
    "LaunchTemplateName": string;
    /**
     * 实例启动模板版本描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testVersionDescription`
     */
    "VersionDescription"?: string;
    /**
     * 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](~~25534~~)查询您可以使用的镜像资源。
     * @example `win2008r2_64_ent_sp1_en-us_40G_alibase_20170915.vhd`
     */
    "ImageId"?: string;
    /**
     * 镜像来源。取值范围：
     * - system：阿里云提供的公共镜像。
     * - self：您创建的自定义镜像。
     * - others：其他阿里云用户共享给您的镜像。
     * - marketplace：<props="china"><ph>[云市场](https://market.aliyun.com/)</ph></props><props="intl"><ph>[云市场](https://marketplace.alibabacloud.com/)</ph></props>提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。
     * @example `system`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 是否使用镜像预设的密码。
     * > 使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * 实例的资源规格。更多信息，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组最多能管理1000台实例。
     * > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。
     * @example `sg-bp15ed6xe1yxeycg****`
     */
    "SecurityGroupId"?: string;
    /**
     * 专有网络VPC ID。
     * @example `vpc-bp12433upq1y5scen****`
     */
    "VpcId"?: string;
    /**
     * 创建VPC类型实例时需要指定虚拟交换机ID。
     * @example `vsw-bp1s5fnvk4gn2tws0****`
     */
    "VSwitchId"?: string;
    /**
     * 实例名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。默认值为实例的`InstanceId`。
     * 创建多台ECS实例时，您可以批量设置有序的实例名称，并且可以包含方括号（[]）和逗号（,）。具体操作，请参见[批量设置有序的实例名称或主机名称](~~196048~~)。
     * @example `k8s-node-[1,4]-alibabacloud`
     */
    "InstanceName"?: string;
    /**
     * 实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testECSDescription`
     */
    "Description"?: string;
    /**
     * 公网入带宽最大值，单位为Mbit/s。取值范围：
     * - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
     * - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
     * @example `10`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围为0~100。
     * @example `10`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 云服务器的主机名。
     * -   半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
     * -   Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
     * -   其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），半角句号之间为一段，每段允许大小写英文字母、数字和短划线（-）。
     * @example `testHostName`
     */
    "HostName"?: string;
    /**
     * 实例所属的可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 系统盘的云盘种类。取值范围：
     * -   cloud：普通云盘。
     * -   cloud_efficiency：高效云盘。
     * -   cloud_ssd：SSD云盘。
     * -   cloud_essd：ESSD云盘。您可以通过参数`SystemDisk.PerformanceLevel`设置云盘的性能等级。
     * - cloud_auto：ESSD AutoPL 云盘
     * - cloud_essd_entry：ESSD Entry 云盘。
     * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 系统盘大小，单位为GiB。取值范围：
     * - cloud：20~500。
     * - 其他云盘种类：20~2048。
     * 该参数的取值必须大于或者等于max{20, ImageSize}。
     * @example `40`
     */
    "SystemDisk.Size"?: number;
    /**
     * 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testSystemDiskName`
     */
    "SystemDisk.DiskName"?: string;
    /**
     * 系统盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testSystemDiskDescription`
     */
    "SystemDisk.Description"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "SystemDisk.Iops"?: number;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0（默认）：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL0`
     */
    "SystemDisk.PerformanceLevel"?: string;
    /**
     * 系统盘是否随实例释放。取值范围：
     * - true：随实例释放。
     * - false：不随实例释放。
     * 默认值：true。
     * @example `true`
     */
    "SystemDisk.DeleteWithInstance"?: boolean;
    /**
     * 系统盘采用的自动快照策略ID。
     * @example `sp-gc7c37d4ylw7mtnk****`
     */
    "SystemDisk.AutoSnapshotPolicyId"?: string;
    /**
     * ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。
     * 基准性能=min{1,800+50*容量, 50,000}
     * > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)和[修改ESSD AutoPL云盘预配置信息](~~413275~~)。
     * @example `50000`
     */
    "SystemDisk.ProvisionedIops"?: number;
    /**
     * 是否开启Burst（性能突发）。取值范围：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "SystemDisk.BurstingEnabled"?: boolean;
    /**
     * 是否为I/O优化实例。取值范围：
     * -   none：非I/O优化。
     * -   optimized：I/O优化。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 实例的计费方式。取值范围：
     * - PrePaid：包年包月。选择该类付费方式时，<props="china"><ph>您必须确认自己的账号支持余额支付和信用支付</ph></props><props="intl"><ph>您必须确认自己的账号支持信用支付</ph></props>，否则将返回`InvalidPayMethod`的错误提示。
     * - PostPaid：按量付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 购买资源的时长，单位为：月。当创建实例时，参数`InstanceChargeType`取值为`PrePaid`时该参数才生效且为必选值。取值范围：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 网络计费方式。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 是否启用实例操作系统配置。
     * > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `false`
     */
    "EnableVmOsConfig"?: boolean;
    /**
     * 实例网络类型。取值范围：
     * - classic：经典网络。
     * - vpc：专有网络VPC。
     * @example `vpc`
     */
    "NetworkType"?: string;
    /**
     * 实例自定义数据，需要以Base64方式编码，原始数据最多为32 KB。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * 密钥对名称。
     * -   Windows实例，忽略该参数。即使填写了该参数，仍旧只执行`Password`的内容。
     * -   Linux实例的密码登录方式会被初始化成禁止。
     * @example `testKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `testRamRoleName`
     */
    "RamRoleName"?: string;
    /**
     * 自动释放时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
     * - 最短释放时间为当前时间半小时之后。
     * - 最长释放时间不能超过当前时间三年。
     * @example `2018-01-01T12:05:00Z`
     */
    "AutoReleaseTime"?: string;
    /**
     * 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
     * -   NoSpot：正常按量付费实例。
     * -   SpotWithPriceLimit：设置上限价格的抢占式实例。
     * -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。
     * @example `0.97`
     */
    "SpotPriceLimit"?: number;
    /**
     * 抢占式实例的保留时长，单位为小时。 默认值：1。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * > 当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时该参数生效。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 实例、块存储和弹性网卡所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 启动模板所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "TemplateResourceGroupId"?: string;
    /**
     * 是否为操作系统开启安全加固。取值范围：
     * -   Active：启用安全加固，只对公共镜像生效。
     * -   Deactive：不启用安全加固，对所有镜像类型生效。
     * @example `Deactive`
     */
    "SecurityEnhancementStrategy"?: string;
    /**
     * 实例私网IP地址。
     * 专有网络VPC类型ECS实例设置私网IP地址时，必须从虚拟交换机（`VSwitchId`）的空闲网段中选择。
     * @example `10.1.**.**`
     */
    "PrivateIpAddress"?: string;
    /**
     * 部署集ID。
     * @example `ds-bp1brhwhoqinyjd6****`
     */
    "DeploymentSetId"?: string;
    /**
     * 为主网卡指定随机生成的IPv6地址数量。取值范围为1~10。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 数据盘信息列表。
     */
    "DataDisk"?: {
        /**
         * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万。
         * - PL1（默认）：单盘最高随机读写IOPS 5万。
         * - PL2：单盘最高随机读写IOPS 10万。
         * - PL3：单盘最高随机读写IOPS 100万。
         * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 数据盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
         * @example `testDataDiskDescription`
         */
        Description: string;
        /**
         * 创建数据盘N使用的快照。N的取值范围为1~16。指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。
         * >不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。
         * @example `s-bp17441ohwka0yuh****`
         */
        SnapshotId: string;
        /**
         * 第N个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：
         * -   cloud：5~2000
         * -   cloud_efficiency：20~32768
         * -   cloud_ssd：20~32768
         * -   cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：1~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768。
         * - cloud_auto：1~32,768。
         * - cloud_essd_entry：10~32,768。
         * 该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。
         * @example `2000`
         */
        Size: number;
        /**
         * > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。
         * @example `null`
         */
        Device: string;
        /**
         * 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `testDataDiskName`
         */
        DiskName: string;
        /**
         * 数据盘n的云盘种类。取值范围：
         * -   cloud：普通云盘。
         * -   cloud_efficiency：高效云盘。
         * -   cloud_ssd：SSD云盘。
         * -   cloud_essd：ESSD云盘。
         * -   cloud_auto：ESSD AutoPL 云盘
         * -   cloud_essd_entry：ESSD Entry 云盘。
         * I/O优化实例的默认值为cloud_efficiency，非I/O优化实例的默认值为cloud。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * 表示数据盘是否随实例释放。取值范围：
         * - true：随实例释放。
         * - false：不随实例释放。
         * 默认值：true。
         * @example `true`
         */
        DeleteWithInstance: boolean;
        /**
         * 数据盘是否加密。
         * @example `false`
         */
        Encrypted: string;
        /**
         * 数据盘采用的自动快照策略ID。
         * @example `sp-m5e7fa9ute44ssa****`
         */
        AutoSnapshotPolicyId: string;
        /**
         * ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。
         * 基准性能=min{1,800+50*容量, 50,000}
         * > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](~~368372~~)和[修改ESSD AutoPL云盘预配置信息](~~413275~~)。
         * @example `50000`
         */
        ProvisionedIops: number;
        /**
         * 是否开启Burst（性能突发）。取值范围：
         * - true：是。
         * - false：否。
         * @example `true`
         */
        BurstingEnabled: boolean;
    }[];
    /**
     * 弹性网卡信息。
     */
    "NetworkInterface"?: {
        /**
         * 弹性网卡所属的虚拟交换机ID。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`VSwitchId`，但需要注意不能同时设置`VSwitchId`参数。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的虚拟交换机。
         * @example `vsw-bp1s5fnvk4gn2tws0****`
         */
        VSwitchId: string;
        /**
         * 弹性网卡名称。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。
         * @example `testEniName`
         */
        NetworkInterfaceName: string;
        /**
         * 辅助弹性网卡描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。`NetworkInterface.N`的N取值不能大于1。
         * @example `testEniDescription`
         */
        Description: string;
        /**
         * 弹性网卡所属的安全组ID。
         * 您需要注意：
         * - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`SecurityGroupId`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupIds.N`。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。
         * @example `sg-bp15ed6xe1yxeycg****`
         */
        SecurityGroupId: string;
        /**
         * 添加一张弹性网卡并设置主IP地址。
         * 您需要注意：
         * - N的取值范围为1~2：
         *     - 设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡。如果`Amount`参数取值大于1，且设置了主网卡并设置了该参数，则表示在批量创建ECS实例时，以指定的主IP地址为起始地址，依次为多台ECS实例分配连续的主IP地址，但需要注意，此时不支持再为实例绑定辅助网卡。
         *     - 设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡，但需要注意，如果`Amount`参数取值大于1且已为主网卡设置了该参数，则不支持再设置辅助网卡（即不支持再设置`NetworkInterface.2.InstanceType=Secondary`）。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则该参数的作用等同于`PrivateIpAddress`，但需要注意不能同时设置`PrivateIpAddress`参数。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，表示为辅助网卡设置主IP地址。默认从网卡所属的交换机网段中随机选择一个IP地址。
         * > 创建ECS实例时，您最多能添加一张辅助网卡。实例创建成功后，您可以调用[CreateNetworkInterface](~~58504~~)和[AttachNetworkInterface](~~58515~~)添加更多的辅助网卡。
         * @example `192.168.**.**`
         */
        PrimaryIpAddress: string;
        /**
         * 弹性网卡所属的一个或多个安全组ID。
         * - 第一个N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * - 第二个N表示可以指定一个或多个安全组ID。N的取值范围与实例能够加入安全组配额有关，更多信息，请参见[安全组限制](~~25412#SecurityGroupQuota1~~)。
         * 您需要注意：
         * - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数或`NetworkInterface.N.SecurityGroupId`。此时该参数的作用等同于`SecurityGroupIds.N`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupId`。
         * - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。
         * @example `sg-bp67acfmxazb4p****`
         */
        SecurityGroupIds: string[];
        /**
         * 弹性网卡类型。N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
         * 参数取值范围：
         * - Primary：主网卡。
         * - Secondary：辅助网卡。
         * 默认值：Secondary。
         * @example `Secondary`
         */
        InstanceType: string;
        /**
         * 主网卡的通讯模式。参数取值范围：
         * - Standard：使用TCP通讯模式。
         * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
         * @example `Standard`
         */
        NetworkInterfaceTrafficMode: string;
    }[];
    /**
     * 启动模板的标签对信息。
     */
    "Tag"?: {
        /**
         * 实例、块存储和弹性网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例、块存储和弹性网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 实例加入的一个或多个安全组。N的取值范围与实例能够加入安全组配额有关，更多信息，请参见[使用限制](~~25412~~)。
     * > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。
     * @example `sg-bp15ed6xe1yxeycg7****`
     */
    "SecurityGroupIds"?: string[];
    /**
     * 系统盘是否加密。取值范围：
     * - true：加密。
     * - false：不加密。
     * 默认值：false。
     * >中国香港D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。
     * @example `false`
     */
    "SystemDisk.Encrypted"?: string;
    /**
     * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。取值范围：
     * - true：开启实例释放保护。
     * - false：关闭实例释放保护。
     * 默认值：false。
     * >该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * 设置突发性能实例的运行模式。取值范围：
     * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
     * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
     * @example `Standard`
     */
    "CreditSpecification"?: string;
    /**
     * 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：
     * - true：自动续费。
     * - false：不自动续费。
     * 默认值：false。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 单次自动续费的续费时长。取值范围：
     *
     * <props="china">
     * - PeriodUnit=Week时：1、2、3。
     * - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
     * </props>
     * <props="intl">PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。</props>
     * 默认值：1。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 包年包月计费方式的时长单位。取值范围：
     * <props="china">
     * - Week。
     * - Month（默认）。
     * </props>
     * <props="intl">Month（默认）。</props>
     * @example `Month`
     */
    "PeriodUnit"?: string;
}
