export interface CreateOutboundCallNumberRequest {
    /**
     * 实例id
     * @example `174952ab-9825-4cc9-a5e2-de82d7fa4cdd`
     */
    "InstanceId": string;
    /**
     * 外呼号码
     * @example `95187`
     */
    "Number": string;
    /**
     * 限流时间范围，单位为秒
     * @example `120`
     */
    "RateLimitPeriod": number;
    /**
     * 限流时间范围时间内可以呼出的次数
     * @example `20`
     */
    "RateLimitCount": number;
}
