export interface QueryDataServiceListRequest {
    /**
     * 数据服务名称。
     * @example `测试sql`
     */
    "Name"?: string;
    /**
     * 用户ID。
     * @example `dasdfdsa-csddf-dsadsa`
     */
    "UserId"?: string;
    /**
     * 页码。默认取值**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：1000
     * @example `10`
     */
    "PageSize"?: number;
}
