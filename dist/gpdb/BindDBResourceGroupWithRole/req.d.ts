export interface BindDBResourceGroupWithRoleRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 资源组名称。
     * @example `testgroup`
     */
    "ResourceGroupName": string;
    /**
     * 角色列表。
     */
    "RoleList": string[];
}
