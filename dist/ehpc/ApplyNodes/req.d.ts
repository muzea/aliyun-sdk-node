export interface ApplyNodesRequest {
    /**
     * 待添加节点的集群ID。
     * 您可以通过调用[ListClusters](~~87126~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 待添加节点的镜像ID，仅在未指定TargetImageId时，ImageId生效。
     * 您可以通过调用[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)接口获取镜像ID。
     * >如果添加多个节点，仅指定了TargetImageId的节点会使用TargetImageId。
     * @example `centos_7_06_64_20G_alibase_20190711.vhd`
     */
    "ImageId"?: string;
    /**
     * 计算节点抢占策略。取值范围：
     * - NoSpot：按量计费节点。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认值：NoSpot
     * @example `NoSpot`
     */
    "ComputeSpotStrategy"?: string;
    /**
     * 计算节点每小时最高价格，取值是浮点数，最多支持3位小数。参数ComputeSpotStrategy取值为SpotWithPriceLimit时生效。
     * 当同时设置了ComputeSpotPriceLimit与InstanceTypeModel.N.MaxPrice时，按两者的最小值创建计算节点。
     * @example `0.68`
     */
    "ComputeSpotPriceLimit"?: number;
    /**
     * 系统盘的云盘类型。取值范围：
     * - cloud_efficiency：高效云盘
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD云盘
     * - cloud：普通云盘，已停售
     * @example `cloud_ssd`
     */
    "SystemDiskType"?: string;
    /**
     * 系统盘的大小。单位：GB
     * 取值范围：40~500
     * 默认值：40
     * @example `40`
     */
    "SystemDiskSize"?: number;
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
     * vCPU个数。当参数ResourceAmountType为Cores时，该参数为必选。
     * 同时指定vCPU和Memory可以定义节点规格。例如，vCPU=2、Memory=16可以定义配置为2 vCPU、16 GB的所有节点规格。结合节点规格、可用区等因素确定可用节点规格集合，并根据价格排序为您创建价格最低的节点。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * 内存大小，当参数ResourceAmountType为Cores时，该参数为必选。单位：GB。
     * 同时指定vCPU和Memory可以定义节点规格。例如，vCPU=2、Memory=16可以定义配置为2 vCPU、16 GB的所有节点规格。结合节点规格、可用区等因素确定可用节点规格集合，并根据价格排序为您创建价格最低的节点。
     * @example `16`
     */
    "Memory"?: number;
    /**
     * 实例规格族级别，在指定Cores和Memory时才生效。取值范围：
     * - EntryLevel：入门级。
     * - EnterpriseLevel：企业级。
     * - CreditEntryLevel：积分入门级。更多信息，请参见[突发性能实例](~~59977~~)。
     * 默认值：EnterpriseLevel
     * @example `EntryLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * 期望添加的资源数量，具体资源数量依赖ResourceAmountType取值。
     * - 当ResourceAmountType取值为Instance时，TargetCapacity取值范围：1~200
     * - 当ResourceAmountType取值为Cores时，TargetCapacity取值范围：1~1000
     * @example `20`
     */
    "TargetCapacity": number;
    /**
     * 期望添加的资源类型。取值范围：
     * - Instances：计算节点对应的ECS实例
     * - Cores：vCPU和内存
     * 默认值：Instances
     * @example `Instances`
     */
    "ResourceAmountType"?: string;
    /**
     * 抢占式节点申请策略。取值范围：
     * - LowPriceResourcePlanning：按vCPU单价从低到高进行尝试创建。当设置了抢占式计费方式的多节点规格时，优先创建对应抢占式计费节点。
     * - CapacityOptResourcePlanning：按照价格更低及释放率更低的方式综合编排创建。
     * - CustomizedResourcePlanning：根据预先定义的可用区（ZoneIds.N）扩容。当优先级较高的可用区没有实例库存时，自动使用下一优先级的可用区。
     * @example `LowPriceResourcePlanning`
     */
    "PriorityStrategy"?: string;
    /**
     * 是否满足TargetCapacity的数量要求。取值范围：
     * - true：如果库存不足，则不创建任何节点并返回报错。如果库存充足，会存在以下两种情况：
     *   - StrictResourceProvision为true：检查库存，如果库存充足才会创建节点，并严格按期望数量创建节点，否则就不创建任何节点。
     *   - StrictResourceProvision为false：检查库存，如果库存充足才会创建节点，但实际可能会因为先查询库存量，创建节点时实时库存不足而创建部分节点。
     * - false：如果库存不足，则按库存量创建部分节点。
     * 默认值：true
     * @example `true`
     */
    "StrictSatisfiedTargetCapacity"?: boolean;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万
     * - PL1：单盘最高随机读写IOPS 5万
     * - PL2：单盘最高随机读写IOPS 10万
     * - PL3：单盘最高随机读写IOPS 100万
     * 默认值：PL0
     * 关于如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL0`
     */
    "SystemDiskLevel"?: string;
    /**
     * 是否必须满足TargetCapacity的数量要求。当StrictSatisfiedTargetCapacity为true时生效。取值范围：
     * - true：检查库存，如果库存充足才会创建节点，并严格按期望数量创建节点，否则就不创建任何节点。
     * - false：检查库存，如果库存充足才会创建节点，但实际可能会因为先查询库存量，创建节点时实时库存不足而创建部分节点。
     * 默认值：false
     * @example `false`
     */
    "StrictResourceProvision"?: boolean;
    /**
     * 分批创建节点的总批数。 取值范围：1~10
     * 默认值：1
     * @example `1`
     */
    "Round"?: number;
    /**
     * 分批创建节点的时间间隔。单位：秒，取值范围：60~600
     * 默认值：60
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 可用区信息。最多可以添加10个。
     */
    "ZoneInfos": {
        /**
         * 待添加节点的交换机ID。N的取值范围：1~10。
         * @example `vsw-bp1e47optm9g58zcu****`
         */
        VSwitchId: string;
        /**
         * 待添加节点的可用区ID。N的取值范围：1~10。
         * >多个可用区ID之间不能相同。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
    }[];
    /**
     * 抢占式实例信息。
     */
    "InstanceTypeModel"?: {
        /**
         * 您可以为该抢占式实例支付的每小时最高价格。取值是浮点数，最多支持3位小数。
         * 当参数ComputeSpotStrategy取值为SpotWithPriceLimit时才生效。
         * N的取值范围：1~10
         * @example `0.034`
         */
        MaxPrice: number;
        /**
         * 待添加节点的镜像ID，该镜像必须为Windows镜像。
         * N的取值范围：1~10
         * @example `win2016_1607_x64_dtc_zh-cn_40G_alibase_20210516.vhd`
         */
        TargetImageId: string;
        /**
         * 待添加的节点规格，默认使用上次扩容或者创建集群时的计算节点规格。
         * N的取值范围：1~10
         * @example `ecs.n1.tiny`
         */
        InstanceType: string;
    }[];
    /**
     * 标签信息。
     */
    "Tag"?: {
        /**
         * 待添加节点的标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或 https://。
         * N的取值范围：1~20
         * @example `TestKey`
         */
        Key: string;
        /**
         * 待添加节点的标签值。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
         * N的取值范围：1~20
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 计算节点加入的队列名称。
     * 您可以通过调用[ListQueues](~~92176~~)获取已有队列名称。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 实例自定义数据。需要以 Base64 方式编码，原始数据最多为 16 KB。Linux操作系统支持shell脚本；Windows操作系统支持bat和powershell两种格式，在Base64编码前，第一行为[bat]或者[powershell]。
     * > 因为传输 API 请求时，不会加密您设置的 UserData，建议不要以明文方式传入机密的信息，例如密码和私钥等。如果必须传入，建议加密后，然后以 Base64 的方式编码后再传入，在实例内部以同样的方式反解密。
     * @example `ZWNobyBoZWxsbyBlY3Mh
    `
     */
    "UserData"?: string;
}
