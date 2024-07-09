export interface ModifyAccountPrivilegeRequest {
    /**
     * 数据库账号的权限类型。取值说明：
     * - **Normal**：普通账户。
     * - **Readonly**：只读账户。
     * - **Dml**：DML账户（无DDL权限）。
     * - **Super**：超级账户。
     * @example `Normal`
     */
    "PrivilegeType": string;
    /**
     * 数据库账号。
     * @example `test`
     */
    "Account": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
