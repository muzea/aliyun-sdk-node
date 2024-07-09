export interface ListGroupsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 组ID列表。
     */
    "GroupIds"?: string[];
    /**
     * 组名称，查询为精确匹配查询。
     * @example `name_test`
     */
    "GroupName"?: string;
    /**
     * 组名称前缀，查询为左匹配查询。
     * @example `name`
     */
    "GroupNameStartsWith"?: string;
    /**
     * 组外部ID。
     * @example `group_external_id`
     */
    "GroupExternalId"?: string;
}
