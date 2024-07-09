export interface CreateDataCenterRequest {
    /**
     * 付费类型：
     * - Subscription：包年包月
     * - PayAsYouGo：按量付费
     * > 按量付费实例无到期时间。
     * @example `Subscription`
     */
    "PayType": string;
    /**
     *
     * 指定预付费实例为包年或者包月类型，取值：
     * - Year：包年；
     * - Month：包月。
     * > 若付费类型为Subscription则该参数必须传入。
     * @example `Year`
     */
    "PeriodUnit"?: string;
    /**
     * 付费周期，PayType（付费类型）为Subscription时为必选参数，单位为月，可选值：1-9，12，24，36 。
     * > 付费类型为PayAsYouGo时不支持传入此参数。
     * @example `12`
     */
    "Period"?: number;
    /**
     * 是否开启自动续费，可选值：
     * - true（开启）
     * - false（不开启）
     * 默认值：false。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费周期，单位为月，可选值：
     * - 1
     * - 2
     * - 3
     * - 6
     * - 12
     * > 当AutoRenew为true时该参数必选。
     * @example `12`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOC***ioIUBoiB`
     */
    "ClientToken"?: string;
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，可调用DescribeRegions查询，使用此参数指定要创建实例的可用区。
     * @example `cn-hangzhou-h`
     */
    "ZoneId": string;
    /**
     * 集群ID。
     * @example `cds-bp113rmn****2uy9`
     */
    "ClusterId": string;
    /**
     * 数据中心名称。
     * @example `apitest`
     */
    "DataCenterName"?: string;
    /**
     * 集群实例类型。可取值部分示例：
     * - cassandra.c.large：2核 4
     * - Gcassandra.c.xlarge：4核 8G
     * - cassandra.c.2xlarge：8核 16G
     * @example `cassandra.c.large`
     */
    "InstanceType": string;
    /**
     * 节点数。
     * @example `2`
     */
    "NodeCount": number;
    /**
     * 磁盘存储类型。可取值示例：
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD云盘
     * - cloud_efficiency：高效云盘
     * - local_ssd_pro：本地SSD盘
     * @example `cloud_ssd`
     */
    "DiskType"?: string;
    /**
     * 磁盘存储大小（每节点，单位GB）。
     * @example `160`
     */
    "DiskSize"?: number;
    /**
     * VPC网络的ID。
     * @example `vpc-bp1oxxxxxxxxxxgzv26cf`
     */
    "VpcId": string;
    /**
     * 虚拟交换机的ID。
     * @example `vsw-oqscxxxxxxxxxxxxx5e8c`
     */
    "VswitchId": string;
}
