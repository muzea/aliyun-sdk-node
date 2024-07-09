export interface UpdateDomainRecordRequest {
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
     * @example `9999985`
     */
    "RecordId": string;
    /**
     * 主机记录。
     * 如果要解析@.exmaple.com，主机记录要填写”@”，而不是空。
     * @example `www`
     */
    "RR": string;
    /**
     * 解析记录类型，参见:
     * <props="china">[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html)。</props>
     * <props="intl">[解析记录类型格式](https://www.alibabacloud.com/help/zh/doc-detail/29805.htm)。</props>
     * @example `A`
     */
    "Type": string;
    /**
     * 记录值。
     * @example `192.0.2.254`
     */
    "Value": string;
    /**
     * 解析生效时间，默认为600秒（10分钟）。
     * 参见:
     * <props="china">[TTL定义说明](https://help.aliyun.com/document_detail/29806.html)。</props>
     * <props="intl">[TTL定义说明](https://www.alibabacloud.com/help/zh/doc-detail/29806.htm)。</props>
     * @example `600`
     */
    "TTL"?: number;
    /**
     * MX记录的优先级，取值范围：`[1,50]`。
     * 记录类型为MX记录时，此参数必需。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 解析线路，默认为**default**。
     * 参见:
     * <props="china">[解析线路枚举](https://help.aliyun.com/document_detail/29807.html)。</props>
     * <props="intl">[解析线路枚举](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm)。</props>
     * @example `default`
     */
    "Line"?: string;
}
