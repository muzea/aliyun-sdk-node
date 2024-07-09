export interface ListAttemptsRequest {
    /**
     * 实例ID
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `6badb397-a8b5-40b6-21019d382a09`
     */
    "CampaignId": string;
    /**
     * 开始时间，非必填，不填默认为预测式外呼活动的开始时间，格式为Unix时间戳，单位毫秒。
     * @example `1634115688291`
     */
    "StartTime"?: number;
    /**
     * 结束时间，非必填，不填默认为预测式外呼活动的结束时间，格式为Unix时间戳，单位毫秒。
     * @example `1634115698291`
     */
    "EndTime"?: number;
    /**
     * 按技能组ID过滤，非必填，默认为空，为空表示不过滤。
     * @example `skillgroup@ccc-test`
     */
    "QueueId"?: string;
    /**
     * 系统生成的联系人ID，客户无需关心。
     * @example `60ecb1a2-4480-4d01-bede-c5b7655bfadf`
     */
    "CaseId": string;
    /**
     * 呼叫记录ID，和通话ID取值一样。
     * @example `job-16976964500325****`
     */
    "AttemptId"?: string;
    /**
     * 按通话ID过滤，非必填，默认为空。
     * @example `job-16976964500325****`
     */
    "ContactId"?: string;
    /**
     * 按坐席ID过滤，非必填，默认为空。
     * @example `agent@ccc-test`
     */
    "AgentId"?: string;
    /**
     * 按主叫号码过滤，非必填，默认为空。
     * @example `05711234****`
     */
    "Caller"?: string;
    /**
     * 按被叫号码过滤，非必填，默认为空。
     * @example `1888888****`
     */
    "Callee"?: string;
    /**
     * 分页页码，大小取决于PageNumber和PageSize的乘积，两个参数相乘不能大于10000。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，大小取决于PageNumber和PageSize的乘积，两个参数相乘不能大于10000。
     * @example `100`
     */
    "PageSize": number;
    /**
     * 扩展查询条件。JSON格式，目前支持caseIds，支持caseIds批量查询。
     * @example `{"caseIds":["964f05a7-fc15-4a05-93a6-cd7421c4459e","5e2d508b-0df6-4077-8099-d3fff51ea6d0","da037029-8c83-4270-a90e-e7734be76af6"]}`
     */
    "Criteria"?: string;
}
