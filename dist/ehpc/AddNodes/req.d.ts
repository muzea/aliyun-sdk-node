export interface AddNodesRequest {
    /**
     * 待添加节点的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * - marketplace：镜像市场镜像
     * 默认值：system
     * @example `system`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 为待加入集群的计算节点指定的镜像，该镜像需满足以下条件：
     * - 指定的镜像的操作系统应与集群中节点的操作系统保持一致。如：集群中节点的操作系统为CentOS时，只能指定CentOS镜像。
     * > 如果集群为混合云集群，并且开启支持多系统功能，当集群中节点的操作系统为Windows时，指定的镜像可以为Windows、CentOS。
     * - 指定的镜像应与集群节点的镜像大版本号保持一致，如待加入集群为CentOS 7.x，指定的镜像也应该为CentOS 7.x。
     * 您可以通过调用[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)接口获取镜像ID。
     * @example `centos_7_06_64_20G_alibase_20190711.vhd`
     */
    "ImageId"?: string;
    /**
     * 添加的计算节点数量。取值范围：1~99，并且MinCount<Count。
     * - ECS库存数量<MinCount，添加节点失败。
     * - MinCount<ECS库存数量<Count，按照MinCount指定的数量添加节点。
     * - Count<ECS库存数量，按照Count指定的数量添加节点。
     * @example `10`
     */
    "Count": number;
    /**
     * 扩容的实例规格，默认使用上次扩容或者创建集群时的计算节点实例规格。
     * @example `ecs.n1.tiny`
     */
    "InstanceType"?: string;
    /**
     * 计算节点抢占策略。当参数EcsChargeType取值为PostPaid时才生效。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认值：NoSpot
     * @example `NoSpot`
     */
    "ComputeSpotStrategy"?: string;
    /**
     * 计算节点每小时最高价格，支持最多3位小数。参数SpotStrategy取值为SpotWithPriceLimit时生效。
     * @example `0.68`
     */
    "ComputeSpotPriceLimit"?: string;
    /**
     * 集群使用节点的付费类型。取值范围：
     * - PostPaid：按量付费
     * - PrePaid：包年包月
     * 默认值：PostPaid
     * 若选择包年包月类型，默认开启自动续费，集群释放后节点将关闭自动续费。
     * @example `PostPaid`
     */
    "EcsChargeType"?: string;
    /**
     * 购买资源的时长，单位由PeriodUnit指定。当参数InstanceChargeType取值为PrePaid时才生效且为必选值。取值范围：
     * - PeriodUnit=Week时，Period取值：{“1”, “2”, “3”, “4”}。
     * - PeriodUnit=Month时，Period取值：{“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “12”, “24”, “36”, ”48”, ”60”}。
     * 默认值：1
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买资源的时长。取值范围：
     * - Week
     * - Month
     * 默认值：Month
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动续费，当参数EcsChargeType取值为PrePaid时才生效。取值范围：
     * - true：自动续费
     * - false：不自动续费
     * 默认值：true
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 每次自动续费的时长。参数AutoRenew取值true时生效。
     * - PeriodUnit为Week时，AutoRenewPeriod取值{"1", "2", "3"}。
     * - PeriodUnit为Month时，AutoRenewPeriod取值{"1", "2", "3", "6", "12"}。
     * 默认值：1
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 计算节点加入的队列名称。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 节点创建方式。取值范围：
     * - manual：手动扩容
     * - autoscale：自动扩容
     * 默认值：manual
     * @example `manual`
     */
    "CreateMode"?: string;
    /**
     * 系统盘的云盘类型。取值范围：
     * - cloud_efficiency：高效云盘
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD云盘
     * - cloud：普通云盘，已停售。
     * 默认值：cloud_efficiency
     * @example `cloud_ssd`
     */
    "SystemDiskType"?: string;
    /**
     * 系统盘的大小。单位：GiB
     * 取值范围：40~500
     * 默认值：40
     * @example `40`
     */
    "SystemDiskSize"?: number;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-bp1lfcjbfb099rrjn****`
     */
    "VSwitchId"?: string;
    /**
     * 主机名前缀。方便您分类管理节点。
     * @example `compute`
     */
    "HostNamePrefix"?: string;
    /**
     * 主机名后缀。方便您分类管理节点。
     * @example `01`
     */
    "HostNameSuffix"?: string;
    /**
     * 计算节点是否支持超线程。取值范围：
     * - true：支持超线程
     * - false：不支持超线程
     * 默认值：true
     * @example `true`
     */
    "ComputeEnableHt"?: boolean;
    /**
     * 是否分配公网地址。取值范围：
     * - true：分配公网地址
     * - false：不分配公网地址
     * 默认值：false
     * @example `false`
     */
    "AllocatePublicAddress"?: boolean;
    /**
     * 弹性公网IP付费类型。取值范围：
     * - PayByBandwidth：按固定带宽收费
     * - PayByTraffic：按使用流量计费
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 公网入带宽最大值，单位为Mbit/s。取值范围：
     * - 当所购公网出带宽小于等于10Mbit/s时：1~10，默认为10。
     * - 当所购公网出带宽大于10Mbit/s时：1~InternetMaxBandWidthOut的取值，默认为InternetMaxBandWidthOut的取值。
     * @example `10`
     */
    "InternetMaxBandWidthIn"?: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100
     * 默认值：0
     * @example `10`
     */
    "InternetMaxBandWidthOut"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万
     * - PL1：单盘最高随机读写IOPS 5万
     * - PL2：单盘最高随机读写IOPS 10万
     * - PL3：单盘最高随机读写IOPS 100万
     * 默认值：PL1
     * 更多ESSD性能参数，请参见[ESSD云盘](~~122389~~)。
     * @example `PL0`
     */
    "SystemDiskLevel"?: string;
    /**
     * 指定最小添加的节点数量。取值范围：1~99，并且MinCount<Count。
     * - ECS库存数量<MinCount，添加节点失败。
     * - MinCount<ECS库存数量<Count，按照MinCount指定的数量添加节点。
     * - Count<ECS库存数量，按照Count指定的数量添加节点。
     * 默认值：1
     * @example `1`
     */
    "MinCount"?: number;
    /**
     * 是否设置该接口为同步接口。取值范围：
     * - true：是
     * - false：否
     * 默认值：false
     * @example `false`
     */
    "Sync"?: boolean;
    /**
     * 随节点创建的数据盘信息列表。
     */
    "DataDisks"?: {
        /**
         * 第N个随节点创建的数据盘容量大小。单位：GB
         * 取值范围：40~500
         * 默认值：40
         * N的取值范围：0~16
         * @example `40`
         */
        DataDiskSize: number;
        /**
         * 第N个随节点创建的数据盘类型。可能值：
         * - cloud_efficiency：高效云盘
         * - cloud_ssd：SSD云盘
         * - cloud_essd：ESSD云盘
         * - cloud：普通云盘
         * 默认值：cloud_efficiency
         * N的取值范围：0~16
         * @example `cloud_efficiency`
         */
        DataDiskCategory: string;
        /**
         * 第N个随节点创建的数据盘是否随实例释放。取值范围：
         * - true：是
         * - false：否
         * 默认值：true
         * N的取值范围：0~16
         * @example `true`
         */
        DataDiskDeleteWithInstance: boolean;
        /**
         * 第N个随节点创建的数据盘类型为ESSD云盘时，区分性能等级。仅当DataDisks.N.DataDiskCategory=cloud_essd时该参数有效。取值范围：
         * - PL0：单盘最高随机读写IOPS 1万
         * - PL1：单盘最高随机读写IOPS 5万
         * - PL2：单盘最高随机读写IOPS 10万
         * - PL3：单盘最高随机读写IOPS 100万
         * 默认值：PL1
         * N的取值范围：0~16
         * @example `PL1`
         */
        DataDiskPerformanceLevel: string;
        /**
         * 第N个随节点创建的数据盘是否加密。取值范围：
         * - true：是
         * - false：否
         * 默认值：false
         * N的取值范围：0~16
         * @example `false`
         */
        DataDiskEncrypted: boolean;
        /**
         * 第N个随节点创建的数据盘使用的KMS密钥ID。
         * N的取值范围：0~16
         * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
         */
        DataDiskKMSKeyId: string;
    }[];
    /**
     * 抢占式实例的保护期，单位为小时。取值范围为0~1，设置为0表示无保护期，默认为1。
     * @example `1`
     */
    "ComputeSpotDuration"?: number;
    /**
     * 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。
     * @example `Terminate`
     */
    "ComputeSpotInterruptionBehavior"?: string;
    /**
     * 网卡的通讯模式。参数取值范围：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * @example `Standard`
     */
    "NetworkInterfaceTrafficMode"?: string;
    /**
     * DNS配置信息。
     * @example `"{\"DnsType\":\"PrivateZone\",\"DnsName\":\"xxxxx\"}"`
     */
    "DnsConfig"?: string;
}
