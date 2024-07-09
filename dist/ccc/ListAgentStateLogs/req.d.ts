export interface ListAgentStateLogsRequest {
    /**
     * 开始时间戳，默认是当天开始时间，最早为当前日期之前的180天，格式为Unix时间戳，单位毫秒。
     * @example `1620230400000`
     */
    "StartTime"?: number;
    /**
     * 截止时间戳，默认是当前时间，EndTime和StartTime的时间差不能超过7天，格式为Unix时间戳，单位毫秒。
     * @example `1620273600000`
     */
    "EndTime"?: number;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "AgentId": string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
}
