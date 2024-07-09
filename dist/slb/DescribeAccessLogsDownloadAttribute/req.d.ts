export interface DescribeAccessLogsDownloadAttributeRequest {
    /**
     * 传统型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例绑定的标签列表，其结构是一个JSON dictionary，包含标签键和标签值。
     * 一次请求中，绑定的标签列表中最多支持10个标签。
     * @example `[{"tagKey":"Key1","tagValue":"Value1"}]`
     */
    "Tags"?: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1b6c719dfa08ex*****`
     */
    "LoadBalancerId"?: string;
    /**
     * 访问日志类型。仅取值**layer7**，表示七层访问日志。
     * @example `layer7`
     */
    "LogType"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
