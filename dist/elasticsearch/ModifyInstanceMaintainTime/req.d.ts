export interface ModifyInstanceMaintainTimeRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "ClientToken"?: string;
    /**
     * 请求体参数，详情请参见下文的RequestBody章节。
     * @example `{     "openMaintainTime": true,     "maintainStartTime": "03:00Z",     "maintainEndTime": "04:00Z" }`
     */
    "body"?: string;
}
