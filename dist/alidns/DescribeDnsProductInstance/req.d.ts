export interface DescribeDnsProductInstanceRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 实例ID。可通过调用**DescribeDomainInfo**获取。
     * @example `i-8fxxxx`
     */
    "InstanceId": string;
}
