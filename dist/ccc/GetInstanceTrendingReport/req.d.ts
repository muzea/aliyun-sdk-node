export interface GetInstanceTrendingReportRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 开始时间戳，默认是当天开始时间，最早为当前时间往前180天，开始和截止时间间隔不能超过7天，格式为Unix时间戳，单位毫秒。
     * @example `1604639129000`
     */
    "StartTime"?: number;
    /**
     * 截止时间戳，默认是当前时间，格式为Unix时间戳，单位毫秒。
     * @example `1604725528000`
     */
    "EndTime"?: number;
    /**
     * 媒体类型，默认是语音(Audio), 其他可选参数包括Chat和Video.
     * @example `Audio`
     */
    "MediaType"?: string;
}
