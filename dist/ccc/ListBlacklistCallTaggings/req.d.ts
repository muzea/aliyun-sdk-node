export interface ListBlacklistCallTaggingsRequest {
    /**
     * 呼叫中心实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 待查询黑名单打标状态的号码列表，号码为加密号码(带有***)，需要带jobId字段，反之不需要。
     * @example `[{"number":"1521083xxxx","jobId":"job-481841171213393920"}]`
     */
    "NumberList": string;
}
