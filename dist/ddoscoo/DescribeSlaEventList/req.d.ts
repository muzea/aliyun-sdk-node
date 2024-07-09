export interface DescribeSlaEventListRequest {
    /**
     * 服务地域。取值：
     * - **cn**：中国内地。
     * - **cn-hongkong**：非中国内地。
     * @example `cn`
     */
    "Region": string;
    /**
     * 要查询的DDoS高防实例的IP地址。
     * @example `203.107.XX.XX`
     */
    "Ip"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1678080840`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1671886740`
     */
    "EndTime": number;
    /**
     * 分页查询时每页包含的记录数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "Page"?: number;
}
