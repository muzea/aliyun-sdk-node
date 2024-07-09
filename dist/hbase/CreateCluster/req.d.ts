export interface CreateClusterRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou-f`
     */
    "ZoneId": string;
    /**
     * 实例名称。命名规则为：
     * - 长度为2~128个字符。
     * - 以大小写字母或中文开头。
     * - 可包含数字或者特殊字符，特殊字符包括半角句号（.）、短横线（-）和下划线（_）。
     * @example `hbase_test`
     */
    "ClusterName"?: string;
    /**
     * 专有网络ID。
     * > 本参数与VswitchId参数同时为空时表示实例的网络类型为经典网络。
     * @example `vpc-bp120k6ixs4eog****`
     */
    "VpcId"?: string;
    /**
     * 专有网络下的虚拟交换机ID。
     * @example `vsw-bp191otqj1ssyl****`
     */
    "VSwitchId"?: string;
    /**
     * Master节点规格，可调用[DescribeAvailableResource](~~188244~~)接口获取规格值。
     * @example `hbase.sn1.medium`
     */
    "MasterInstanceType"?: string;
    /**
     * Core节点规格，可调用[DescribeAvailableResource](~~188244~~)接口获取规格值。
     * @example `hbase.sn1.medium`
     */
    "CoreInstanceType": string;
    /**
     * 实例的Core磁盘类型，取值：
     * <ul>
     *  <li>**cloud_efficiency**：高效云盘。</li>
     * <li>**cloud_ssd**：SSD云盘。</li>
     * <li>**local_hdd_pro**：本地HDD盘。</li>
     * <li>**local_ssd_pro**：本地SSD盘。</li>
     * <li>**cloud_essd_pl1**：ESSD云盘。</li>
     * </ul>
     * @example `cloud_ssd`
     */
    "DiskType"?: string;
    /**
     * Core单节点磁盘大小，单位：GB。
     * <ul>
     *    <li>如果实例为单节点，Core单节点磁盘容量的范围为20~500 GB，步长为1 GB。</li>
     *    <li>如果实例为云盘版，Core单节点磁盘容量的范围为400~64000 GB，步长为40 GB。</li>
     *    <li>如果实例为本地盘，Core单节点磁盘容量与Core节点规格有关，具体如下：
     * <ul>
     *   <li>Core节点规格为hbase.d1.4xlarge时，磁盘容量为44000。</li>
     *   <li>Core节点规格为hbase.d1.6xlarge时，磁盘容量为66000。</li>
     *   <li>Core节点规格为hbase.d1.8xlarge时，磁盘容量为88000。</li>
     *   <li>Core节点规格为hbase.i2.xlarge时，磁盘容量为894。</li>
     *   <li>Core节点规格为hbase.i2.2xlarge时，磁盘容量为1788。</li>
     *   <li>Core节点规格为hbase.i2.4xlarge时，磁盘容量为3576。</li>
     *   <li>Core节点规格为hbase.i2.8xlarge时，磁盘容量为7152。</li>
     *   <li>Core节点规格为hbase.d2s.5xlarge时，磁盘容量为58400。</li>
     *   <li>Core节点规格为hbase.d2s.10xlarge时，磁盘容量为109500。</li>
     * </ul>
     *   </li>
     * </ul>
     * @example `400`
     */
    "DiskSize"?: number;
    /**
     * Core节点个数，取值如下：
     * <ul>
     *    <li>如果实例为单节点，Core节点个数固定为**1**个。</li>
     *    <li>如果实例为云盘版，Core节点个数取值范围为**2**~**100**。</li>
     *    <li>如果实例为本地盘，Core节点个数取值范围为**4**~**100**。</li>
     * </ul>
     * @example `2`
     */
    "NodeCount": number;
    /**
     * 实例的付费类型，取值：
     * - **Prepaid**：包年包月（预付费）。
     * - **Postpaid**：按量付费（后付费）。
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 数据库引擎类型：
     * - **hbase**：HBase标准版或HBase单机版。
     * - **hbaseue**：HBase增强版。
     * - **bds**：表示BDS实例。
     * @example `hbase`
     */
    "Engine": string;
    /**
     * 添加实例的白名单IP地址，多个白名单IP地址之间使用半角逗号（,）分隔。
     * > 如果IP地址设置为127.0.0.1，表示禁止所有地址访问该实例。例如IP地址为192.168.0.0/24表示允许所有192.168.0.XX的IP地址访问该实例。
     * @example `116.62.XX.XX/24`
     */
    "SecurityIPList"?: string;
    /**
     * 实例的引擎版本，与引擎类型有关，取值：
     * - 如果实例的引擎类型为**hbase**，引擎版本为**1.1**或者**2.0**。
     * - 如果实例的引擎类型为**hbaseue**，引擎版本为**2.0**。
     * - 如果实例的引擎类型为**bds**，引擎版本为**1.0**。
     * @example `2.0`
     */
    "EngineVersion": string;
    /**
     * 实例的冷存储容量大小，单位为GB。取值如下：
     * - 取值为**0**：表示不开启冷存储。
     * - 取值范围为**800**~**1000000**：表示开启冷存储。
     * > 仅当实例的引擎类型为**hbaseue**时，开启冷存储功能才有效。
     * @example `1024`
     */
    "ColdStorageSize"?: number;
    /**
     * 包年包月实例的购买单位，取值：
     * - **year**：年。
     * - **month**：月。
     * > 仅当实例的付费类型为**Prepaid**时，需要填写此参数。
     * @example `month`
     */
    "PeriodUnit"?: string;
    /**
     * 包年包月实例的购买时长，取值：
     * - 当PeriodUnit为**year**时，取值范围为**1**~**3**。
     * - 当PeriodUnit为**month**时，取值范围为**1**~**9**。
     * > 仅当实例的付费类型为**Prepaid**时，需要填写此参数。
     * @example `6`
     */
    "Period"?: number;
    /**
     * 设置实例自动续费周期，单位为月。
     * > - 自动续费周期默认值为**0**，表示实例到期后不自动续费。
     * - 例如自动续费周期设置为**2**，表示实例到期后自动续费2个月。
     * @example `2`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-j4d53glb3****`
     */
    "ResourceGroupId"?: string;
    /**
     * 加密的密钥ID，如果未启用加密则为空。
     * > 当前云盘版加密开启后无法关闭。
     * @example `0d2470df-da7b-4786-b981-9a164dae****`
     */
    "EncryptionKey"?: string;
}
