export interface ListUsersRequest {
    /**
     * 认证信息。
     * 格式：Bearer ${access_token}。
     * 示例：Bearer ATxxxx。
     * @example `Bearer AT8csE2seYxxxxxij`
     */
    "Authorization": string;
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "instanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "organizationalUnitId"?: string;
    /**
     * 页码，默认1。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 单页大小读取记录数，默认20，范围为1～100。
     * @example `20`
     */
    "pageSize"?: number;
}
