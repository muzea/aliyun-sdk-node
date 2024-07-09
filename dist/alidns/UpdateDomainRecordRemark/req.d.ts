export interface UpdateDomainRecordRemarkRequest {
    /**
     * 语言。
     * @example `cn`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 您的解析记录ID。
     * @example `12345678`
     */
    "RecordId": string;
    /**
     * 您的解析记录的备注信息。
     * @example `我的第一个解析记录`
     */
    "Remark"?: string;
}
