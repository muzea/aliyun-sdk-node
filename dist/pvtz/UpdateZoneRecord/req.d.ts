export interface UpdateZoneRecordRequest {
    /**
     * 主机记录。
     * 如果要解析@.exmaple.com，主机记录要填写"@”，而不是空。
     * @example `www`
     */
    "Rr": string;
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 解析记录ID。
     * @example `1722230869`
     */
    "RecordId": number;
    /**
     * 解析线路。
     * @example `default`
     */
    "Line"?: string;
    /**
     * 权重。取值范围：**[0,100]**。
     * @example `1`
     */
    "Weight"?: number;
    /**
     * 解析记录类型，目前仅支持**A**, **AAAA**,**CNAME**, **TXT**, **MX**, **PTR**, **SRV**。
     * @example `A`
     */
    "Type": string;
    /**
     * 生存时间。
     * @example `60`
     */
    "Ttl"?: number;
    /**
     * MX记录的优先级，取值范围：**\[1,99\]**。
     * 记录类型为MX记录时，此参数必选。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 记录值。
     * @example `192.168.0.48`
     */
    "Value": string;
    /**
     * 用户Ip。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
