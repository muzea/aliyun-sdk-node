export interface DescribeAppsRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * 参数为空表示查询所有应用ID。
     * @example `yourAppId`
     */
    "AppId"?: string;
    /**
     * 应用状态，参数为空表示查询所有状态。取值：
     * - **1**：可用。
     * - **2**：停用。
     * - **3**：欠费停用。
     * @example `1`
     */
    "Status"?: string;
    /**
     * 排序方式。取值：
     * - **asc**：递增。
     *
     * - **desc**（默认值）：递减。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 第几页，默认查询第**1**页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示个数，默认为**10**。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 应用版本。
     * @example `3.0`
     */
    "AppVersion"?: string;
}
