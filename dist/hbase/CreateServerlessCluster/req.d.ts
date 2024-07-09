export interface CreateServerlessClusterRequest {
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
     * 实例名称。
     * @example `serverless-name`
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
     * @example `vsw-bp191ipotqj1ssyl*****`
     */
    "VSwitchId"?: string;
    /**
     * 实例的付费类型，取值：
     * - **Prepaid**：包年包月（预付费）。
     * - **Postpaid**：按量付费（后付费）。
     * @example `Prepaid`
     */
    "PayType": string;
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
     * - 当PeriodUnit为year时，取值范围为**1**~**3**。
     * - 当PeriodUnit为month时，取值范围为**1**~**9**。
     * > 仅当实例的付费类型为**Prepaid**时，需要填写此参数。
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
     * 基础型，取值：不填或者**serverless.small**。
     * @example `serverless.small`
     */
    "ServerlessSpec"?: string;
    /**
     * 单元处理能力，单位为CU。
     * @example `1000`
     */
    "ServerlessCapability"?: number;
    /**
     * 存储大小，单位为GB。
     * @example `100`
     */
    "ServerlessStorage"?: number;
    /**
     * HBase Serverless实例的引擎类型。取值：**serverlesshbase**。
     * @example `serverlesshbase`
     */
    "Engine"?: string;
    /**
     * 引擎版本。
     * @example `2.0`
     */
    "EngineVersion"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 这个参数是为了区分创建的来源，公有云默认为空，可不填写。
     * @example `xx`
     */
    "ClientType"?: string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-j4d53glb3****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例的磁盘类型，取值：
     * - **cloud_efficiency**：高效云盘。
     * - **cloud_ssd**：SSD云盘。
     * - **local_hdd_pro**：本地HDD盘。
     * - **local_ssd_pro**：本地SSD盘。
     * - **cloud_essd_pl1**：ESSD云盘。
     * @example `cloud_ssd`
     */
    "DiskType"?: string;
}
