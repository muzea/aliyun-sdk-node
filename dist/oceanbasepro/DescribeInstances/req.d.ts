export interface DescribeInstancesRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
    /**
     * 资源组 ID 信息。
     * 如果不填写，返回全部资源。
     * @example `group1`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * OceanBase 集群名称。
     * 长度为 1~20 个英文或中文字符。
     * 如未指定该参数，默认值为集群的 InstanceId。
     * @example `ob4prod`
     */
    "InstanceName"?: string;
    /**
     * 根据实例 ID、实例名称、租户 ID 和租户名称进行模糊搜索。
     * @example `pay`
     */
    "SearchKey"?: string;
}
