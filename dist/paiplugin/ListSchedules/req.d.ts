export interface ListSchedulesRequest {
    /**
     * 触达计划名称过滤。
     * @example `用户增长`
     */
    "Name"?: string;
    /**
     * 分页数，从1开始，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 发送状态过滤。
     * - 0: 检查中。
     * - 1: 检查成功。
     * - 2: 检查失败。
     * - 3: 发送中。
     * - 4: 发送成功。
     * - 5: 发送失败。
     * @example `0`
     */
    "Status"?: number;
}
