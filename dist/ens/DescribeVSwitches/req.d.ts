export interface DescribeVSwitchesRequest {
    /**
     * ENS节点ID。
     * @example `cn-xian-unicom`
     */
    "EnsRegionId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-5m9xhlq8oh***`
     */
    "VSwitchId"?: string;
    /**
     * 交换机名称。
     * @example `testVSwitchName`
     */
    "VSwitchName"?: string;
    /**
     * 要查询的交换机所属VPC的ID。
     * @example `vpc-25cdvfeq58pl****`
     */
    "NetworkId"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序使用：格式例子{"EnsRegionId":"desc"}。
     * 默认按节点ID降序排列。
     * @example `{"EnsRegionId":"desc"}`
     */
    "OrderByParams"?: string;
}
