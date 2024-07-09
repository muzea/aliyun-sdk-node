export interface QueryJobsRequest {
    /**
     * 实例ID。
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 场景ID。
     * @example `b0f35dd1-0337-402e-9c4f-3a6c2426950a`
     */
    "ScenarioId"?: string;
    /**
     * 任务ID。
     * @example `994b8baf-7ef8-480c-b141-b7b6db77c4df`
     */
    "JobGroupId"?: string;
    /**
     * 过滤条件，开始时间，缺省为0， 代表从今天0时开始。
     * @example `1579068424883`
     */
    "StartTime"?: number;
    /**
     * 过滤条件，截止时间，缺省为0，代表截止到当前时间。
     * @example `1579077794665`
     */
    "EndTime"?: number;
    /**
     * 时间条件按照开始时间还是结束时间查询，有效值为：start、end、job_create。
     * @example `start`
     */
    "TimeAlignment"?: string;
    /**
     * 过滤条件，联系人名字。
     * @example `张三`
     */
    "ContactName"?: string;
    /**
     * 过滤条件，联系人电话号码。
     * @example `135****8888`
     */
    "PhoneNumber"?: string;
    /**
     * 分页序号。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize": number;
}
