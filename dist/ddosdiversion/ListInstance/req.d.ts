export interface ListInstanceRequest {
    /**
     * 代播实例的ID。
     * @example `ddos_diversion_public_cn-xxxxxxxxxxxxx`
     */
    "SaleId"?: string;
    /**
     * 实例名称。
     * @example `测试实例。`
     */
    "Name"?: string;
    /**
     * 实例状态。取值：
     * - normal：表示正常运行的实例。
     * -  expired：表示过期的实例。
     * - deleting：表示处于删除中的实例。
     * -  stopped：表示停止的实例。
     * @example `normal`
     */
    "Status"?: string;
    /**
     * 页码。 默认值：1。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 数量。默认值：100。
     * @example `100`
     */
    "Num"?: number;
}
