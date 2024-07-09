export interface DescribeInstanceStatusRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例所属可用区。您可以调用[DescribeZones](~~25610~~)查看最新的阿里云可用区列表。
     * @example `cn-hangzhou-d`
     */
    "ZoneId"?: string;
    /**
     * 实例所属的集群ID。
     * @example `cls-bp67acfmxazb4p****`
     */
    "ClusterId"?: string;
    /**
     * 实例状态列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID。多个实例ID在不同参数中指定，如`InstanceId.1=i-bp1j4i2jdf3owlhe****, InstanceId.2=i-bp1j4i2jdf3o1234****`。
     * @example `i-bp1j4i2jdf3owlhe****`
     */
    "InstanceId"?: string[];
}
