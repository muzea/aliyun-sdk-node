export interface ListOrganizationalUnitsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小，默认20，最大不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 组织ID列表，列表元素数量最多不超过100。
     * @example `[ou_wovwffm62xifdziem7an7xxxxx]`
     */
    "OrganizationalUnitIds"?: string[];
    /**
     * 组织名称，查询为精确匹配查询。
     * @example `name_001`
     */
    "OrganizationalUnitName"?: string;
    /**
     * 组织名称前缀，查询为左匹配查询。
     * @example `name`
     */
    "OrganizationalUnitNameStartsWith"?: string;
    /**
     * 父组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "ParentId"?: string;
}
