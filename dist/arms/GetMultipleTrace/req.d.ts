export interface GetMultipleTraceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 调用链ID列表。
     * @example `ac1400a115951745017447033d****`
     */
    "TraceIDs": string[];
    /**
     * 调用链路开始时间的时间戳，单位为毫秒。
     * @example `1657692507000`
     */
    "StartTime"?: number;
    /**
     * 调用链路结束时间的时间戳，单位为毫秒。
     * @example `1663999380000`
     */
    "EndTime"?: number;
}
