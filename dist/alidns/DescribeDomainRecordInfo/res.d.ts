export interface DescribeDomainRecordInfoResponse {
    /**
     * 解析记录状态，取值：**Enable/Disable**。
     * @example `Enable`
     */
    Status: string;
    /**
     * 解析类型。
     * @example `@`
     */
    RR: string;
    /**
     * 域名分组名称。
     * @example `MyGroup`
     */
    GroupName: string;
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
    /**
     * MX记录的优先级。
     * @example `5`
     */
    Priority: number;
    /**
     * 只针对中文域名返回punycode码。
     * @example `xn--fsq270a.com`
     */
    PunyCode: string;
    /**
     * 生存时间。
     * @example `600`
     */
    TTL: number;
    /**
     * 域名分组ID。
     * @example `2223`
     */
    GroupId: string;
    /**
     * 解析线路。
     * @example `default`
     */
    Line: string;
    /**
     * 解析记录锁定状态，取值：**true/false**。
     * @example `true`
     */
    Locked: boolean;
    /**
     * 记录类型。
     * @example `MX`
     */
    Type: string;
    /**
     * 域名ID。
     * @example `00efd71a-770e-4255-b54e-6fe5659baffe`
     */
    DomainId: string;
    /**
     * 记录值。
     * @example `1.1.XX.XX`
     */
    Value: string;
    /**
     * 解析记录的ID。
     * @example `9999985`
     */
    RecordId: string;
    /**
     * 您的解析记录的备注信息。
     * @example `test`
     */
    Remark: string;
}
