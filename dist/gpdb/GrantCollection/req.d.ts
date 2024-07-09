export interface GrantCollectionRequest {
    /**
     * 存储预留模式实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 集合名。
     * > 您可以通过[CreateCollection](~~2401497~~)接口创建，通过[ListCollections](~~2401503~~)接口查看列表。
     * @example `document`
     */
    "Collection": string;
    /**
     * 授权目标，即此命名空间有此向量集的相应权限。
     * @example `othernamespace`
     */
    "GrantToNamespace": string;
    /**
     * 授权类型，可选值：
     * - rw：读写权限
     * - ro：只读权限
     * - none：删除权限
     * @example `rw`
     */
    "GrantType": string;
    /**
     * 具有rds_superuser权限的管理账户名称。
     * > 您可以通过控制台->账号管理来创建账号，或者通过[CreateAccount](~~2361789~~)接口创建。
     * @example `testaccount`
     */
    "ManagerAccount": string;
    /**
     * 管理账户密码。
     * @example `testpassword`
     */
    "ManagerAccountPassword": string;
    /**
     * 命名空间。
     * > 您通过[ListNamespaces](~~2401502~~)查看列表。
     * @example `mynamespace`
     */
    "Namespace"?: string;
    /**
     * 实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
