export interface DeleteNamespaceRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp152460513z7****`
     */
    "DBInstanceId": string;
    /**
     * 具有rds_superuser权限的管理账号名称。
     * > 您可以通过控制台->账号管理来创建账号，或者通过[CreateAccount](~~2361789~~)接口创建。
     * @example `testaccount`
     */
    "ManagerAccount": string;
    /**
     * 管理账号密码。
     * @example `testpassword`
     */
    "ManagerAccountPassword": string;
    /**
     * 命名空间。
     * > 您可以通过[ListNamespaces](~~2401502~~)接口查看列表。
     * @example `mynamespace`
     */
    "Namespace": string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
