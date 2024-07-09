export interface GetHistoricalCallerReportRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 来电号码。
     * @example `1900000****`
     */
    "CallingNumber": string;
    /**
     * 查询的结束时间戳，格式为Unix时间戳，单位毫秒。
     * @example `1646928000000`
     */
    "StopTime": number;
    /**
     * 查询的开始时间戳，格式为Unix时间戳，单位毫秒。
     * @example `1646841600000`
     */
    "StartTime": number;
}
