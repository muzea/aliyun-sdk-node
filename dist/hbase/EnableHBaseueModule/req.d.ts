export interface EnableHBaseueModuleRequest {
    /**
     * 扩展集群名称。
     * @example `cluster-name`
     */
    "ModuleClusterName"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp120k6ixs4eog*****`
     */
    "VpcId": string;
    /**
     * 专有网络下的虚拟交换机ID。
     * @example `vsw-bp191ipotqj1ssyl*****`
     */
    "VswitchId": string;
    /**
     * Master节点规格，可调用[DescribeAvailableResource](~~188244~~)接口获取规格值。
     * @example `hbase.sn1.large`
     */
    "MasterInstanceType"?: string;
    /**
     * Core节点规格，可调用[DescribeAvailableResource](~~188244~~)接口获取规格值。
     * @example `hbase.sn1.large`
     */
    "CoreInstanceType": string;
    /**
     * Core磁盘类型，取值：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - local_hdd_pro：本地HDD盘。
     * - local_ssd_pro：本地SSD盘。
     * - cloud_essd_pl1：ESSD云盘。
     * @example `cloud_ssd`
     */
    "DiskType"?: string;
    /**
     * 每个节点磁盘大小，单位：GB。
     * - 如果实例为单节点，Core单节点磁盘容量的范围为20~500 GB，步长为1 GB。
     * - 如果实例为云盘版，Core单节点磁盘容量的范围为400~64000 GB，步长为40 GB。
     * @example `400`
     */
    "DiskSize"?: number;
    /**
     * 节点个数，取值如下：
     * - 如果实例为单节点，Core节点个数固定为1个。
     * - 如果实例为云盘版，Core节点个数取值范围为2~100。
     * @example `2`
     */
    "NodeCount": number;
    /**
     * 实例的付费类型，取值：
     * - Prepaid：包年包月（预付费）。
     * - Postpaid：按量付费（后付费）。
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 包年包月实例的购买单位，取值：
     * - **year**：年。
     * - **month**：月。
     * >  仅当实例的付费类型为**Prepaid**时，需要填写此参数。
     * @example `month`
     */
    "PeriodUnit"?: string;
    /**
     * 包年包月实例的购买时长，取值：
     * - 当PeriodUnit为year时，取值范围为1~3。
     * - 当PeriodUnit为month时，取值范围为1~9。
     * > 仅当实例的付费类型为Prepaid时，需要填写此参数。
     * @example `6`
     */
    "Period"?: number;
    /**
     * 设置实例自动续费周期，单位为月。
     * > <ul><li>自动续费周期默认值为0，表示实例到期后不自动续费。</li>
     * <li>例如自动续费周期设置为2，表示实例到期后自动续费2个月。</li></ul>
     * @example `2`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 云数据库HBase增强版实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    "HbaseueClusterId": string;
    /**
     * HBase增强版实例中关联的BDS集群ID。
     * @example `bds-bp174pm3tsk3****`
     */
    "BdsId"?: string;
    /**
     * 扩展模块类型，固定取值为solr。
     * @example `solr`
     */
    "ModuleTypeName": string;
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 可用区ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-shenzhen-e`
     */
    "ZoneId": string;
}
