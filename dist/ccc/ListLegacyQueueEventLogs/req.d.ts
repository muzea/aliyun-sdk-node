export interface ListLegacyQueueEventLogsRequest {
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
     * @example `1657939540015`
     */
    "StartTime": number;
    /**
     * 结束时间，格式为Unix时间戳，单位毫秒。
     * @example `1658026180018`
     */
    "EndTime": number;
    /**
     * 按技能组ID过滤，非必填，默认为空，为空表示不过滤。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId"?: string;
}
