export interface ListIpOrHostsRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 应用名称。若为空则查询该地域下所有应用的IP地址。
     * @example `service1`
     */
    "ServiceName"?: string;
    /**
     * 开始时间的时间戳，精确到毫秒（ms）。
     * @example `1583683200000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒（ms）。
     * @example `1583723776974`
     */
    "EndTime"?: number;
}
