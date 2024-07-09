export interface ModifyVulWhitelistTargetRequest {
    /**
     * 访问源IP地址。
     * @example `42.120.75.150`
     */
    "SourceIp"?: string;
    /**
     * 漏洞白名单ID。
     * > 您可以调用[DescribeVulWhitelist](~~DescribeVulWhitelist~~)接口获取漏洞白名单的ID。
     * @example `2533681`
     */
    "Id": number;
    /**
     * 设置白名单生效的范围。该字段为JSON格式，包含以下字段。
     * - **type**：生效类型。取值：
     *     - **GroupId**：群组
     *     - **Uuid**：主机资产
     * - **uuids**：主机资产UUID集合。
     * - **groupIds**：群组编号集合。
     * > 该值为空表示作用全部主机。若**type**为**GroupId**时，**groupIds**不能为空。若**type**为**Uuid**时，**uuids**不能为空
     * @example `{
          "type": "GroupId",
          "uuids": [],
          "groupIds": [
                10782678
          ]
    }`
     */
    "TargetInfo"?: string;
    /**
     * 添加白名单原因说明。
     * @example `1221`
     */
    "Reason"?: string;
}
