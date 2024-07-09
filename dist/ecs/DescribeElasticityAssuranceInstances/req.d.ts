export interface DescribeElasticityAssuranceInstancesRequest {
    /**
     * 弹性保障服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。
     * 最大值：100
     * 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 弹性保障服务查询起始标志。由上一次的请求结果中获取。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 弹性保障服务ID。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id": string;
}
