export interface CreateMultiZoneClusterRequest {
    /**
     * 服务类型，目前仅支持HBase增强版，取值为**hbaseue**。
     * @example `hbaseue`
     */
    "Engine": string;
    /**
     * 引擎类型的版本号，取值为**2.0**。
     * @example `2.0`
     */
    "EngineVersion": string;
    /**
     * 部署架构的版本，目前仅支持hbaseue引擎类型，取值为**2.0**。
     * @example `2.0`
     */
    "ArchVersion": string;
    /**
     * 实例名称，设置规则如下：
     * - 长度为2~128个字符。
     * - 以大小写字母或中文开头。
     * - 可包含数字或者特殊字符，特殊字符包括半角句号（.）、短横线（-）和下划线（_）。
     * @example `hbaseue_test`
     */
    "ClusterName"?: string;
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 专有网络ID，必须在RegionId所在的地域下。
     * @example `vpc-bp120k6ixs4eog****`
     */
    "VpcId": string;
    /**
     * <props="china">可用区组合。可用区组合支持情况可前往售卖页或者通过[DescribeMultiZoneAvailableRegions](~~203039~~)接口查看。</props>
     * <props="intl">可用区组合。可用区组合支持情况可前往售卖页查看。</props>
     * @example `cn-hangzhou-bef-aliyun-com`
     */
    "MultiZoneCombination": string;
    /**
     * 主可用区实例的可用区ID。
     * @example `cn-hangzhou-e`
     */
    "PrimaryZoneId": string;
    /**
     * 主可用区实例的虚拟交换机ID，必须在PrimaryZoneId对应的可用区下。
     * @example `vsw-hangxzhouxe****`
     */
    "PrimaryVSwitchId": string;
    /**
     * 备可用区实例的可用区ID。
     * @example `cn-hangzhou-f`
     */
    "StandbyZoneId": string;
    /**
     * 备可用区实例的虚拟交换机ID，必须在StandbyZoneId对应的可用区下。
     * @example `vsw-hangxzhouxf****`
     */
    "StandbyVSwitchId": string;
    /**
     * 仲裁可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ArbiterZoneId": string;
    /**
     * 仲裁虚拟交换机ID，交换机需位于ArbiterZoneId对应的可用区下。
     * @example `vsw-hangxzhouxb*****`
     */
    "ArbiterVSwitchId": string;
    /**
     * master节点规格，可调用[DescribeInstanceType](~~145796~~)接口查询。
     * @example `hbase.sn1.medium`
     */
    "MasterInstanceType": string;
    /**
     * core节点规格，可调用[DescribeInstanceType](~~145796~~)接口查询。
     * @example `hbase.sn1.medium`
     */
    "CoreInstanceType": string;
    /**
     * core磁盘类型，取值：
     * - **cloud_efficiency**：高效云盘。
     * - **cloud_ssd**：SSD云盘。
     * - **local_hdd_pro**：吞吐密集型本地盘 。
     * - **local_ssd_pro**：I/O密集型本地盘 。
     * @example `cloud_ssd`
     */
    "CoreDiskType": string;
    /**
     * 节点磁盘大小，范围为400~64000 GB，步长为40 GB。
     * @example `400`
     */
    "CoreDiskSize": number;
    /**
     * Core节点个数，Core节点个数取值范围为2~20，且增量为2的倍数。
     * @example `4`
     */
    "CoreNodeCount": number;
    /**
     * log节点规格，可调用[DescribeInstanceType](~~145796~~)接口查询。
     * @example `hbase.sn1.medium`
     */
    "LogInstanceType": string;
    /**
     * log节点磁盘类型，取值：
     * - **cloud_efficiency**：高效云盘。
     * - **cloud_ssd**：SSD云盘。
     * - **local_hdd_pro**：吞吐密集型本地盘 。
     * - **local_ssd_pro**：I/O密集型本地盘 。
     * @example `cloud_ssd`
     */
    "LogDiskType": string;
    /**
     * log节点磁盘大小，范围为400~64000 GB，步长为40 GB。
     * @example `400`
     */
    "LogDiskSize": number;
    /**
     * log节点数量，log节点个数取值范围为4~400，且为4的倍数。
     * @example `4`
     */
    "LogNodeCount": number;
    /**
     * 添加实例的白名单IP地址，多个白名单IP地址之间使用半角逗号（,）分隔。
     * > 如果IP地址设置为127.0.0.1，表示禁止所有地址访问该实例。例如IP地址为192.168.0.0/24表示允许所有192.168.0.XX的IP地址访问该实例。
     * @example `127.0.0.1`
     */
    "SecurityIPList"?: string;
    /**
     * 实例的付费类型，取值：
     * - **Prepaid**：预付费。
     * - **Postpaid**：后付费。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 包年包月实例的购买单位，取值：
     * - **year**：年。
     * - **month**：月。
     * > 仅当实例的付费类型为Prepaid时，需要填写此参数。
     * @example `month`
     */
    "PeriodUnit"?: string;
    /**
     * 包年包月实例的购买时长，取值：
     * - 当PeriodUnit为year时，取值范围为1~3。
     * - 当PeriodUnit为month时，取值范围为1~9。
     * > 仅当实例的付费类型为Prepaid时，需要填写此参数。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 自动续费周期，单位：月。
     * ><ul><li>默认为0，表示不自动续费。</li>
     * <li>AutoRenewPeriod=2，表示到期后自动续费2个月。</li></ul>
     * @example `0`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 保证接口幂等性的token。
     * @example `dfh3sf5gslfksfk****`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID，可通过资源组控制台查询，不填时放入默认资源组中。
     * @example `rg-gg3f4f5d5g5w****`
     */
    "ResourceGroupId"?: string;
}
