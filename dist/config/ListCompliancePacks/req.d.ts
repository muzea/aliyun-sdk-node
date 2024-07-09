export interface ListCompliancePacksRequest {
    /**
     * 合规包状态。取值：
     * - ACTIVE：正常。
     * - CREATING：创建中。
     * @example `ACTIVE`
     */
    "Status"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
