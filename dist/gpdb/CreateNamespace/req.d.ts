export interface CreateNamespaceRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~196830~~)接口查看目标地域下所有实例的详情，包括实例ID。
     * @example `gp-bp152460513z****`
     */
    "DBInstanceId": string;
    /**
     * 具有rds_superuser权限的管理账号名称。
     * > 您可以通过控制台->账号管理来创建账号，或调用[CreateAccount](~~2361789~~)接口创建。
     * @example `testaccount`
     */
    "ManagerAccount": string;
    /**
     * 管理账号密码。
     * @example `testpassword`
     */
    "ManagerAccountPassword": string;
    /**
     * 要创建的命名空间名称，用于租户隔离（后端会自动创建同名的用户账号）。
     * > 名称需符合PostgreSQL对象名限制。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 命名空间对应的密码。
     * @example `testpassword2`
     */
    "NamespacePassword": string;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
