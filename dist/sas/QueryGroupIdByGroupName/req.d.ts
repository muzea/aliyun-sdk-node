export interface QueryGroupIdByGroupNameRequest {
    /**
     * 访问源的IP地址。
     * @example `10.12.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的分组的名称。
     * @example `TestGroupName`
     */
    "GroupName": string;
}
