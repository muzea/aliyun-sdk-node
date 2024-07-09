export interface GetTraceRequest {
    /**
     * 调用链ID。可在ARMS控制台的**调用链路查询**页面或**接口快照**页面获取。
     * @example `ac14001a15954493811405707d****`
     */
    "TraceID": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 开始时间的时间戳，精确到毫秒。
     * >若TraceID长度为30，可不填；若TraceID长度不是30，则必填。
     * @example `1623827602000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * >若TraceID长度为30，可不填；若TraceID长度不是30，则必填。
     * @example `1623827603000`
     */
    "EndTime"?: number;
}
