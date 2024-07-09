export interface ListLegacyAgentEventLogsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 分页序号，范围1-1000。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-1000。
     * @example `100`
     */
    "PageSize": number;
    /**
     * 开始时间，格式为Unix时间戳，单位毫秒。
     * @example `1657853640015`
     */
    "StartTime": number;
    /**
     * 结束时间，格式为Unix时间戳，单位毫秒。
     * @example `1658026440011`
     */
    "EndTime": number;
    /**
     * 按坐席ID过滤，非必填，默认为空，为空表示不过滤。
     * @example `agent@ccc-test`
     */
    "AgentId"?: string;
}
