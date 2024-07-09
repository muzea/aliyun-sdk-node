export interface DescribeClassicLinkInstancesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPC ID。目标VPC必须已开启ClassicLink功能，详情请参见[建立ClassicLink连接](~~65413~~)。
     * @example `vpc-bp1vwnn14rqpyiczj****`
     */
    "VpcId"?: string;
    /**
     * 实例ID。最多指定100台实例ID，并使用半角逗号（,）隔开。
     * @example `i-bp1a5zr3u7nq9cxh****`
     */
    "InstanceId"?: string;
    /**
     * 当前页码。起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数。取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: string;
}
