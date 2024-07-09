export interface DescribeMonitorGroupInstancesRequest {
    /**
     * 每页显示记录条数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 应用分组ID。
     * @example `123****`
     */
    "GroupId": number;
    /**
     * 云产品名称缩写。N的取值范围为1~200。
     * > 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
     * @example `ecs`
     */
    "Category"?: string;
    /**
     * 按照实例名称模糊查询。
     * @example `test-s1`
     */
    "Keyword"?: string;
    /**
     * 按照实例ID搜索。
     * @example `i-bp12g4xbl4i0brkn****`
     */
    "InstanceIds"?: string;
}
