export interface DeleteDomainRecordRequest {
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
     * 解析记录的ID。
     * 此参数在添加解析时会返回，在获取域名解析列表时会返回。
     * @example `9999985`
     */
    "RecordId": string;
}
