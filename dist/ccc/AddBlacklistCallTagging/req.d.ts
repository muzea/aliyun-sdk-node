export interface AddBlacklistCallTaggingRequest {
    /**
     * 呼叫中心实例ID
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 电话号码。
     * @example `1764590****`
     */
    "Number": string;
    /**
     * 通话ID。号码为加密号码(带有*)，需要填写JobId，非加密号码，不需要填写该字段。
     * @example `job-6582589278232****`
     */
    "JobId": string;
}
