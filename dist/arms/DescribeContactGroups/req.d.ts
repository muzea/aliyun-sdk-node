export interface DescribeContactGroupsRequest {
    /**
     * 告警联系人组名称。
     * @example `TestGroup`
     */
    "ContactGroupName"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的联系人组数。
     * @example `20`
     */
    "Size": number;
    /**
     * 返回的联系人分组信息中是否包含所有联系人。
     * - `fasle`（默认）：不返回所有联系人。
     * - `true`：返回所有联系人。
     * @example `true`
     */
    "IsDetail"?: boolean;
    /**
     * 联系人组ID。
     * @example `12345`
     */
    "GroupIds"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
