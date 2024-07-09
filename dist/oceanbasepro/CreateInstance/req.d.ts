export interface CreateInstanceRequest {
    /**
     * 实例的付费方式。取值范围：
     * - PrePay：包年包月。选择该类付费方式时，必须确认自己的账号支持余额支付 / 信用支付，否则将返回 InvalidPayMethod 的错误提示。
     * - PostPay（默认）：按量付费（默认按小时计费）。
     * @example `PrePay`
     */
    "ChargeType": string;
    /**
     * 实例的系列。
     * - normal（默认）：标准集群版（云盘）。
     * - normal_ssd：标准集群版（本地盘）。
     * - history：历史库集群版。
     * - normal_kv：obkv 集群。
     * - normal_hg：信创集群（需要添加白名单开放）。
     * @example `normal`
     */
    "Series": string;
    /**
     * 实例所属的可用区 ID。
     * 输入多个可用区时注意以逗号分隔。
     * 更多详情，请参见 [DescribeZones](~~25610~~) 获取可用区列表。
     * @example `cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j`
     */
    "Zones": string;
    /**
     * 集群规格信息。<br> 当前支持以下套餐：
     * - 4C16GB：4 核 16GB。
     * - 8C32GB：8 核 32GB。
     * - 14C70GB：14 核 70GB。
     * - 24C120GB：24 核 120GB。
     * - 30C180GB：30 核 180GB。
     * - 62C400GB：62 核 400GB。
     * - 104C600GB：104 核 600GB。
     * - 16C70GB：16 核 70GB。
     * - 32C160GB：32 核 160GB。
     * - 64C380GB：64 核 380GB。
     * - 20C32GB：20 核 32GB。
     * - 40C64GB：40 核 64GB。
     * - 16C32GB：16 核 32GB。
     * - 32C70GB：32 核 70GB。
     * - 64C180GB：64 核 180GB。
     * - 32C180GB：32 核 180GB。
     * - 64C400GB：64 核 400GB。
     * @example `14C70GB`
     */
    "InstanceClass": string;
    /**
     * 存储空间大小，单位 GB。
     * 存储空间的限制根据集群规格不同而不同，具体如下：
     * - 8C32GB：100GB~10000GB。
     * - 14C70GB：200GB~10000GB。
     * - 30C180GB：400GB~10000GB。
     * - 62C400G：800GB-10000GB。
     * 各套餐的存储空间默认值为其最小值。
     * @example `200`
     */
    "DiskSize"?: number;
    /**
     * 购买资源的时长，单位由 PeriodUnit 指定。
     * 当参数 InstanceChargeType 取值为 PrePaid 时才生效且为必选值。
     * 取值范围：
     * - PeriodUnit=Month 时，Period 取值：{“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”}。
     * - PeriodUnit=Year 时，Period 取值：{“1”, “2”, “3”}。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买资源的时长。
     * 包年包月取值范围：Month 或者 Year。
     * 默认值：包年包月为 Month，按量计费，默认周期为 Hour。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否要自动续费。
     * 当参数 ChargeType 取值 PrePaid 时生效。取值范围：
     * -  true：自动续费。
     * - false（默认）：不自动续费。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 每次自动续费的时长，当参数 AutoRenew 取值 True 时，该参数为必填参数。
     * - PeriodUnit 为 Year 时，AutoRenewPeriod 取值范围为 {"1", "2", "3"}。
     * - PeriodUnit 为 Month 时，AutoRenewPeriod 取值范围为 {"1", "2", "3", "6", "12"}。
     * @example `2`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 实例所在的企业资源组 ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * OceanBase 集群名称。
     * 长度为 1~20 个英文或中文字符。
     * 如未指定该参数，默认值为集群的 InstanceId。
     * @example `amap_aos_tx_ob`
     */
    "InstanceName"?: string;
    /**
     * OceanBase Server 版本号。
     * @example `2.2.77`
     */
    "ObVersion"?: string;
    /**
     * 集群的存储类型。仅在标准集群版（云盘）下生效。
     * 当前支持两种类型：
     * - cloud_essd_pl1：云盘 ESSD PL1。
     * - cloud_essd_pl0：云盘 ESSD PL0。默认值为 cloud_essd_pl1。
     * @example `cloud_essd_pl1`
     */
    "DiskType"?: string;
    /**
     * 是否只预检此次请求, 默认为 false。取值范围：
     * - true：发送检查请求，不会创建实例。如果检查通过，则返回 DryRunResult=true, 如果检查不通过，则返回相应错误的错误码。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。如为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 全功能型副本数。返回值仅包含 3 和 2。
     * - 3：表示 3 个全功能型副本。
     * - 2：表示 2 个全功能型副本。
     * 三可用区部署时，只支持 3 个全功能型副本，双可用区部署时，仅支持 2 个全功能型副本，单可用区部署时，可以支持 2 个或者 3 个全功能型副本。
     * @example `3`
     */
    "ReplicaMode"?: string;
    /**
     * 是否开启 Cgroup。
     * @example `true`
     */
    "IsolationOptimization"?: string;
    /**
     * 主实例 ID。
     * @example `ob3h8ytroxxxxx`
     */
    "PrimaryInstance"?: string;
    /**
     * 主实例 Region。
     * @example `cn-hangzhou`
     */
    "PrimaryRegion"?: string;
    /**
     * cpu架构
     * @example `x86`
     */
    "CpuArch"?: string;
}
