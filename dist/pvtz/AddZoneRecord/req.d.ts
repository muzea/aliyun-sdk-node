export interface AddZoneRecordRequest {
    /**
     * Zone ID。
     * @example `CAgICA1OA_58`
     */
    "ZoneId": string;
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 主机记录。
     * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
     * @example `www`
     */
    "Rr": string;
    /**
     * 解析记录类型，目前仅支持**A**, **AAAA**,**CNAME**, **TXT**, **MX**, **PTR**, **SRV**。
     * @example `A`
     */
    "Type": string;
    /**
     * 解析线路，默认为**default**。
     * @example `default`
     */
    "Line"?: string;
    /**
     * 权重。取值范围：**[0,100]**，默认值1。
     * @example `1`
     */
    "Weight"?: number;
    /**
     * 生存时间，默认值为**60**。
     * @example `60`
     */
    "Ttl"?: number;
    /**
     * MX记录的优先级，取值范围：**\[1,99\]**。
     * @example `5`
     */
    "Priority"?: number;
    /**
     * 记录值。
     * @example `1.1.1.1`
     */
    "Value": string;
    /**
     * 用户Ip。
     * @example `2.2.2.2`
     */
    "UserClientIp"?: string;
    /**
     * 语言。
     * @example `en`
     */
    "Remark"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
