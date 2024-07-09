export interface UpdateDNSSLBWeightRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 解析记录ID。
     * @example `9999985`
     */
    "RecordId": string;
    /**
     * 要修改的权重值`[1-100]`。
     * @example `2`
     */
    "Weight": number;
}
