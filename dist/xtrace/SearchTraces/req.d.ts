export interface SearchTracesRequest {
    /**
     * 开始时间，精确到毫秒（ms）。
     * @example `1714298814000`
     */
    "StartTime": number;
    /**
     * 结束时间，精确到毫秒（ms）。
     * @example `1714385214000`
     */
    "EndTime": number;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 微服务名称，又称为应用名称。
     * @example `service 1`
     */
    "ServiceName"?: string;
    /**
     * Span名称，即某个跟踪点或埋点的名称。
     * @example `/api`
     */
    "OperationName"?: string;
    /**
     * 大于某个时间跨度范围，单位为秒（s）。例如，2表示大于2秒的数据。
     * @example `2`
     */
    "MinDuration"?: number;
    /**
     * 应用类型，取值为`XTRACE`或空。
     * @example `XTRACE`
     */
    "AppType"?: string;
    /**
     * 页码，例如，5表示第5页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页的查询数据条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 按照时间正序或者倒序排列。默认为`false`。取值：
     * - `true`：倒序。
     * - `false` ：顺序。
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * Span对应主机的IP地址。
     * @example `192.163.XXX.XXX`
     */
    "ServiceIp"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `http.status_cod`
         */
        Key: string;
        /**
         * 标签值。
         * @example `200`
         */
        Value: string;
    }[];
}
