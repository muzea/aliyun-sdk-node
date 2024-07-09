export interface CreateServiceLinkedRoleRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务关联角色。
     * - **AliyunServiceRoleForRdsPgsqlOnEcs**：RDS PostgreSQL服务关联角色
     * - **AliyunServiceRoleForRDSProxyOnEcs**：RDS PostgreSQL Proxy数据库代理服务关联角色
     * @example `AliyunServiceRoleForRdsPgsqlOnEcs`
     */
    "ServiceLinkedRole": string;
}
