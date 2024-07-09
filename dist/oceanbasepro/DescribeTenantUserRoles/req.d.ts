export interface DescribeTenantUserRolesRequest {
    /**
     * 租户 ID。
     * 如果传入的是 MySQL 模式租户 ID，则返回 MySQL 模式下普通用户的权限配置信息；如果传入的是 Oracle 租户 ID，则返回的是 Oracle 普通用户的权限配置信息。
     * @example `t4pnum****`
     */
    "TenantId"?: string;
}
