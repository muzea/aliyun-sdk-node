export interface ListSpanNamesRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 服务名称，又称为应用名称。
     * @example `service 1`
     */
    "ServiceName"?: string;
    /**
     * 开始时间的时间戳，精确到毫秒（ms）。
     * @example `1714298814000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒（ms）。
     * @example `1714385214000`
     */
    "EndTime"?: number;
}
